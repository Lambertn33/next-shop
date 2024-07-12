"use client";

import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RootState } from "../store/store";

const UserCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="relative">
      <span className="inline-flex absolute -top-2 right-0 items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-blue-600 rounded-full">
        {items.length}
      </span>
      <MdOutlineShoppingCart size={30} />
    </div>
  );
};

export default UserCart;
