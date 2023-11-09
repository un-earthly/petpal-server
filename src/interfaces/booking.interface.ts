import IService, { ITimeSlot } from "./service.inteface";
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
export default interface IBooking {
    // id: number;
    // bookingDate: Date;
    // serviceTime: string;
    // status: IBookingStatusEnum;
    // paymentAmount: number;
    // paymentStatus: IPaymentEnum;
    // paymentDate: Date;
    // userId: number;
    // serviceId: number;
    // // petId: number;
    // createdAt: Date;
    // updatedAt: Date;
    id: number
    timeSlotId:number
    timeSlot:ITimeSlot
    status: IBookingStatusEnum
    userId: number
    user?: IUser
    serviceId: number
    service?: IService
}