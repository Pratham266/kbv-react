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
        path: "activite/:itemId",
        element: <Activite />,
      },
      {
        path: "/volunteers",
        element: <Volunteers />,
      },
      {
        path: "contact",
        element: <Contact />,
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
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();