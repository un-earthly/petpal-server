
export interface ITimeSlot {
    id?: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
