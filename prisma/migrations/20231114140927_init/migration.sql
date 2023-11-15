-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 200;

-- CreateTable
CREATE TABLE "People" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);
