import { PrismaClient } from '@prisma/client';
import IUser from '../interfaces/user.interface';
import IService from '../interfaces/service.inteface';
import { IBookingStatusEnum } from '../interfaces/booking.interface';

const prisma = new PrismaClient();


async function getAllUsers() {
    const users = await prisma.user.findMany({
        where: {
            role: 'USER',
        },
    });
    return users;
}


async function getUserDetails(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    return user;
}
async function editUserDetails(userId: number, updatedData: Partial<IUser>) {
    const updatedUser = await prisma.user.update({
        where: {
            id: userId,
        },
        data: updatedData,
    });
    return updatedUser;
}
async function getAllServices() {
    const services = await prisma.service.findMany();
    return services;
}
async function addService(data: any) {
    const newService = await prisma.service.create({
        data
    });
    return newService;
}
async function getServiceDetails(serviceId: number) {
    const service = await prisma.service.findUnique({
        where: {
            id: serviceId,
        },
    });
    return service;
}
async function editServiceDetails(serviceId: number, updatedData: any) {
    const updatedService = await prisma.service.update({
        where: {
            id: serviceId,
        },
        data: updatedData,
    });
    return updatedService;
}
async function getAllBookings() {
    const bookings = await prisma.booking.findMany();
    return bookings;
}
async function getBookingDetails(bookingId: number) {
    const booking = await prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    return booking;
}
async function cancelBooking(bookingId: number) {
    const canceledBooking = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: 'CANCELED',
        },
    });
    return canceledBooking;
}
async function updateBookingStatus(bookingId: number, newStatus: IBookingStatusEnum) {
    const updatedBooking = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: newStatus,
        },
    });
    return updatedBooking;
}
async function getAllArticles() {
    const articles = await prisma.article.findMany();
    return articles;
}
async function addArticle(articleData: any) {
    const newArticle = await prisma.article.create({
        data: articleData,
    });
    return newArticle;
}
async function getArticleDetails(articleId: number) {
    const article = await prisma.article.findUnique({
        where: {
            id: articleId,
        },
    });
    return article;
}
async function editArticleDetails(articleId: number, updatedData: any) {
    const updatedArticle = await prisma.article.update({
        where: {
            id: articleId,
        },
        data: updatedData,
    });
    return updatedArticle;
}



export const AdminService = {
    getAllUsers,
    getUserDetails,
    editUserDetails,
    getAllServices,
    addService,
    getServiceDetails,
    editServiceDetails,
    getAllBookings,
    getBookingDetails,
    cancelBooking,
    updateBookingStatus,
    getAllArticles,
    addArticle,
    getArticleDetails,
    editArticleDetails,
}