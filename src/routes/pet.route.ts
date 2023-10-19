import express from 'express';
import petController from '../controller/pet.controller';
const petRouter = express.Router();

petRouter.post('/', petController.createPet);

petRouter.get('/', petController.getAllPet);

petRouter.get('/:id', petController.getPetById);

petRouter.put('/:id', petController.updatePet);

petRouter.delete('/:id', petController.deletePet);

export default petRouter;