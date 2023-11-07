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
    id: number;
    bookingDate: Date;
    serviceTime: string;
    status: IBookingStatusEnum;
    paymentAmount: number;
    paymentStatus: IPaymentEnum;
    paymentDate: Date;
    userId: number;
    serviceId: number;
    // petId: number;
    createdAt: Date;
    updatedAt: Date;
}