import React, { useEffect } from "react";
import Header from "../components/Header";
import GallaryPhotos from "./GallaryPhotos";

const images = [
  {
    id: 1,
    title: "1 news",
    url: "./assets/news/1.jpeg",
  },
  {
    id: 2,
    title: "2 news",
    url: "./assets/news/2.jpeg",
  },
  {
    id: 3,
    title: "3 news",
    url: "./assets/news/3.jpeg",
  },
  {
    id: 4,
    title: "4 news",
    url: "./assets/news/4.jpeg",
  },
  {
    id: 5,
    title: "5 news",
    url: "./assets/news/5.jpeg",
  },
  {
    id: 6,
    title: "6 news",
    url: "./assets/news/6.jpeg",
  },
  {
    id: 13,
    title: "Image 5 - KBV",
    url: "./assets/img/school/gallery/5.jpeg",
  },
  {
    id: 18,
    title: "Image 10 - KBV",
    url: "./assets/img/school/gallery/21.jpeg",
  },
  {
    id: 64,
    title: "Image 64 - KBV",
    url: "./assets/img/school/gallery/64.jpg",
  },
  {
    id: 65,
    title: "Image 65 - KBV",
    url: "./assets/img/school/gallery/65.jpg",
  },
  {
    id: 66,
    title: "Image 66 - KBV",
    url: "./assets/img/school/gallery/66.jpg",
  },
  {
    id: 71,
    title: "Image 71 - KBV",
    url: "./assets/img/school/gallery/71.jpeg",
  },
  {
    id: 68,
    title: "Image 68 - KBV",
    url: "./assets/img/school/gallery/68.jpg",
  },
  {
    id: 69,
    title: "Image 69 - KBV",
    url: "./assets/img/school/gallery/69.jpeg",
  },
  {
    id: 73,
    title: "Image 73 - KBV",
    url: "./assets/img/school/gallery/73.jpeg",
  },
];

const NewsCorner = () => {
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
      <Header title={"News Corner"} />
      <div className="card  shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="card-body-gallery pb-5 position-relative bg-gradient-dark mx-n3">
          <div className="container">
            <GallaryPhotos images={images} />
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsCorner;
