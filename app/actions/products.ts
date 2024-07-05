"use server";

import axios from "axios";
import { IProduct } from "../types/IProduct";

const apiEndPoint = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await axios.get(apiEndPoint);
  const products = response.data as IProduct[];
  return products;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`${apiEndPoint}/${id}`);
  const product = response.data as IProduct;
  return product;
};
