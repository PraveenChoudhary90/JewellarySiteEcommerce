import { Axios } from "../constants/MainContent";

const userApi = "/user";
const franchiseApi = "/franchise";

export async function getUserInfo() {
  const response = await Axios.get(`${userApi}/get-profile`);
  return response?.data?.data;
}

export async function verifyReferralCode(payload) {
  const response = await Axios.post(`${userApi}/verify-referral`, payload);
  return response?.data;
}

export async function getDirectUsers() {
  const response = await Axios.get(`${userApi}/direct-referrals`);
  return response?.data;
}
export async function getIncomeDetails() {
  const response = await Axios.get(`${userApi}/get-general`);
  return response?.data;
}
export async function getDirectUsersFranchise() {
  const response = await Axios.get(`${franchiseApi}/direct-referrals`);
  return response?.data;
}
export async function getLevelWiseUsers(level) {
  const response = await Axios.get(`${userApi}/downline-users?level=${level}`);
  return response?.data;
}

export async function getFranchiseInfo() {
  const response = await Axios.get(`${franchiseApi}/get-profile`);
  return response?.data?.data;
}

export async function raiseSupportRequest(payload) {
  const response = await Axios.post(`${userApi}/support-request`, payload);
  return response?.data;
}

export async function getComplainHistory() {
  const response = await Axios.get(`${userApi}/get-all-supports`);
  return response?.data;
}

export async function getUserTeamAMembers() {
  const response = await Axios.get(`${userApi}/user/team-a`);
  return response?.data;
}
export async function getUserTeamBMembers() {
  const response = await Axios.get(`${userApi}/user/team-b`);
  return response?.data;
}
export async function getUserTeamCMembers() {
  const response = await Axios.get(`${userApi}/user/team-c`);
  return response?.data;
}
const apiURL = "/user";
export async function getSelfIncomeHistory() {
  const response = await Axios.get(`${apiURL}/self-income-history`);
  return response?.data;
}
export async function getInvestmentHistory() {
  const response = await Axios.get(`${apiURL}/investment-history`);
  return response?.data;
}
export async function getWithdrawalHistory() {
  const response = await Axios.get(`${apiURL}/withdrawal-history`);
  return response?.data;
}
export async function getReferralHistory() {
  const response = await Axios.get(`${apiURL}/referral-history`);
  return response?.data;
}
export async function updateUserProfile(payload) {
  const response = await Axios.put(`${userApi}/update-profile`, payload);
  return response?.data;
}
export async function updateUserProfileFranchise(payload) {
  const response = await Axios.put(`${franchiseApi}/update-profile`, payload);
  return response?.data;
}
export async function getAllBanners() {
  const response = await Axios.get(`${franchiseApi}/get-banners`);
  return response?.data;
}

// api/admin/banner/get-find

export async function getUserRankRewardDetails() {
  const response = await Axios.get(`${apiURL}/rank-leaderboard`);
  return response?.data;
}

export async function getNoticeUpdates() {
  const response = await Axios.get(`${apiURL}/survey/get-user-history`);
  return response?.data;
}

export async function addUserAddressApi(payload) {
  const response = await Axios.post(`${userApi}/add-address`, payload);
  return response?.data;
}
export async function addFranchiseAddressApi(payload) {
  const response = await Axios.post(`${franchiseApi}/add-address`, payload);
  return response?.data;
}
export async function getCheckoutDetails() {
  const response = await Axios.get(`${userApi}/go-checkout`);
  return response?.data;
}
export async function getFranchiseCheckoutDetails() {
  const response = await Axios.get(`${franchiseApi}/go-checkout`);
  return response?.data;
}

export async function placeOrderApi(payload) {
  const response = await Axios.post(`${userApi}/create-order`, payload);
  return response?.data;
}
export async function placeFranchiseOrderApi(payload) {
  const response = await Axios.post(`${franchiseApi}/create-order`, payload);
  return response?.data;
}
export async function getEarningsReports(payload) {
  const response = await Axios.get(
    `${userApi}/get-earnings-reports?incomeType=${
      payload?.type || "all"
    }&&startDate=${payload?.startDate || ""}&&endDate=${payload?.endDate || ""}`
  );
  return response?.data;
}

export async function bankDetailSetup(payload) {
  const response = await Axios.post(`${userApi}/add-bank-details`, payload);
  return response?.data;
}
export async function upiDetailSetup(payload) {
  const response = await Axios.post(`${userApi}/add-upi-details`, payload);
  return response?.data;
}
export async function getPaymentInfoApi() {
  const response = await Axios.get(`${userApi}/payment-details`);
  return response?.data;
}
export async function sendWithdrawalRequest(payload) {
  const response = await Axios.post(
    `${userApi}/create-withdrawal-request`,
    payload
  );
  return response?.data;
}
export async function withdrawalVerifyOtpApi(payload) {
  const response = await Axios.post(
    `${userApi}/verify-withdrawal-request`,
    payload
  );
  return response?.data;
}
export async function getWithdrawalRequest() {
  const response = await Axios.get(`${userApi}/get-withdrawal-history`);
  return response?.data;
}

export async function getPayoutReport() {
  const response = await Axios.get(`${userApi}/my-payout-report`);
  return response?.data;
}

export async function getExistingFranchises() {
  const response = await Axios.get(`${userApi}/get-franchise-list`);
  return response?.data;
}
export async function getFranchiseProducts(selectFranchise) {
  const response = await Axios.get(
    `${userApi}/get-franchise-products/${selectFranchise}`
  );
  return response?.data;
}

export async function changePasswordApi(payload) {
  const response = await Axios.post(`${userApi}/update-password`, payload);
  return response?.data;
}
export async function changePasswordFranchiseApi(payload) {
  const response = await Axios.post(`${franchiseApi}/update-password`, payload);
  return response?.data;
}

export async function sendFundRequest(payload) {
  const response = await Axios.post(`${userApi}/send-wallet-request`, payload);
  return response?.data;
}
export async function sendFundRequestByFranchise(payload) {
  const response = await Axios.post(
    `${franchiseApi}/send-wallet-request`,
    payload
  );
  return response?.data;
}
export async function getFundRequestReports() {
  const response = await Axios.get(`${userApi}/wallet-requests-history`);
  return response?.data;
}
export async function getFranchiseFundRequestReports() {
  const response = await Axios.get(`${franchiseApi}/wallet-requests-history`);
  return response?.data;
}
export async function getPendingFundReports() {
  const response = await Axios.get(`${userApi}/receive-wallet-requests`);
  return response?.data;
}
export async function getFranchisePendingFundReports() {
  const response = await Axios.get(`${franchiseApi}/receive-wallet-requests`);
  return response?.data;
}
export async function getDoneFundReports() {
  const response = await Axios.get(`${userApi}/wallet-transfer-history`);
  return response?.data;
}
export async function getDoneFranchiseFundReports() {
  const response = await Axios.get(`${franchiseApi}/wallet-transfer-history`);
  return response?.data;
}

export async function acceptFundTransfer(payload) {
  const response = await Axios.post(
    `${userApi}/wallet-request-approve`,
    payload
  );
  return response?.data;
}
export async function acceptFundTransferByFranchise(payload) {
  const response = await Axios.post(
    `${franchiseApi}/wallet-request-approve`,
    payload
  );
  return response?.data;
}

export async function rejectFundTransfer(id) {
  const response = await Axios.post(`${userApi}/wallet-request-reject/${id}`);
  return response?.data;
}
export async function rejectFundTransferByFranchise(id) {
  const response = await Axios.post(
    `${franchiseApi}/wallet-request-reject/${id}`
  );
  return response?.data;
}
export async function getFranchisePlanLists() {
  const response = await Axios.get(
    `${franchiseApi}/get-all-franchise-packages`
  );
  return response?.data;
}
export async function purchaseFranchisePlan(id) {
  const response = await Axios.post(
    `${franchiseApi}/buy-franchise-package/${id}`
  );
  return response?.data;
}

export async function getEventsOrNews() {
  const response = await Axios.get(`${userApi}/get-banners`);
  return response?.data;
}
export async function getEventsOrNewsSeprate() {
  const response = await Axios.get(`${userApi}/get-specific-offers-for-user`);
  return response?.data;
}

export async function getPromotionalBanner() {
  const response = await Axios.get(`${userApi}/get-promotional-banners`);
  return response?.data;
}

export async function getUserRegistrationDetail() {
  const response = await Axios.get(`${userApi}/get-my-registration`);
  return response?.data;
}


export async function updateAffiliateApi(payload, id) {
  const response = await Axios.put(
    `${userApi}/edit-registration-form-after-approved/${id}`,
    payload
  );
  return response?.data;
}
export async function getDownlineTreeData(id) {
  const response = await Axios.get(`${userApi}/get-downline-tree/${id ? id : ""}`);
  return response?.data;
}
export async function getLeadershipReports() {
  const response = await Axios.get(`${userApi}/get-level-leaderboard`);
  return response?.data;
}
export async function getTripPlannerData() {
  const response = await Axios.get(`${userApi}/reward/all`);
  return response?.data;
}
