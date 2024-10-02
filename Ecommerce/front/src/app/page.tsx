/* eslint-disable @next/next/no-img-element */
import AllProducts from "@/components/allProducts/AllProducts";
import Categories from "@/components/categories/Categories";
import MainCarousel from "@/components/mainCarousel/MainCarousel";

export default function Home() {
  return (
    <div className="h-auto">
      <MainCarousel />
      <Categories />
      <div className="border-4 h-fit m-6 p-12">
        <AllProducts />
      </div>
    </div>
  );
}
