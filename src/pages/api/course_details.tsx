import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const course = req.query.course_id;
  if (!course) {
    res.status(400).json({ error: "Course ID is required" });
    return;
  }
  if (req.method === "GET") {
    try {
      const courses = await prisma.course.findFirst({ where: { id: course as string } });
      const modules = await prisma.curriculum.findMany({
        where: { module: course as string },
        orderBy: {
          order: "asc",
        },
      });
      await prisma.$disconnect();
      res.status(200).json({ courses, modules });
    } catch (error) {
      await prisma.$disconnect();
      res.status(500).json({ error: "Error fetching the courses" + error });
    }
  } else {
    await prisma.$disconnect();
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
