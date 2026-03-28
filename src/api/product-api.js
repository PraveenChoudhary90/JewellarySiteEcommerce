import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../redux/slice/loadingSlice";
import { Axios } from "../constants/MainContent";
// import { setCartItems } from "../redux/slice/cartSlice";

const userApi = "/user";
const franchiseApi = "/franchise";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get(`${userApi}/get-all-products`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get(`/get-product-by-id/${id}`);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export async function getCartItem() {
  const response = await Axios.get(`${userApi}/cart`);
  return response?.data;
}
export async function addToCartById(payload) {
  const response = await Axios.post(`${userApi}/cart/add-to-cart`, payload);
  return response?.data;
}
export async function addToCartFranchiseById(id) {
  const response = await Axios.post(`${franchiseApi}/add-to-cart/${id}`);
  return response?.data;
}
export async function increaseQuantityById(id) {
  const response = await Axios.post(
    `${userApi}/cart/increase-product-quantity/${id}`
  );
  return response?.data;
}
export async function increaseFranchiseQuantityById(id) {
  const response = await Axios.post(
    `${franchiseApi}/cart/increase-product-quantity/${id}`
  );
  return response?.data;
}
export async function decreaseQuantityById(id) {
  const response = await Axios.post(
    `${userApi}/cart/decrease-product-quantity/${id}`
  );
  return response?.data;
}
export async function decreaseFranchiseQuantityById(id) {
  const response = await Axios.post(
    `${franchiseApi}/decrease-product-quantity/${id}`
  );
  return response?.data;
}
export async function removeProductFromCartById(id) {
  const response = await Axios.delete(`${userApi}/cart/remove/${id}`);
  return response?.data;
}
export async function removeFranchiseProductFromCartById(id) {
  const response = await Axios.delete(`${franchiseApi}/remove-cart-product/${id}`);
  return response?.data;
}
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get(`${userApi}/get-cart-items`);
      const cartItems = response?.data?.data?.items || [];
      // dispatch(setCartItems(cartItems));
      return cartItems;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
export const getFranchiseCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await Axios.get(`${franchiseApi}/get-cart-items`);
      const cartItems = response?.data?.data?.items || [];
      // dispatch(setCartItems(cartItems));
      return cartItems;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export async function getProductDetailById(id) {
  const response = await Axios.get(`${userApi}/get-product/${id}`);
  return response?.data;
}

export async function getProductPurchaseHistory() {
  const response = await Axios.get(`${userApi}/my-orders`);
  return response?.data;
}
export async function getFranchiseProductPurchaseHistory() {
  const response = await Axios.get(`${franchiseApi}/my-orders`);
  return response?.data;
}
export async function getBestSellerProducts() {
  const response = await Axios.get(`${userApi}/get-best-seller-products`);
  return response?.data;
}
export async function getCartFinalData() {
  const response = await Axios.get(`${userApi}/cart/get-cart-final-data`);
  return response?.data;
}
