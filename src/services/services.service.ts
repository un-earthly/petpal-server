import { PrismaClient } from '@prisma/client';
import IReview from '../interfaces/review.interface';

const prisma = new PrismaClient();

class ServiceService {
    async getAllServices() {
        const services = await prisma.service.findMany();
        return services;
    }

    async searchServices(query: any) {
        const results = await prisma.service.findMany({
            where: {
                title: query
            },
        });
        return results;
    }

    async getServiceDetails(serviceId: number) {
        const service = await prisma.service.findUnique({
            where: {
                id: serviceId,
            },
        });
        return service;
    }

    async getServiceReviews(serviceId: number) {
        const reviews = await prisma.review.findMany({
            where: {
                serviceId,
            },
        });
        return reviews;
    }

    async addServiceReview(serviceId: number, userId: number, reviewData: IReview) {
        const newReview = await prisma.review.create({
            data: {
                comments: reviewData.comments,
                rating: reviewData.rating,
                serviceId,
                userId,
            }
        });
        return newReview;
    }

    async bookService(serviceId: number, userId: number) {
        const newBooking = await prisma.booking.create({
            data: {
                serviceId,
                userId,
                
            },
        });
        return newBooking;
    }


    async checkoutCart(userId: number) {
        
    }
}

export default new ServiceService();
