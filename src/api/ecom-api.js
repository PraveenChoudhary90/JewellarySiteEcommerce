import { Axios } from "../constants/MainContent";

const userApi = "/user";
const adminApi = "/admin";

export async function getHerosectionBanners() {
  const response = await Axios.get(`${userApi}/get-banners`);
  return response?.data;
}