// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function createPet(petData: any): Promise<any> {
//     const pet = await prisma.pet.create({
//         data: petData,
//     });

//     return pet;
// }

// export async function getAllPets(): Promise<any> {
//     const pets = await prisma.pet.findMany();
//     return pets;
// }

// export async function getPetById(petId: number): Promise<any> {
//     const pet = await prisma.pet.findUnique({
//         where: { id: petId },
//     });

//     return pet;
// }

// export async function updatePet(petId: number, petData: any): Promise<any> {
//     const updatedPet = await prisma.pet.update({
//         where: { id: petId },
//         data: petData,
//     });

//     return updatedPet;
// }

// export async function deletePet(petId: number) {
//     const data = await prisma.pet.delete({
//         where: { id: petId },
//     });
//     return data
// }
