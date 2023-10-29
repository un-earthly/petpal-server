interface IReview {
    id: number;
    rating: number;
    comments: string;
    userID: number;
    serviceId?: number;
    petId?: number;
}
export default IReview