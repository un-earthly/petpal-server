import IBooking from "./booking.interface";
import IReview from "./review.interface";
import IService from "./service.inteface";
import IUser from "./user.interface";

interface IPet {
    id: number;
    name: string;
    type: string;
    age: number;
    description: string | null;
    ownerId: number;
    owner: IUser;
    breed: string | null;
    size: string | null;
    gender: string | null;
    vaccinationStatus: string | null;
    medicalHistory: string | null;
    imageUrls: string[];
    availableServices: IService[];
    reviews: IReview[];
    booking: IBooking[];
}
export default IPet
