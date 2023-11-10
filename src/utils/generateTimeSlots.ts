import { ITimeSlot } from "../interfaces/timeSlots.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function formatTime(time: Date): string {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

export async function generateTimeSlots(day: Date) {
    const timeSlots: ITimeSlot[] = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 60) {
            const startTime = new Date(day);
            startTime.setHours(hour, minute);
            const endTime = new Date(startTime);
            endTime.setMinutes(endTime.getMinutes() + 60);

            const startTimeString = formatTime(startTime);
            const endTimeString = formatTime(endTime);

            const timeSlotData: ITimeSlot = {
                startTime: startTimeString,
                endTime: endTimeString,
                isAvailable: true,
                date: day,
            };

            timeSlots.push(timeSlotData);
        }
    }

    await prisma.timeSlot.createMany({
        data: timeSlots,
    });
    return timeSlots;
}

export const cleanupTimeSlots = async () => {
    try {
        const timestamp = new Date();
        timestamp.setDate(timestamp.getDate() - 1);

        await prisma.timeSlot.deleteMany({
            where: {
                createdAt: {
                    lte: timestamp,
                },
            },
        });

        console.log("Old time slots deleted successfully");
    } catch (error) {
        console.error("Error deleting old time slots:", error);
    }
};

const interval = 24 * 60 * 60 * 1000;

// const cleanupInterval = 24 * 60 * 60 * 1000; 
setInterval(cleanupTimeSlots, interval);
console.log("Time slots generation and cleanup jobs scheduled to run every 24 hours");
