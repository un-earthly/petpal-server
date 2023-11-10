import { PrismaClient } from "@prisma/client";
import { ITimeSlot } from "../interfaces/timeSlots.interface";
import { generateTimeSlots } from "../utils/generateTimeSlots";

const prisma = new PrismaClient();

const timeSlotsServices = {
    getTimeSlots: () => {
        const availableTimeSlots = prisma.timeSlot.findMany({
            where: {
                isAvailable: true
            }
        });
        return availableTimeSlots;
    },
    updateTimeSlots: (id: number) => {
        const updatedTimeSlots = prisma.timeSlot.update({
            where: {
                id
            },
            data: {
                isAvailable: false
            }
        });

        return updatedTimeSlots;
    },
};
export default timeSlotsServices;
