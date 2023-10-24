import express from "express";
import { verifyToken } from "../middlewares/token";
import { superAdminRoute } from "../middlewares/privateRoutes";
import { SuperAdminController } from "../controller/super-admin.controller";
const superAdminRoutes = express.Router();

superAdminRoutes.get('/admins', verifyToken, superAdminRoute, SuperAdminController.getAllAdmins);
superAdminRoutes.post('/admins/add', verifyToken, superAdminRoute, SuperAdminController.addAdmin);
superAdminRoutes.get('/admins/:adminId', verifyToken, superAdminRoute, SuperAdminController.getAdminDetails);
superAdminRoutes.put('/admins/:adminId/edit', verifyToken, superAdminRoute, SuperAdminController.editAdminDetails);

export default superAdminRoutes;