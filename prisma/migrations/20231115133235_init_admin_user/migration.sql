/*
  Warnings:

  - You are about to drop the `Module` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_course_id_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "content" TEXT NOT NULL DEFAULT 'None',
ADD COLUMN     "tutor" TEXT NOT NULL DEFAULT 'None';

-- DropTable
DROP TABLE "Module";
