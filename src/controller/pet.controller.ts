import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync';
import {
    createPet,
    getAllPets,
    getPetById,
    updatePet,
    deletePet,
} from '../services/pet.service';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';
import { sendResponse } from '../utils/sendResponse';

const petController = {
    createPet: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const petData = req.body;
        if (!petData) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Pet data is required');
        }
        const data = await createPet(petData);
        sendResponse(res, httpStatus.OK, data, "successfully created pet")
    }),

    getAllPet: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const data = await getAllPets();
        sendResponse(res, httpStatus.OK, data, "successfully fetched all pets")
    }),

    getPetById: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const petId = parseInt(req.params.id);
        const data = await getPetById(petId);
        if (!data) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
        }
        sendResponse(res, httpStatus.OK, data, `successfully fetched ${data.name}`)

    }),

    updatePet: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const petId = parseInt(req.params.id);
        const petData = req.body;
        if (!petData) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Pet data is required');
        }
        const data = await updatePet(petId, petData);
        sendResponse(res, httpStatus.OK, data, `successfully updated ${data.name}`)
    }),

    deletePet: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const petId = parseInt(req.params.id);
        const data = await deletePet(petId);
        sendResponse(res, httpStatus.OK, data, `successfully deleted ${data.name}`)

    }),
};

export default petController;
