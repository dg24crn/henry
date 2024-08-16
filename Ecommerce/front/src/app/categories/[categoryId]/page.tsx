import React from "react";
import { getCategoryDB } from "@/helpers/products";
import AddCart from "@/components/addCart/AddCart";
import { Card } from "@/components/card/Card";
import Link from "next/link";
import Categories from "@/components/categories/Categories";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const category = await getCategoryDB(params.categoryId);

  return (
    <div className="h-screen">
        <Categories/>
      <div className="flex flex-wrap gap-6">
        {category.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                stock={product.stock}
                categoryId={product.categoryId}
              />
            </Link>
            <AddCart
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
