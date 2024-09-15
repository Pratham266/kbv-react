import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <body className="presentation-page bg-gray-200">
        <Navbar />
        <Outlet />
        <Footer />
      </body>
    </>
  );
}

export default App;
