import IUser from "./user.interface";

interface IArticle {
    id: number;
    title: string;
    content: string;
    authorId: number;
    author: IUser;
    createdAt: Date;
    updatedAt: Date;
}

export default IArticle;