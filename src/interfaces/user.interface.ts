export enum IUserRolesEnum {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN'
}


interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: IUserRolesEnum;
    profileImage: string;
    phoneNumber: string;
    address: string;
    bio: string;
    petIds: string[];
    articleIds: string[];
    reviewIds: string[];
    bookedServicesIds: string[];
    perticipatingEventsIds: string[];
    gender: string;
    createdAt: Date;
    updatedAt: Date;
}


export default IUser



