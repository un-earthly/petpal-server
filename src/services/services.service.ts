import { PrismaClient } from '@prisma/client';
import IReview from '../interfaces/review.interface';

const prisma = new PrismaClient();

class ServiceService {
    async getAllServices() {
        const services = await prisma.service.findMany();
        return services;
    }

    async searchServices(query: any) {
        // Implement search logic using Prisma's query methods
        const results = await prisma.service.findMany({
            where: {
                name: query
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
        // Replace with logic to fetch reviews for a service by ID
        const reviews = await prisma.review.findMany({
            where: {
                serviceId,
            },
        });
        return reviews;
    }

    async addServiceReview(serviceId: number, userId: number, reviewData: IReview) {
        // Implement logic to create a new review using Prisma
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

    async bookService(serviceId: number, userId: number, bookingData: any) {
        const newBooking = await prisma.booking.create({
            data: {
                serviceId,
                userId,
                
            },
        });
        return newBooking;
    }

    async getCartContents(userId: number) {
        // Implement logic to fetch the user's cart contents using Prisma
        const cartContents = await prisma.cart.findMany({
            where: {
                userId,
            },
        });
        return cartContents;
    }

    async checkoutCart(userId: number) {
        // Implement logic to process the cart and create bookings using Prisma
        // Return the result of the checkout process
    }
}

export default new ServiceService();
