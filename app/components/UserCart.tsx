import { MdOutlineShoppingCart } from "react-icons/md";

const UserCart = () => {
  return (
    <div className="relative">
      <span className="inline-flex absolute -top-2 right-0 items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-blue-600 rounded-full">
        2
      </span>
      <MdOutlineShoppingCart size={30} />
    </div>
  );
};

export default UserCart;
