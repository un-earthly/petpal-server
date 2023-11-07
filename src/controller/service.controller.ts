import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import servicesService from '../services/services.service';
import { sendResponse } from '../utils/sendResponse';

const ServiceController = {
    getAllServices: catchAsync(async (req: Request, res: Response) => {
        const services = await servicesService.getAllServices();
        sendResponse(res, httpStatus.OK, services, 'All services retrieved successfully');
    }),
    createServices: catchAsync(async (req: Request, res: Response) => {
        const services = await servicesService.createServices(req.body);
        sendResponse(res, httpStatus.OK, services, 'services created successfully');
    }),
    updateService: catchAsync(async (req: Request, res: Response) => {
        const services = await servicesService.createServices(req.body);
        sendResponse(res, httpStatus.OK, services, 'services updated successfully');
    }),

    searchServices: catchAsync(async (req: Request, res: Response) => {
        const searchResults = await servicesService.searchServices(req.query);
        sendResponse(res, httpStatus.OK, searchResults, 'Services search results');
    }),

    getServiceDetails: catchAsync(async (req: Request, res: Response) => {
        const serviceId = parseInt(req.params.serviceId, 10);
        const service = await servicesService.getServiceDetails(serviceId);
        sendResponse(res, httpStatus.OK, service, 'Service details retrieved successfully');
    }),

    getServiceReviews: catchAsync(async (req: Request, res: Response) => {
        const serviceId = parseInt(req.params.serviceId, 10);
        const reviews = await servicesService.getServiceReviews(serviceId);
        sendResponse(res, httpStatus.OK, reviews, 'Service reviews retrieved successfully');
    }),

    addServiceReview: catchAsync(async (req: Request, res: Response) => {
        const serviceId = parseInt(req.params.serviceId, 10);
        const userId = req.user.id;
        const reviewData = req.body;
        const newReview = await servicesService.addServiceReview(serviceId, userId, reviewData);
        sendResponse(res, httpStatus.CREATED, newReview, 'Service review added successfully');
    }),
    deleteService: catchAsync(async (req: Request, res: Response) => {
        const serviceId = parseInt(req.params.serviceId, 10);
        const newReview = await servicesService.deleteService(serviceId);
        sendResponse(res, httpStatus.OK, newReview, 'Service Deleted successfully');
    }),

    // bookService: catchAsync(async (req: Request, res: Response) => {
    //     const serviceId = parseInt(req.params.serviceId, 10);
    //     const userId = req.user.id;
    //     const bookingData = req.body;
    //     const bookingResult = await servicesService.bookService(serviceId, userId);
    //     sendResponse(res, httpStatus.CREATED, bookingResult, 'Service booked successfully');
    // }),


    // checkoutCart: catchAsync(async (req: Request, res: Response) => {
    //     const userId = req.user.id;
    //     const checkoutResult = await servicesService.checkoutCart(userId);
    //     sendResponse(res, httpStatus.OK, checkoutResult, 'Cart checked out successfully');
    // }),
};

export default ServiceController;
