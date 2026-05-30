import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Burger from "./components/Burger";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Seaside from "./pages/Seaside";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Metropolitan from "./pages/Metropolitan";
import Rustic from "./pages/Rustic";
import Aurora from "./pages/Aurora";
import Golden from "./pages/Golden";
import Velora from "./pages/Velora";
import Skyline from "./pages/Skyline";
import Evermont from "./pages/Evermont";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { MyContext } from "./Context";
import Admin from "./pages/Admin";
import CreateCard from "./components/CreateCard";
import ChangeCard from "./components/ChangeCard";
import AdminCards from "./pages/AdminCards";

const App = () => {

  const { isDark, isAdmin } = useContext(MyContext);

  useEffect(() => {

    const bodyEl = document.body;

    if (isDark) {
      bodyEl.classList.add("whiteMode");
    } else {
      bodyEl.classList.remove("whiteMode");
    }

  }, [isDark]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Nav />
      <Burger />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/seaside" element={<Seaside />} />
        <Route path="/metropolitan" element={<Metropolitan />} />
        <Route path="/rustic" element={<Rustic />} />
        <Route path="/aurora" element={<Aurora />} />
        <Route path="/golden" element={<Golden />} />
        <Route path="/velora" element={<Velora />} />
        <Route path="/skyline" element={<Skyline />} />
        <Route path="/evermont" element={<Evermont />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />


        {isAdmin && (
          <>
            <Route
              path="/admin"
              element={<Admin />}
            />

            <Route
              path="/admin/cards"
              element={<AdminCards />}
            />

            <Route
              path="/admin/createCard"
              element={<CreateCard />}
            />

            <Route
              path="/admin/changeCard"
              element={<ChangeCard />}
            />

            <Route
              path="/admin/changeCard/:id"
              element={<ChangeCard />}
            />
          </>
        )}

      </Routes>
    </>
  );
};

export default App;