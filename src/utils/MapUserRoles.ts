import { IUserRolesEnum } from "../interfaces/user.interface";

export default function mapUserRoleToEnum(userRole: string): IUserRolesEnum {
    switch (userRole) {
        case 'ADMIN':
            return IUserRolesEnum.ADMIN;
        case 'SUPER_ADMIN':
            return IUserRolesEnum.SUPER_ADMIN;
        case 'USER':
            return IUserRolesEnum.USER;
        default:
            throw new Error('Invalid user role');
    }
}

