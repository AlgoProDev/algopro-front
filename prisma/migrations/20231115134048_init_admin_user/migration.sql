/*
  Warnings:

  - Added the required column `module` to the `Curriculum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curriculum" ADD COLUMN     "module" TEXT NOT NULL;
