/*
  Warnings:

  - A unique constraint covering the columns `[CPF]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CNPJ]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CNPJ` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closesAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opensAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PROCESSING', 'SHIPPING', 'DELIVERED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PROCESSING';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "CNPJ" TEXT NOT NULL,
ADD COLUMN     "CPF" TEXT NOT NULL,
ADD COLUMN     "closesAt" TEXT NOT NULL,
ADD COLUMN     "opensAt" TEXT NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "WorkingDay" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "WorkingDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Segment" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "Segment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToWorkingDay" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_SegmentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkingDay_AB_unique" ON "_UserToWorkingDay"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkingDay_B_index" ON "_UserToWorkingDay"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SegmentToUser_AB_unique" ON "_SegmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SegmentToUser_B_index" ON "_SegmentToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_CPF_key" ON "User"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "User_CNPJ_key" ON "User"("CNPJ");

-- AddForeignKey
ALTER TABLE "_UserToWorkingDay" ADD CONSTRAINT "_UserToWorkingDay_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkingDay" ADD CONSTRAINT "_UserToWorkingDay_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkingDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SegmentToUser" ADD CONSTRAINT "_SegmentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Segment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SegmentToUser" ADD CONSTRAINT "_SegmentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
