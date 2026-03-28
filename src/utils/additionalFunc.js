import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const getMoneySymbol = () => {
  return "₹";
};

export const maskMemberId = (memberId) => {
  if (!memberId || memberId.length <= 2) {
    return memberId;
  }

  const firstChar = memberId[0];
  const lastChar = memberId[memberId.length - 1];
  const maskedChars = "*".repeat(memberId.length - 2);

  return `${firstChar}${maskedChars}${lastChar}`;
};

export const maskWalletAddress = (walletAddress) => {
  if (!walletAddress || walletAddress.length < 10) {
    return walletAddress;
  }

  const lastFourChars = walletAddress.slice(-4);
  const maskedChars = "**** ".repeat(2);

  return `${maskedChars}${lastFourChars}`;
};
export const maskEmailAddress = (email) => {
  if (!email) return "";

  const [username, domain] = email.split("@");
  if (!domain) return email;

  if (username.length <= 2) {
    return `${username[0]}*@${domain}`;
  }

  const maskedUsername = username.slice(0, 2) + "*".repeat(username.length - 2);
  return `${maskedUsername}@${domain}`;
};

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// export const imageBase64Convertor = (e, setFunc) => {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const base64String = reader.result;
//       // const base64StringArray = base64String.split("base64,")[1];
//       setFunc(base64String);
//     };
//     reader.readAsDataURL(file);
//   }
// };

export const imageBase64Convertor = (event, callback) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
};

export const getBankDetailByIFSC = async (ifscCode) => {
  try {
    const response = await fetch(`https://ifsc.razorpay.com/${ifscCode}`);

    if (!response.ok) {
      throw new Error(`Bank not found. Status code: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bank details:", error);
    throw error;
  }
};
