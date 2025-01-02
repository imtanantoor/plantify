import prisma from "../../prisma/client";

export const Categories = prisma.category;
export const Products = prisma.product;
export const Reviews = prisma.review;       
export const Users = prisma.customer;
export const Orders = prisma.order;
export const Tags = prisma.tag;

export default prisma;
