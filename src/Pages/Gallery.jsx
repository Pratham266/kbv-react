import React, { useEffect } from "react";
import Header from "../components/about/Header";
import GallaryPhotos from "./GallaryPhotos";
import "./Gallary.scss";

const images = [
  {
    id: 1,
    title: "Meow - KBV",
    url: "./assets/img/school/home/WhatsApp Image 2020-01-10 at 8.39.56 AM.jpeg",
  },
  {
    id: 2,
    title: "Paws - KBV",
    url: "./assets/img/school/home/nation builder award.jpg",
  },
  {
    id: 3,
    title: "Chill - KBV",
    url: "./assets/img/school/home/mook_dhwani_trust_-_building_photo (1).jpg",
  },
  {
    id: 4,
    title: "Nuzzle - KBV",
    url: "./assets/img/school/home/IMG-20190205-WA0124.jpg",
  },
  {
    id: 5,
    title: "Fur - KBV",
    url: "./assets/img/school/home/got school trophy in ureka science fair -2018.jpg",
  },
  {
    id: 6,
    title: "Calm - KBV",
    url: "./assets/img/school/home/got 1 st prize in working model in ureka science fair- 2019.jpg",
  },
  {
    id: 7,
    title: "Silk - KBV",
    url: "./assets/img/school/home/got 1 sr prize in district level program of 26 th januadry celebration by governmaent of gujarat.jpeg",
  },
  {
    id: 8,
    title: "Soft - KBV",
    url: "./assets/img/school/home/cul1.jpeg",
  },
  {
    id: 9,
    title: "Image 1 - KBV",
    url: "./assets/img/school/gallery/1.jpeg",
  },
  {
    id: 10,
    title: "Image 2 - KBV",
    url: "./assets/img/school/gallery/2.jpeg",
  },
  {
    id: 11,
    title: "Image 3 - KBV",
    url: "./assets/img/school/gallery/3.jpeg",
  },

  {
    id: 15,
    title: "Image 7 - KBV",
    url: "./assets/img/school/gallery/7.jpeg",
  },

  {
    id: 19,
    title: "Image 11 - KBV",
    url: "./assets/img/school/gallery/11.jpeg",
  },
  {
    id: 20,
    title: "Image 12 - KBV",
    url: "./assets/img/school/gallery/12.jpeg",
  },
  {
    id: 21,
    title: "Image 13 - KBV",
    url: "./assets/img/school/gallery/13.jpeg",
  },
  {
    id: 22,
    title: "Image 22 - KBV",
    url: "./assets/img/school/gallery/22.jpeg",
  },
  {
    id: 23,
    title: "Image 23 - KBV",
    url: "./assets/img/school/gallery/22.jpg",
  },
  {
    id: 24,
    title: "Image 24 - KBV",
    url: "./assets/img/school/gallery/23.jpg",
  },
  {
    id: 25,
    title: "Image 25 - KBV",
    url: "./assets/img/school/gallery/24.jpeg",
  },
  {
    id: 26,
    title: "Image 26 - KBV",
    url: "./assets/img/school/gallery/25.jpeg",
  },
  {
    id: 27,
    title: "Image 27 - KBV",
    url: "./assets/img/school/gallery/26.jpeg",
  },
  {
    id: 28,
    title: "Image 28 - KBV",
    url: "./assets/img/school/gallery/27.jpeg",
  },
  {
    id: 29,
    title: "Image 29 - KBV",
    url: "./assets/img/school/gallery/28.jpeg",
  },
  {
    id: 30,
    title: "Image 30 - KBV",
    url: "./assets/img/school/gallery/29.jpg",
  },
  {
    id: 31,
    title: "Image 31 - KBV",
    url: "./assets/img/school/gallery/30.jpg",
  },
  {
    id: 33,
    title: "Image 33 - KBV",
    url: "./assets/img/school/gallery/33.jpg",
  },
  {
    id: 35,
    title: "Image 35 - KBV",
    url: "./assets/img/school/gallery/35.jpg",
  },
  {
    id: 36,
    title: "Image 36 - KBV",
    url: "./assets/img/school/gallery/36.jpg",
  },
  {
    id: 37,
    title: "Image 37 - KBV",
    url: "./assets/img/school/gallery/37.jpg",
  },
  {
    id: 38,
    title: "Image 38 - KBV",
    url: "./assets/img/school/gallery/38.jpg",
  },
  {
    id: 39,
    title: "Image 39 - KBV",
    url: "./assets/img/school/gallery/39.jpg",
  },
  {
    id: 40,
    title: "Image 40 - KBV",
    url: "./assets/img/school/gallery/40.jpg",
  },
  {
    id: 41,
    title: "Image 41 - KBV",
    url: "./assets/img/school/gallery/41.jpg",
  },
  {
    id: 42,
    title: "Image 42 - KBV",
    url: "./assets/img/school/gallery/42.jpg",
  },
  {
    id: 43,
    title: "Image 43 - KBV",
    url: "./assets/img/school/gallery/43.jpeg",
  },
  {
    id: 45,
    title: "Image 45 - KBV",
    url: "./assets/img/school/gallery/45.jpeg",
  },
  {
    id: 46,
    title: "Image 46 - KBV",
    url: "./assets/img/school/gallery/46.jpeg",
  },
  {
    id: 47,
    title: "Image 47 - KBV",
    url: "./assets/img/school/gallery/47.jpeg",
  },
  {
    id: 48,
    title: "Image 48 - KBV",
    url: "./assets/img/school/gallery/48.jpeg",
  },
  {
    id: 49,
    title: "Image 49 - KBV",
    url: "./assets/img/school/gallery/48.jpg",
  },
  {
    id: 50,
    title: "Image 50 - KBV",
    url: "./assets/img/school/gallery/50.jpeg",
  },
  {
    id: 51,
    title: "Image 52 - KBV",
    url: "./assets/img/school/gallery/50.jpg",
  },
  {
    id: 52,
    title: "Image 52 - KBV",
    url: "./assets/img/school/gallery/51.jpg",
  },
  {
    id: 53,
    title: "Image 53 - KBV",
    url: "./assets/img/school/gallery/52.jpg",
  },
  {
    id: 53,
    title: "Image 53e - KBV",
    url: "./assets/img/school/gallery/53.jpeg",
  },
  {
    id: 54,
    title: "Image 54 - KBV",
    url: "./assets/img/school/gallery/54.jpeg",
  },
  {
    id: 55,
    title: "Image 58 - KBV",
    url: "./assets/img/school/gallery/58.jpeg",
  },
  {
    id: 56,
    title: "Image 59 - KBV",
    url: "./assets/img/school/gallery/59.jpeg",
  },
  {
    id: 57,
    title: "Image 60 - KBV",
    url: "./assets/img/school/gallery/60.jpg",
  },
  {
    id: 58,
    title: "Image 61 - KBV",
    url: "./assets/img/school/gallery/61.jpg",
  },
  {
    id: 59,
    title: "Image 62 - KBV",
    url: "./assets/img/school/gallery/62.jpeg",
  },
  {
    id: 63,
    title: "Image 63 - KBV",
    url: "./assets/img/school/gallery/63.jpg",
  },

  {
    id: 67,
    title: "Image 67 - KBV",
    url: "./assets/img/school/gallery/67.jpeg",
  },

  {
    id: 70,
    title: "Image 70 - KBV",
    url: "./assets/img/school/gallery/70.jpg",
  },

  {
    id: 72,
    title: "Image 72 - KBV",
    url: "./assets/img/school/gallery/72.jpeg",
  },

  {
    id: 74,
    title: "Image 74 - KBV",
    url: "./assets/img/school/gallery/74.jpeg",
  },
  // {
  //   id: 75,
  //   title: "Image 75 - KBV",
  //   img: "public/assets/img/home/home_1.jpg",
  // },
  // {
  //   id: 76,
  //   title: "Image 76 - KBV",
  //   img: "./assets/img/home/ss1.jpeg",
  // },
  // {
  //   id: 77,
  //   title: "Image 77 - KBV",
  //   img: "../assets/img/activity/festival/d4.jpeg",
  // },
];

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
      <Header
        title={"Empowering Voices, Enriching Lives"}
        subTitle={`"Where Every Sound Matters and Every Silence Speaks Volumes"`}
      />
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

export default Gallery;
