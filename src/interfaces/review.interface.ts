import IPet from "./pet.interface";
import IService from "./service.inteface";
import IUser from "./user.interface";

interface IReview {
    id: number;
    rating: number;
    comments: string;
    userId: number;
    serviceId: number;
    createdAt: Date;
    updatedAt: Date;
    petId: number | null;
    user: IUser;
    pet: IPet | null;
    service: IService;
}
export default IReview