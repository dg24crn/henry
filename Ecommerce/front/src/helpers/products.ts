import { IProduct } from "@/interfaces/IProduct";

export async function allProductsDB(): Promise<IProduct[]> {
  try {
    const res = await fetch('http://localhost:4000/products', {
      method: 'GET'
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductDB(id: string): Promise<IProduct> {
  try {
    const products: IProduct[] = await allProductsDB();
    const filterProducts = products.find(
      (product) => product.id.toString() === id
    )
    if(!filterProducts) throw new Error("Cant find this product")
    return filterProducts;
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getCategoryDB(id: string): Promise<IProduct[]> {
  try {
    const category:IProduct[] = await allProductsDB()
    const filterCategory = category.filter(
      (category) => category.categoryId.toString() === id
    )
    if(!filterCategory) throw new Error("Cant find this category")
    return filterCategory
  } catch (error: any) {
    throw new Error(error)
  }
}