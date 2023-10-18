import IPet from "./pet.interface";

export enum IUserRolesEnum {
    'User',
    'Admin',
    'Super Admin'
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
    pets: IPet[];
    notificationsEnabled: boolean;
}
export default IUser



