-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "artwork" TEXT,
ADD COLUMN     "bpm" INTEGER,
ADD COLUMN     "length" VARCHAR(255),
ADD COLUMN     "released" VARCHAR(255);
