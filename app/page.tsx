import { Product, Search as SearchProduct } from "./components";
import { getProducts } from "./actions/products";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <div className="w-full flex justify-center mt-4">
        <SearchProduct />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {products.map((product) => {
          return (
            <Product
              product={product}
              isDetailed={true}
              size="sm"
              additionalContent={
                <div className="my-4 flex">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-blue-600 text-white py-3 px-4 rounded-md w-full flex justify-center"
                  >
                    View More
                  </Link>
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
