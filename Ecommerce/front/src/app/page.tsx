/* eslint-disable @next/next/no-img-element */
import AllProducts from "@/components/allProducts/AllProducts";
import Categories from "@/components/categories/Categories";

export default function Home() {
  return (
    <div className="h-auto">
      <Categories/>
      <div className="flex justify-center">
        <img
          className="w-auto h-96 rounded-3xl m-4"
          src="assets/img/ProductsPreview.png"
          alt="ProductsPreview"
        />
      </div>
      <div className="border-4 border-red-600 rounded-2xl h-96 m-16 flex justify-between">
        <div className="m-6 w-64">
          <img className="rounded-xl h-44 m-auto" src="https://m.media-amazon.com/images/I/61A+0hDVS+L._AC_SX679_.jpg" alt="productImage" />
          <p className="text-3xl text-center">iPhone X</p>
          <p className="text-center text-lg text-red-600 line-through">$599</p>
          <p className="text-center text-2xl">$449</p>
        </div>
        <div className="m-6 w-64">
          <img className="rounded-xl h-44 m-auto" src="https://m.media-amazon.com/images/I/7147JzEtrqL._AC_SX522_.jpg" alt="productImage" />
          <p className="text-3xl text-center">iPad Pro</p>
          <p className="text-center text-lg text-red-600 line-through">$899</p>
          <p className="text-center text-2xl">$799</p>
        </div>
        <div className="m-6 w-64">
          <img className="rounded-xl h-44 m-auto" src="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX466_.jpg" alt="productImage" />
          <p className="text-3xl text-center">Airpods Pro</p>
          <p className="text-center text-lg text-red-600 line-through">$299</p>
          <p className="text-center text-2xl">$249</p>
        </div>
      </div>
      <div className="border-4 h-fit m-6 p-12">
        <AllProducts/>
      </div>
    </div>
  );
}