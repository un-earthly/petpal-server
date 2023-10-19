import IBooking from "./booking.interface";
import IPet from "./pet.interface";
import IReview from "./review.interface";
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
    pet: IPet | null;
    booking: IBooking[];
    review: IReview[];
}


export default IService