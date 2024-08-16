/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getProductDB } from "@/helpers/products";
import AddCart from "@/components/addCart/AddCart";
import BackButton from "@/components/backButton/BackButton";


const Detail = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductDB(params.productId);

  return (
    <div className="text-center flex-row p-24 m-auto h-fit w-fit">
      <div className="border p-6 bg-white text-black rounded-3xl">
        <img src={product.image} alt="productImage" className="m-auto w-80" />
        <h1 className="font-roboto text-4xl">{product.name}</h1>
        <hr />
        <h2 className="text-xl text-justify m-auto w-96">
          {product.description}
        </h2>
        <p className="m-4 text-4xl">${product.price}</p>
        <p>Stock: {product.stock}</p>
        <AddCart
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      </div>
    <BackButton/>
    </div>
  );
};

export default Detail;
