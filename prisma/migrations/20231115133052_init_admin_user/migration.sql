-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "tutor" TEXT NOT NULL DEFAULT 'None';

-- CreateTable
CREATE TABLE "Curriculum" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "sub_module" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculum_pkey" PRIMARY KEY ("id")
);
