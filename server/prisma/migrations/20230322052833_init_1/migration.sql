/*
  Warnings:

  - A unique constraint covering the columns `[beatportId]` on the table `Label` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Label_beatportId_key" ON "Label"("beatportId");
