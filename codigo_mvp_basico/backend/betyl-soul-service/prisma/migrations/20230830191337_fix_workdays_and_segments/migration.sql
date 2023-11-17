/*
  Warnings:

  - You are about to drop the column `day` on the `Segment` table. All the data in the column will be lost.
  - Added the required column `name` to the `Segment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Segment" DROP COLUMN "day",
ADD COLUMN     "name" TEXT NOT NULL;
