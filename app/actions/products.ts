"use server";

import axios from "axios";
import { IProduct } from "../types/IProduct";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data as IProduct[];
  return products;
};
