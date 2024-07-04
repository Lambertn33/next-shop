import { Product, Search as SearchProduct } from "./components";
import { getProducts } from "./actions/products";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <SearchProduct />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
