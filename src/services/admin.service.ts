import { PrismaClient } from '@prisma/client';

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
async function editUserDetails(userId, updatedData) {
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
async function addService(serviceData) {
    const newService = await prisma.service.create({
        data: serviceData,
    });
    return newService;
}
async function getServiceDetails(serviceId) {
    const service = await prisma.service.findUnique({
        where: {
            id: serviceId,
        },
    });
    return service;
}
async function editServiceDetails(serviceId: number, updatedData) {
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
async function getBookingDetails(bookingId) {
    const booking = await prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    return booking;
}
async function cancelBooking(bookingId) {
    const canceledBooking = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: 'canceled', // Update the status to "canceled" or a relevant value.
        },
    });
    return canceledBooking;
}
async function updateBookingStatus(bookingId, newStatus) {
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
async function addArticle(articleData) {
    const newArticle = await prisma.article.create({
        data: articleData,
    });
    return newArticle;
}
async function getArticleDetails(articleId) {
    const article = await prisma.article.findUnique({
        where: {
            id: articleId,
        },
    });
    return article;
}
async function editArticleDetails(articleId, updatedData) {
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