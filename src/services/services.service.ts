import { PrismaClient } from '@prisma/client';
import IReview from '../interfaces/review.interface';
import IService from '../interfaces/service.inteface';
import IBooking from '../interfaces/booking.interface';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';

const prisma = new PrismaClient();

class ServiceService {
    async getAllServices() {
        const services = await prisma.service.findMany();
        return services;
    }
    async createServices(data: IService) {
        const services = await prisma.service.create({
            data: {
                category: data.category,
                description: data.description,
                image: data.image,
                price: data.price,
                title: data.title,
            }
        })
        return services;
    }

    async updateServices(data: Partial<IService>, id: number) {
        const results = await prisma.service.update({
            where: {
                id: id
            },
            data
        });
        if (!results) {
            throw new ApiError(httpStatus.NOT_FOUND, "No Records Found")
        }
        return results;
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
    async deleteService(serviceId: number,) {
        const newReview = await prisma.service.delete({
            where: {
                id: serviceId
            }
        });
        return newReview;
    }

    // async bookService(data:IBooking) {
    //     const newBooking = await prisma.booking.create({
    //         data
    //     });
    //     return newBooking;
    // }


}

export default new ServiceService();
