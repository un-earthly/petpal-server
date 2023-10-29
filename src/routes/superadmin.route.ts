import express from "express";
import { verifyToken } from "../middlewares/token";
import { superAdminRoute } from "../middlewares/privateRoutes";
import { SuperAdminController } from "../controller/super-admin.controller";
const superAdminRoutes = express.Router();

superAdminRoutes.get('/', verifyToken, superAdminRoute, SuperAdminController.getAllAdmins);
superAdminRoutes.post('/create', verifyToken, superAdminRoute, SuperAdminController.makeUserAdmin);
superAdminRoutes.get('/:adminId', verifyToken, superAdminRoute, SuperAdminController.getAdminDetails);
superAdminRoutes.put('/:adminId/edit', verifyToken, superAdminRoute, SuperAdminController.editAdminDetails);

export default superAdminRoutes;