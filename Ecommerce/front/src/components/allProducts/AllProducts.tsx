import Link from "next/link";
import { Card } from "../card/Card";
import { allProductsDB } from "@/helpers/products";
import AddCart from "../addCart/AddCart";

const AllProducts = async () => {
  const products = await allProductsDB();

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
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
        <AddCart id={product.id} image={product.image} name={product.name} price={product.price}/>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
