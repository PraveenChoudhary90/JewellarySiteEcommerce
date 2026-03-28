import { Axios } from "../constants/MainContent";

const userApi = "/user";
const adminApi = "/admin";
const franchiseApi = "/franchise";

export async function getAdminPaymentInfo() {
  const response = await Axios.get(`${userApi}/get-admin-bank-details`);
  return response?.data;
}
export async function requestAddFunds(payload) {
  const response = await Axios.post(`${userApi}/create-fund-request`, payload);
  return response?.data;
}
export async function requestAddFranchiseFunds(payload) {
  const response = await Axios.post(`${franchiseApi}/create-fund-request`, payload);
  return response?.data;
}
export async function getFundReports() {
  const response = await Axios.get(`${userApi}/my-fund-requests`);
  return response?.data;
}
export async function getFranchiseFundReports() {
  const response = await Axios.get(`${franchiseApi}/my-fund-requests`);
  return response?.data;
}
