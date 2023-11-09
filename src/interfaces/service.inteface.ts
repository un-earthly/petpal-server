export interface ITimeSlot {
    startTime: string;
    endTime: string;
    serviceId: number;
    isAvailable: boolean;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
enum PetServiceCategory {
    GROOMING = "GROOMING",
    BOARDING = "BOARDING",
    TRAINING = "TRAINING",
    WALKING = "WALKING",
    VETERINARY = "VETERINARY",
    SITTING = "SITTING",
    DAYCARE = "DAYCARE",
    OTHERS = "OTHERS",
}


interface IService {
    id: number;
    title: string;
    description: string;
    category: PetServiceCategory;
    image: string;
    price: number;
    selectedTime: string;
    availableTimeSlots?: ITimeSlot[];
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export default IService;
