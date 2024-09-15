import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify CSS

function App() {
  return (
    <>
      <body className="presentation-page bg-gray-200">
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </body>
    </>
  );
}

export default App;
