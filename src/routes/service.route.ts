import express from "express";
import { verifyToken } from "../middlewares/token";
import ServiceController from "../controller/service.controller";
const serviceRoutes = express.Router();


serviceRoutes.get('/', ServiceController.getAllServices);
serviceRoutes.post('/', ServiceController.createServices);
serviceRoutes.put('/:serviceId', ServiceController.updateService);
serviceRoutes.get('/search', ServiceController.searchServices);
serviceRoutes.get('/:serviceId', ServiceController.getServiceDetails);

serviceRoutes.get('/:serviceId/reviews', ServiceController.getServiceReviews);
serviceRoutes.post('/:serviceId/reviews/add', verifyToken, ServiceController.addServiceReview);
serviceRoutes.delete('/:serviceId', verifyToken, ServiceController.deleteService);

// serviceRoutes.post('/:serviceId/book', verifyToken, ServiceController.bookService);
// serviceRoutes.post('/cart/checkout', verifyToken, ServiceController.checkoutCart);

export default serviceRoutes;