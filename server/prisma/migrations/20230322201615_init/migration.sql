/*
  Warnings:

  - You are about to drop the column `genre` on the `Track` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Label_name_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "genre",
ADD COLUMN     "genreId" INTEGER;

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "beatportGenreId" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_beatportGenreId_key" ON "Genre"("beatportGenreId");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
