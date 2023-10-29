export interface ITimeSlot {
    startTime: string;
    endTime: string;
    serviceId: number;
    isAvailable: boolean;
    date: Date;
}
interface IService {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    price: string;
    selectedTime: string;
    availableTimeSlots: ITimeSlot[];
}

export default IService;
