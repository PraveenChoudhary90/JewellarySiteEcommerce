import { Axios } from "../constants/MainContent";

const userApi = "/user";
const franchiseApi = "/franchise";
export async function createUserApi(payload) {
  const response = await Axios.post(`${userApi}/register`, payload);
  return response?.data;
}
export async function createDownlineUserApi(payload) {
  const response = await Axios.post(`${userApi}/downline-register`, payload);
  return response?.data;
}
export async function createAffiliateApi(payload) {
  const response = await Axios.post(`${userApi}/registration-form`, payload);
  return response?.data;
}
export async function editAffiliateApi(payload, registrationId) {
  const response = await Axios.put(
    `${userApi}/edit-registration-form/${registrationId}`,
    payload
  );
  return response?.data;
}
export async function registerVerifyOtpApi(payload) {
  const response = await Axios.post(`${userApi}/verify-otp`, payload);
  return response?.data;
}
export async function registerResendOtpApi(payload) {
  const response = await Axios.post(`${userApi}/resend-otp`, payload);
  return response?.data;
}
export async function loginUserApi(payload) {
  const response = await Axios.post(`${userApi}/login`, payload);
  return response?.data;
}
export async function verifyReferralCode(payload) {
  const response = await Axios.post(`${userApi}/verify-referral`, payload);
  return response?.data;
}

export async function loginFranchiseApi(payload) {
  const response = await Axios.post(`${franchiseApi}/login`, payload);
  return response?.data;
}

export async function sendEmailOtpForForget(payload) {
  const response = await Axios.post(`${userApi}/forgot-password`, payload);
  return response?.data;
}
export async function updatePassword(payload) {
  const response = await Axios.post(`${userApi}/reset-password`, payload);
  return response?.data;
}

export async function checkUserIdAvailability(payload) {
  const response = await Axios.post(`${userApi}/check-userid`, payload);
  return response?.data;
}
