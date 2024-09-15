import React from "react";
import { Link } from "react-router-dom";
const activities = [
  {
    id: 1,
    title: "Drawing Activity",
    path: "/activite/drawing-activity",
    tagline: "Express Your Creativity",
  },
  {
    id: 2,
    title: "Art and Craft",
    path: "/activite/art-and-craft",
    tagline: "Hands-On Imagination",
  },
  {
    id: 3,
    title: "Science",
    path: "/activite/science",
    tagline: "Explore and Discover",
  },
  {
    id: 4,
    title: "Physical Education",
    path: "/activite/physical-education",
    tagline: "Strength and Agility",
  },
  {
    id: 5,
    title: "Cultural Programme",
    path: "/activite/cultural-programme",
    tagline: "Celebrate Diversity",
  },
  {
    id: 6,
    title: "Field Trips - Tours",
    path: "/activite/field-trips-tours",
    tagline: "Learning Beyond Walls",
  },
  {
    id: 7,
    title: "Medical Check up",
    path: "/activite/medical-check-up",
    tagline: "Health is Wealth",
  },
  {
    id: 8,
    title: "Festivals Celebrations",
    path: "/activite/festivals-celebrations",
    tagline: "Joyful Traditions",
  },
  {
    id: 9,
    title: "Work Shops",
    path: "/activite/work-shops",
    tagline: "Skill Enhancement",
  },
  {
    id: 10,
    title: "Language Development",
    path: "/activite/language-development",
    tagline: "Fluency and Expression",
  },
  {
    id: 11,
    title: "Theater Arts",
    path: "/activite/theater-arts",
    tagline: "Drama and Expression",
  },
  {
    id: 12,
    title: "Lunch Time",
    path: "/activite/lunch-time",
    tagline: "Relax and Socialize",
  },
  {
    id: 13,
    title: "Plantation",
    path: "/activite/plantation",
    tagline: "Gardening and Sustainability",
  },
  {
    id: 14,
    title: "Sports Day",
    path: "/activite/sports-day",
    tagline: "Fun and Fitness",
  },
  {
    id: 15,
    title: "Sport Time",
    path: "/activite/sport-time",
    tagline: "Active Play and Teamwork",
  },
  {
    id: 16,
    title: "Corona Activity",
    path: "/activite/corona-time",
    tagline: "Corona Awareness Activity",
  },
];

const Footer = () => {
  return (
    <footer className="footer pt-5 mt-5">
      <div className="container">
        <div className=" row">
          <div className="col-md-3 mb-4 ms-auto">
            <div>
              <a href="https://www.creative-tim.com/product/material-kit">
                <img
                  src="./assets/img/kbv-logo-1.png"
                  className="mb-1"
                  alt="main_logo"
                  style={{ height: "100px", width: "100px" }}
                />
              </a>
              <h6
                className="font-weight-bolder mb-4"
                style={{ marginLeft: "36px" }}
              >
                KBV
              </h6>
            </div>
            <div>
              <ul className="d-flex flex-row ms-n3 nav">
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                  >
                    <i className="fab fa-facebook text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://twitter.com/creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-twitter text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://dribbble.com/creativetim"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://github.com/creativetimofficial"
                    target="_blank"
                  >
                    <i className="fab fa-github text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                    target="_blank"
                  >
                    <i className="fab fa-youtube text-lg opacity-8"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Pages</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/gallery"}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Activites</h6>
              <ul className="flex-column ms-n3 nav">
                {activities.slice(0, 8).map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link className="nav-link" to={`/activite/${item.id}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4">
            <div>
              <h6 className="text-sm">Activites</h6>
              <ul className="flex-column ms-n3 nav">
                {activities.slice(8).map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link className="nav-link" to={`/activite/${item.id}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
            <div>
              <h6 className="text-sm">Reach Us</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <p className="text-dark my-4 text-sm font-weight-normal">
                All rights reserved. Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script> Rao
                Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
