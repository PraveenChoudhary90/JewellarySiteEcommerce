import { Route, Routes } from "react-router-dom";
import { EcomRoutes } from "../../constants/Routes";
import EcomLayout from "../../layout/EcomLayout";
import Shop from "../../Pages/Shop/Shop";
import Blog from "../../Pages/Blog/Blog";
import Home from "../ecom/Home";
import About from "../../Pages/About/About";
import Mega from "../../Pages/Mega/Mega";
import Contact from "../../Pages/Contact/ContactPage";
const EcomNavigation = () => {
  return (
    <Routes>
      <Route path={EcomRoutes.Landing} element={<EcomLayout />}>
      <Route index element={<Home/>}/>
      <Route path={EcomRoutes.HOME} element={<Home/>}/>
      <Route path={EcomRoutes.Shop} element={<Shop/>}/>
      <Route path={EcomRoutes.Blog} element={<Blog/>}/>
      <Route path={EcomRoutes.About} element={<About/>}/>
      <Route path={EcomRoutes.Mega} element={<Mega/>}/>
      <Route path={EcomRoutes.Contact} element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default EcomNavigation;
