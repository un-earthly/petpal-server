import IUser from "./user.interface";

interface IService {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    duration: number;
    providerId: number;
    provider: IUser;
    createdAt: Date;
    updatedAt: Date;
}


export default IService