import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const timeSlotsServices = {
    getTimeSlots: () => {
        const availableTimeSlots = prisma.timeSlot.findMany({
            where: {
                isAvailable: true
            }
        });
        return availableTimeSlots;
    }
}
export default timeSlotsServices;
