import IUser from "./user.interface";

interface IArticle {
    id: number;
    title: string;
    content: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    user: IUser | null;
    userId: number | null;
}

export default IArticle;