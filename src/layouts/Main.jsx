import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}
      <div className="min-h-[calc(100vh-310px)]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
