interface IReview {
    id: number;
    rating: number;
    comments: string;
    userID: number;
    serviceId?: number;
    petId?: number;
    createdAt: Date;
    updatedAt: Date;
}
export default IReview