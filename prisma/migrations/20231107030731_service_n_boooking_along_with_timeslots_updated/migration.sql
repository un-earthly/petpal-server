/*
  Warnings:

  - You are about to drop the column `isPaid` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `timeslot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "timeslot" DROP CONSTRAINT "timeslot_serviceId_fkey";

-- AlterTable
ALTER TABLE "booking" ALTER COLUMN "appointmentAt" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "isPaid";

-- AlterTable
ALTER TABLE "timeslot" DROP COLUMN "serviceId";
