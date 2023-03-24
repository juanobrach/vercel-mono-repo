/*
  Warnings:

  - You are about to drop the column `beatportId` on the `Label` table. All the data in the column will be lost.
  - You are about to drop the column `beatportId` on the `Track` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[beatportLabelId]` on the table `Label` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[beatportTrackId]` on the table `Track` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `beatportLabelId` to the `Label` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beatportTrackId` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Label_beatportId_key";

-- DropIndex
DROP INDEX "Track_beatportId_key";

-- AlterTable
ALTER TABLE "Label" DROP COLUMN "beatportId",
ADD COLUMN     "beatportLabelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "beatportId",
ADD COLUMN     "beatportTrackId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Label_beatportLabelId_key" ON "Label"("beatportLabelId");

-- CreateIndex
CREATE UNIQUE INDEX "Track_beatportTrackId_key" ON "Track"("beatportTrackId");
