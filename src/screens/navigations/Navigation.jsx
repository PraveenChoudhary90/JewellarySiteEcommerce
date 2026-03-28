/* eslint-disable no-constant-condition */
import { BrowserRouter } from "react-router-dom";
import EcomNavigation from "./EcomNavigation";
import { ScrollToTop } from "../../utils/additionalFunc";
import AuthNavigation from "./AuthNavigation";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <EcomNavigation />
        <AuthNavigation />
      </BrowserRouter>
    </>
  );
};

export default Navigation;
