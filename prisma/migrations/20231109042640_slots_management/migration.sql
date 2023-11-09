/*
  Warnings:

  - You are about to drop the column `appointmentAt` on the `booking` table. All the data in the column will be lost.
  - Added the required column `timeSlotId` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "booking" DROP CONSTRAINT "booking_paymentId_fkey";

-- AlterTable
ALTER TABLE "booking" DROP COLUMN "appointmentAt",
ADD COLUMN     "timeSlotId" INTEGER NOT NULL,
ALTER COLUMN "paymentId" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "timeslot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
