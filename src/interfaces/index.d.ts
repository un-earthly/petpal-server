import { Request } from 'express';
import { ITokenPayload } from './token.interface';

declare global {
    namespace Express {
        interface Request {
            user:ITokenPayload
        }
    }
}
