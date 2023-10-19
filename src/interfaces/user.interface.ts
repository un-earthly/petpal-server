import IArticle from "./article.interface";
import IBooking from "./booking.interface";
import IPet from "./pet.interface";
import IReview from "./review.interface";
import IService from "./service.inteface";
export enum IUserRolesEnum {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN'
}


interface IUser {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: IUserRolesEnum;
    profileImage: string | null;
    phoneNumber: string;
    address: string;
    description: string | null;
    pets?: IPet[];
    notificationsEnabled: boolean;
    articles?: IArticle[]
    reviews?: IReview[]
    service?: IService[]
    booking?: IBooking[]
}


export default IUser



