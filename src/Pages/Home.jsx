import React, { useEffect } from "react";
import Header from "../components/Header";
import HomeCards from "../components/HomeCards";
import "./Home.scss";

const Home = () => {
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
        title={"Smt. Kamlaben"}
        smalTitlte={"Badhir Vidhyalaya Vadodara"}
        pera={` A child, who has not known the sound of " Mother" and her love,
        a child who has not listened the sweet stories of grandmother,
        who has not listened the melodies voice of birds. These hearing
        impaired students required love and affection, protective
        environment and care. They do not want pity but need support and
        help.`}
      />
      <HomeCards />
    </>
  );
};

export default Home;
