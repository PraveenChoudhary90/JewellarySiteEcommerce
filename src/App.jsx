import { useEffect } from "react";
import Navigation from "./screens/navigations/Navigation";
import { MainContent } from "./constants/MainContent";
import { useDispatch, useSelector } from "react-redux";
import { loadUserFromStorage } from "./redux/slice/authSlice";
import PageLoader from "./components/global/PageLoader";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    document.title = MainContent.appTitle;
    let faviconLink =
      document.querySelector('link[rel="icon"]') ||
      document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = MainContent.appFavicon;
    document.head.appendChild(faviconLink);
  }, []);
  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, []);
  return (
    <>
      {isLoading && <PageLoader />}

      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
