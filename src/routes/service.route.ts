import express from "express";
import { verifyToken } from "../middlewares/token";
import ServiceController from "../controller/service.controller";
const serviceRoutes = express.Router();


serviceRoutes.get('/', ServiceController.getAllServices);
serviceRoutes.get('/search', ServiceController.searchServices);
serviceRoutes.get('/:serviceId', ServiceController.getServiceDetails);

serviceRoutes.get('/:serviceId/reviews', ServiceController.getServiceReviews);
serviceRoutes.post('/:serviceId/reviews/add', verifyToken, ServiceController.addServiceReview);

serviceRoutes.post('/:serviceId/book', verifyToken, ServiceController.bookService);
serviceRoutes.post('/cart/checkout', verifyToken, ServiceController.checkoutCart);

export default serviceRoutes;