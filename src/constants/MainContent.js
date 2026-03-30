import appLogo from "../assets/app/appLogo.png";
import appFavicon from "../assets/app/appFavicon.png";
import axios from "axios";
import { getCurrentUser } from "../utils/authStorage";
import store from "../redux/store";
export const MainContent = {
  appName: "NetrootX",
  appTitle: "NetrootX - Empowering Your Digital Journey",
  appFullName: "NetrootX Pvt. Ltd.",
  appLogo: appLogo,
  appFavicon: appFavicon,
  appURL: "https://www.netrootx.com/",
  contactNo: "+919123456789",
  email: "info@netrootx.com",
  address: "B-1/162 Mp Nagar Bhopal(MP), Pin - 741235",
  appDescription:
    "NetrootX is a revolutionary platform that empowers individuals to take control of their digital future through innovative technology and community-driven solutions.",
};

export const backendConfig = {
  base: import.meta.env.VITE_API_BASE_URL,
  origin: import.meta.env.VITE_API_ORIGIN,
};


// https://cnfp6kct-1960.inc1.devtunnels.ms/

export const Axios = axios.create({
  baseURL: backendConfig.base,
  withCredentials: true,
});
const getToken = getCurrentUser()?.token;
Axios.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state?.auth?.token || getToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
