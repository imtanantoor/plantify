import prisma from "../../prisma/client";

export const Categories = prisma.category;
export const Products = prisma.product;
export const Review = prisma.review;       
export const Customers = prisma.customer;
export const Orders = prisma.order;
export const Tags = prisma.tag;

export default prisma;
