/*
  Warnings:

  - You are about to drop the column `certificate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `laboratory` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Product` table. All the data in the column will be lost.
  - Added the required column `answer` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "certificate",
DROP COLUMN "color",
DROP COLUMN "laboratory",
DROP COLUMN "origin",
DROP COLUMN "weight";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;
