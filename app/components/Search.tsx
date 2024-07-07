import React from "react";

export default function SearchProduct() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-2xl">
      <input
        type="text"
        className="border border-gray-200 py-2 px-3 rounded-md w-full lg:w-1/2"
        placeholder="search product..."
      />
      <button className="bg-blue-600 px-4 py-2 rounded-md text-white">
        Search Product
      </button>
    </div>
  );
}
