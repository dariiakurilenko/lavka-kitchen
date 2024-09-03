import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";
import { connect } from "http2";


async function up(){
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User d',
                email: 'user@test.ru.mi',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
                provider: "",
                providerId: ""
            },
            {
                fullName: 'Admin k',
                email: 'admin@test.ru.mi',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
                provider: "",
                providerId: ""
            }
        ]
    })

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.ingredient.createMany({
        data: ingredients,
    });

    await prisma.product.createMany({
        data: products,
    })

    const salad1 = await prisma.product.create({
        data: {
            name: 'Салат с курицей и сельдереем',
            imageUrl: '	https://yastatic.net/avatars/get-grocery-goods/278…da1ff746-7090-4009-9299-a489f3f03604/928x928-webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    await prisma.productItem.createMany({
        data: [
            {
                productId: salad1.id,
                price: 150,
                size: 1,
            },
            {
                productId: salad1.id,
                price: 250,
                size: 2,
            },
            {
                productId: salad1.id,
                price: 350,
                size: 3,
            },
            {
                productId: 1,
                price: 150,
            },
            {
                productId: 2,
                price: 150,
            },
        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "123"
            },
            {
                userId: 2,
                totalAmount: 550,
                token: "321"
            },
        ]
    })

    await prisma.cartItem.create({
        data: 
            {
                productItemId: 1,
                cartId: 1,
                quantity: 2,
                ingredients: {
                    connect: [{id: 1}, {id: 2}, {id: 3}]
                }
            }
        
    })
}


async function down(){
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;



}



async function main(){
    try{
        await down();
        await up();
    } catch (e){
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});