import React from "react";
import Header from "../components/about/Header";
import GallaryPhotos from "./GallaryPhotos";
import "./Gallary.scss";
const Gallery = () => {
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
