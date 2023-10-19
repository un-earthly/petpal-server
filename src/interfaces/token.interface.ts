import { IUserRolesEnum } from "./user.interface";

export interface ITokenPayload{
    role: IUserRolesEnum,
    id: number,
    email: string
}