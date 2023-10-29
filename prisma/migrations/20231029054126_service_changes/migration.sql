/*
  Warnings:

  - You are about to drop the column `duration` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Service` table. All the data in the column will be lost.
  - Added the required column `image` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "duration",
DROP COLUMN "name",
DROP COLUMN "providerId",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "selectedTime" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;
