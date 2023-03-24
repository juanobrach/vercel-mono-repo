/*
  Warnings:

  - Made the column `beatportId` on table `Label` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Label" ALTER COLUMN "beatportId" SET NOT NULL;
