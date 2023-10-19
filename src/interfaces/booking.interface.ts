import IPet from "./pet.interface";
import IService from "./service.inteface";
import IUser from "./user.interface";

export enum IPaymentEnum {
    UNPAID = 'UNPAID',
    PAID = 'PAID',
    REFUNDED = 'REFUNDED',
}
export enum IBookingStatusEnum {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
}
interface IBooking {
    id: number;
    serviceDate: Date;
    serviceTime: string;
    status: IBookingStatusEnum;
    petId: number;
    userId: number;
    serviceId: number;
    paymentAmount: number;
    paymentStatus: IPaymentEnum;
    paymentDate: Date;
    user: IUser;
    pet: IPet;
    service:IService;
}

export default IBooking;