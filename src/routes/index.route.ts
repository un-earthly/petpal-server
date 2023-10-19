import userRoutes from "./user.route";
import authRoutes from "./auth.route";
import serviceRoutes from "./service.route";
import bookingsRoutes from "./booking.route";
import adminRoutes from "./admin.route";
import superAdminRoutes from "./superadmin.route";
import petRoutes from "./pet.route";

const router = require("express").Router();

const routes = [
    {
        path: "/auth",
        children: authRoutes
    },
    {
        path: "/users",
        children: userRoutes
    },
    {
        path: "/pet",
        children: petRoutes
    },
    {
        path: "/services",
        children: serviceRoutes
    },
    {
        path: "/bookings",
        children: bookingsRoutes
    },
    {
        path: "/admin",
        children: adminRoutes
    },
    {
        path: "/super-admin",
        children: superAdminRoutes
    }
]
routes.forEach(r => router.use(r.path, r.children))

export default router