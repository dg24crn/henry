import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone X",
    description:
      "A sleek smartphone with a 5.8-inch OLED display, Face ID, dual 12MP cameras, and A11 Bionic chip.",
    price: 449,
    stock: 50,
    image: "https://m.media-amazon.com/images/I/61A+0hDVS+L._AC_SX679_.jpg",
    categoryId: 1,
  },
  {
    name: "iPhone 12",
    description:
      "A smartphone with a 6.1-inch Super Retina XDR display, A14 Bionic chip, dual 12MP cameras, and 5G capability.",
    price: 699,
    stock: 50,
    image: "https://m.media-amazon.com/images/I/71WoWLO6+gL._AC_SX679_.jpg",
    categoryId: 1,
  },
  {
    name: "iPhone 13",
    description:
      "A smartphone with a 6.1-inch Super Retina XDR display, A15 Bionic chip, dual 12MP cameras, and improved battery life.",
    price: 599,
    stock: 30,
    image: "https://m.media-amazon.com/images/I/61p1I5f5ApL._AC_SX679_.jpg",
    categoryId: 1,
  },
  {
    name: "iPhone 14",
    description:
      "A smartphone with a 6.1-inch Super Retina XDR display, A15 Bionic chip, dual 12MP cameras, and enhanced camera features.",
    price: 899,
    stock: 25,
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
    categoryId: 1,
  },
  {
    name: "iPad",
    description:
      "A versatile tablet with a 10.2-inch Retina display, A13 Bionic chip, and support for Apple Pencil and Smart Keyboard.",
    price: 699,
    stock: 50,
    image: "https://m.media-amazon.com/images/I/61goypdjAYL._AC_SX522_.jpg",
    categoryId: 2,
  },
  {
    name: "iPad Air",
    description:
      "A lightweight tablet with a 10.9-inch Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
    price: 399,
    stock: 15,
    image: "https://m.media-amazon.com/images/I/61lv79X8rsL._AC_SX522_.jpg",
    categoryId: 2,
  },
  {
    name: "iPad Pro",
    description:
      "A powerful tablet with an 11-inch or 12.9-inch Liquid Retina display, M1 chip, ProMotion technology, and support for Apple Pencil and Magic Keyboard.",
    price: 799,
    stock: 30,
    image: "https://m.media-amazon.com/images/I/7147JzEtrqL._AC_SX522_.jpg",
    categoryId: 2,
  },
  {
    name: "iPad Mini",
    description:
      "A compact tablet with an 8.3-inch Liquid Retina display, A15 Bionic chip, and support for Apple Pencil.",
    price: 359,
    stock: 5,
    image: "https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_SX522_.jpg",
    categoryId: 2,
  },
  {
    name: "Apple Watch Series 9",
    description:
      "A smartwatch with an always-on Retina display, S9 chip, advanced health features, and improved battery life.",
    price: 599,
    stock: 35,
    image: "https://m.media-amazon.com/images/I/71OSc6IfGcL._AC_SX522_.jpg",
    categoryId: 3,
  },
  {
    name: "Apple Watch SE",
    description:
      "A smartwatch with a Retina display, S5 chip, essential health and fitness tracking features, and affordable pricing.",
    price: 359,
    stock: 10,
    image: "https://m.media-amazon.com/images/I/61qwcs6w5TL._AC_SX522_.jpg",
    categoryId: 3,
  },
  {
    name: "MacBook Air",
    description:
      "A lightweight laptop with a 13.3-inch Retina display, M2 chip, and long battery life, ideal for portability and everyday tasks.",
    price: 849,
    stock: 20,
    image: "https://m.media-amazon.com/images/I/719C6bJv8jL._AC_SX466_.jpg",
    categoryId: 4,
  },
  {
    name: "MacBook Pro",
    description:
      "A high-performance laptop with a 14-inch or 16-inch Retina display, M2 Pro or M2 Max chip, and advanced features for professional use.",
    price: 1499,
    stock: 25,
    image: "https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg",
    categoryId: 4,
  },
  {
    name: "Airpods Pro",
    description:
      "Wireless earbuds with active noise cancellation, transparency mode, and customizable fit with silicone tips.",
    price: 249,
    stock: 40,
    image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX466_.jpg",
    categoryId: 5,
  },
  {
    name: "Airpods Max",
    description:
      "Over-ear headphones with active noise cancellation, spatial audio, and high-fidelity sound.",
    price: 599,
    stock: 25,
    image: "https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SX522_.jpg",
    categoryId: 5,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
