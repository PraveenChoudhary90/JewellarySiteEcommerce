import { Route, Routes } from "react-router-dom";
import { EcomRoutes } from "../../constants/Routes";
import EcomLayout from "../../layout/EcomLayout";
const EcomNavigation = () => {
  return (
    <Routes>
      <Route path={EcomRoutes.HOME} element={<EcomLayout />}>
      
      </Route>
    </Routes>
  );
};

export default EcomNavigation;
