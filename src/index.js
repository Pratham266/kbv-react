import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Activite from "./Pages/Activite.jsx";
import Contact from "./Pages/Contact.jsx";
import Volunteers from "./Pages/Volunteers.jsx";
import PdfOpenPage from "./Pages/PdfOpenPage.jsx";
import NewsCorner from "./Pages/NewsCorner.jsx";
import Infrastructure from "./Pages/Infrastructure.jsx";
import { GlobalStateProvider } from "./context/globalcontex.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "activite",
        element: <Activite />,
      },
      {
        path: "volunteers",
        element: <Volunteers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "intrect-club",
        element: <PdfOpenPage />,
      },
      {
        path: "news-corner",
        element: <NewsCorner />,
      },
      {
        path: "/infrastructure",
        element: <Infrastructure />,
      },
      {
        path: "*", // Catch-all route for 404 errors
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
