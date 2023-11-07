export interface ITimeSlot {
    startTime: string;
    endTime: string;
    serviceId: number;
    isAvailable: boolean;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
interface IService {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    selectedTime: string;
    availableTimeSlots?: ITimeSlot[];
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export default IService;
