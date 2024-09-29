import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    title: "Corona Time Activity",
    path: "/activite/corona-time",
    tagline: "Corona Awareness Activity",
  },
  {
    id: 17,
    title: "Day Celebration",
    path: "/activite/day-celebration",
    tagline: "Celebrate Together, Create Memories",
  },
];

const latters = [
  {
    id: 1,
    path: "./assets/letters/Kbv The Littele Hands News Letter-1.pdf",
    title: "News Letter 1",
  },
  {
    id: 2,
    path: "./assets/letters/Kbv The Littele Hands News Letter-2.pdf",
    title: "News Letter 2",
  },
  {
    id: 3,
    path: "./assets/letters/Kbv The Littele Hands News Letter-3.pdf",
    title: "News Letter 3",
  },
  {
    id: 4,
    path: "./assets/letters/Kbv The Littele Hands News Letter-4.pdf",
    title: "News Letter 4",
  },
  {
    id: 5,
    path: "./assets/letters/Kbv The Littele Hands News Letter-5.pdf",
    title: "News Letter 5",
  },
  {
    id: 6,
    path: "./assets/letters/KBV  News Letter - 6.pdf",
    title: "News Letter 6",
  },
];

const Footer = () => {
  const openEmail = () => {
    const email = "kbvsite@gmail.com";
    const body = "Hello, KBV";

    // Construct the mailto URL
    const mailtoURL = `mailto:${email}?&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailtoURL;
  };

  return (
    <footer className="footer pt-5 mt-5">
      <div className="container">
        <div className=" row">
          <div className="col-md-3 mb-4 ms-auto">
            <div>
              <a href="javascript:;">
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
            {/* remove margin when more scoailmedi account */}
            <div style={{ marginLeft: "13px" }}>
              <ul className="d-flex flex-row ms-n3 nav">
                {/* <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.facebook.com/profile.php?id=61565905650204"
                    target="_blank"
                  >
                    <FaFacebook
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="javascript:;"
                    onClick={openEmail}
                  >
                    <MdEmail
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link pe-1"
                    href="https://www.youtube.com/@kbvidyalayavadodara2924"
                    target="_blank"
                  >
                    <FaYoutube
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
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
                <li className="nav-item">
                  <Link className="nav-link" to={"/intrect-club"}>
                    Interact Club
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/news-corner"}>
                    News Corner
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm">Reach Us</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/volunteers"}>
                    Volunteers
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
              <h6 className="text-sm">News Letters</h6>
              <ul className="flex-column ms-n3 nav">
                {latters.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a className="nav-link" href={item.path} target="_blank">
                      {item.title}
                    </a>
                  </li>
                ))}
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
