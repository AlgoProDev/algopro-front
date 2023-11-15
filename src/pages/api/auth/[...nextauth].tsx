import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        if (credentials) {
          const user = await prisma.adminUser.findUnique({
            where: { email: credentials.email },
          });

          if (user && bcrypt.compareSync(credentials.password, user.password)) {
            // Convert `id` to a string
            return { id: user.id.toString(), name: user.name, email: user.email };
          } else {
            throw new Error("Invalid email or password");
          }
        }
        throw new Error("Credentials not provided");
      },
    }),
  ],
});
