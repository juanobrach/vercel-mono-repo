/*
  Warnings:

  - You are about to drop the column `trackKey` on the `Track` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "trackKey",
ADD COLUMN     "key" TEXT;
