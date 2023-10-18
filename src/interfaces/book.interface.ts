import IPet from "./pet.interface";
import IService from "./service.inteface";
import IUser from "./user.interface";

export enum IPaymentEnum {
    'unpaid',
    'paid',
    'refunded'
}
export enum IBookingStatusEnum {
    'pending',
    'confirmed',
    'completed',
    'canceled'
}
interface IBooking {
    id: number;
    serviceDate: Date;
    serviceTime: string;
    status: IBookingStatusEnum;
    petId: number;
    pet: IPet;
    providerId: number;
    provider: IUser;
    userId: number;
    user: IUser;
    serviceId: number;
    service: IService;
    paymentAmount: number;
    paymentStatus: IPaymentEnum;
    paymentDate: Date | null;
}

export default IBooking;