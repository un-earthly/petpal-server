import IService from "./service.inteface";
import IUser from "./user.interface";

interface IReview {
    id: number;
    rating: number;
    comments: string;
    userId: number;
    user: IUser;
    serviceId: number;
    service: IService;
    createdAt: Date;
    updatedAt: Date;
}
export default IReview