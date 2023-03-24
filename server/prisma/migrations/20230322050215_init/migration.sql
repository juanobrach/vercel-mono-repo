-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "label" TEXT,
    "genre" TEXT,
    "trackKey" TEXT,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);
