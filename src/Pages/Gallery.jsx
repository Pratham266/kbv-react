import React, { useEffect } from "react";
import Header from "../components/about/Header";
import GallaryPhotos from "./GallaryPhotos";
import "./Gallary.scss";
const Gallery = () => {
  useEffect(() => {
    try {
      const toggleDivMain = document.querySelector(".toggle-class");
      const toggleDivActivite = document.querySelector(".activity-toggle");
      const toggleDivAbout = document.querySelector(".about-toggle");
      toggleDivMain.classList.remove("show");
      toggleDivAbout.classList.remove("show");
      toggleDivActivite.classList.remove("show");
      window.scrollTo(0, 0);
      if (window.innerWidth >= 1024) {
        return; // If it's a laptop screen, do nothing and return
      }
      toggleDivAbout.style.height = "";
    } catch (err) {
      // nothing
    }
  }, []);
  return (
    <>
      <Header />
      <div className="card  shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="card-body-gallery pb-5 position-relative bg-gradient-dark mx-n3">
          <div className="container">
            <GallaryPhotos />
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
