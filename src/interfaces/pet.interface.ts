import IReview from "./review.interface";
import IService from "./service.inteface";
import IUser from "./user.interface";

interface IPet {
    id: number;
    name: string;
    type: string;
    age: number;
    description: string | null;
    servicesOffered:IService[];
    ownerId: number;
    owner: IUser;
    breed: string | null;
    size: string | null;
    gender: string | null;
    vaccinationStatus: string | null;
    medicalHistory: string | null;
    imageUrls: string[];
    servicesRequested: IService[];
    reviews: IReview[];
    availableServices:IService[];
}
export default IPet
