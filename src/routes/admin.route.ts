import { adminRoute } from "../middlewares/privateRoutes";
import { verifyToken } from "../middlewares/token";
import express from "express"
const adminRoutes = express.Router();

adminRoutes.get('/dashboard', verifyToken, adminRoute,AdminController.getAdminDashboard);

adminRoutes.get('/users', verifyToken, adminRoute,AdminController.getAllUsers);
adminRoutes.get('/users/:userId', verifyToken, adminRoute,AdminController.getUserDetails);
adminRoutes.put('/users/:userId/edit', verifyToken, adminRoute,AdminController.editUserDetails);

adminRoutes.get('/services', verifyToken, adminRoute,AdminController.getAllServices);
adminRoutes.post('/services/add', verifyToken, adminRoute,AdminController.addService);
adminRoutes.get('/services/:serviceId', verifyToken, adminRoute,AdminController.getServiceDetails);
adminRoutes.put('/services/:serviceId/edit', verifyToken, adminRoute,AdminController.editServiceDetails);

adminRoutes.get('/bookings', verifyToken, adminRoute,AdminController.getAllBookings);
adminRoutes.get('/bookings/:bookingId', verifyToken, adminRoute,AdminController.getBookingDetails);
adminRoutes.put('/bookings/:bookingId/cancel', verifyToken, adminRoute,AdminController.cancelBooking);
adminRoutes.put('/bookings/:bookingId/status/update', verifyToken, adminRoute,AdminController.updateBookingStatus);

adminRoutes.get('/content/articles', verifyToken, adminRoute,AdminController.getAllArticles);
adminRoutes.post('/content/articles/add', verifyToken, adminRoute,AdminController.addArticle);
adminRoutes.get('/content/articles/:articleId', verifyToken, adminRoute,AdminController.getArticleDetails);
adminRoutes.put('/content/articles/:articleId/edit', verifyToken, adminRoute, AdminController.editArticleDetails);

export default adminRoutes;