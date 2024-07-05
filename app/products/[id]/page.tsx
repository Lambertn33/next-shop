import { getProductById } from "@/app/actions/products";
import { Product } from "@/app/components";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineArrowBack,
} from "react-icons/md";
import { FC } from "react";
import Link from "next/link";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

const ProductDetails: FC<ProductDetailsProps> = async ({ params }) => {
  const { id } = params;
  const product = await getProductById(parseInt(id));
  return (
    <div className="px-8">
      <Link href="/">
        <MdOutlineArrowBack size={25} />
      </Link>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4 font-semibold">{product.title} details</h2>
        <Product
          isDetailed={false}
          product={product}
          size="md"
          additionalContent={
            <div className="my-4 flex justify-around">
              <MdFavoriteBorder size={30} />
              <MdOutlineShoppingCart size={30} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ProductDetails;
