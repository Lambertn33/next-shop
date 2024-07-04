import { FC } from "react";
import { IProduct } from "../types/IProduct";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const truncatedDescription =
    product.description.length > 100
      ? product.description.substring(0, 100) + "..."
      : product.description;

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
      <div className="p-4">
        <img className="w-full h-[360px]" src={product.image} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{truncatedDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {product.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          $ {product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {product.rating.count}
        </span>
      </div>
    </div>
  );
};
export default Product;
