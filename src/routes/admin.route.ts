import { AdminController } from "../controller/admin.controller";
import { adminRoute } from "../middlewares/privateRoutes";
import { verifyToken } from "../middlewares/token";
import express from "express"
const adminRoutes = express.Router();

adminRoutes.get('/content', verifyToken, adminRoute,AdminController.getAllArticles);
adminRoutes.post('/content/add', verifyToken, adminRoute,AdminController.addArticle);
adminRoutes.get('/content/:articleId', verifyToken, adminRoute,AdminController.getArticleDetails);
adminRoutes.put('/content/:articleId/edit', verifyToken, adminRoute, AdminController.editArticleDetails);

export default adminRoutes;