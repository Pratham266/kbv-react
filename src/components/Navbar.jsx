import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/globalcontex";

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
  {
    id: 18,
    title: "Swachhta Divas",
    path: "/activite/swachhta-divas",
    tagline: "Clean Spaces, Bright Futures",
  },
];

const Navbar = () => {
  const { setSelectedId } = useGlobalState();

  const handlToggle = () => {
    try {
      const toggleDiv = document.querySelector(".toggle-class");

      if (toggleDiv.classList.contains("show")) {
        toggleDiv.classList.remove("show");
      } else {
        toggleDiv.classList.add("show");
      }
    } catch (err) {
      // nothing
    }
  };

  const handleActivityToggle = () => {
    try {
      const toggleDiv = document.querySelector(".activity-toggle");
      if (window.innerWidth >= 1024) {
        return; // If it's a laptop screen, do nothing and return
      }
      if (toggleDiv.classList.contains("show")) {
        toggleDiv.classList.remove("show");
      } else {
        toggleDiv.classList.add("show");
      }
    } catch (err) {
      // nothing
    }
  };
  const handleAboutToggle = () => {
    try {
      const toggleDiv = document.querySelector(".about-toggle");
      if (window.innerWidth >= 1024) {
        return; // If it's a laptop screen, do nothing and return
      }
      // toggleDiv.style.height = "62px";
      if (toggleDiv.classList.contains("show")) {
        toggleDiv.style.height = "";
        toggleDiv.classList.remove("show");
      } else {
        toggleDiv.style.height = "62px";
        toggleDiv.classList.add("show");
      }
    } catch (err) {
      // nothing
    }
  };

  useEffect(() => {
    const toggleDiv = document.querySelector(".toggle-class");
    toggleDiv.classList.remove("show");
  }, []);

  return (
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid px-0">
              <img
                src="./assets/img/kbv-logo-1.png"
                className="mb-1"
                alt="main_logo"
                style={{ height: "45px", width: "45px" }}
              />

              {/* <img
                src="./assets/img/hope-logo.png"
                className="mb-1"
                alt="main_logo"
                style={{
                  height: "45px",
                  width: "100px",
                  marginLeft: "16px",
                  marginTop: "6px",
                }}
              /> */}

              <a
                className="navbar-brand font-weight-bolder ms-sm-3"
                href="#"
                rel="tooltip"
                title="Designed and Coded by Creative Tim"
                data-placement="bottom"
                target="_blank"
                style={{ fontSize: "24px" }}
              >
                KBV
              </a>
              <button
                className="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  handlToggle();
                }}
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div
                className="toggle-class collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100 show"
                id="navigation"
              >
                <ul className="navbar-nav navbar-nav-hover ms-auto">
                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/"
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        view_day
                      </i>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/intrect-club"
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        view_day
                      </i>
                      Interact Club
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/news-corner"
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        view_day
                      </i>
                      News Corner
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <Link
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/infrastructure"
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        view_day
                      </i>
                      Infrastructure
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <a
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={handleAboutToggle}
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        dashboard
                      </i>
                      About
                      <img
                        src="./assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        className="arrow ms-auto ms-md-2"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3 about-toggle"
                      aria-labelledby="dropdownMenuPages"
                    >
                      <div className="d-none d-lg-block">
                        <Link
                          to="/about"
                          className="dropdown-item border-radius-md"
                        >
                          <span>About Us</span>
                        </Link>
                        <Link
                          to="/gallery"
                          className="dropdown-item border-radius-md"
                        >
                          <span>Gallery</span>
                        </Link>
                      </div>
                      <div className="d-lg-none">
                        <Link
                          to="/about"
                          className="dropdown-item border-radius-md"
                        >
                          <span>About Us</span>
                        </Link>
                        <Link
                          to="/gallery"
                          className="dropdown-item border-radius-md"
                        >
                          <span>Gallery</span>
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown dropdown-hover mx-2">
                    <a
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuBlocks"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={handleActivityToggle}
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        dashboard
                      </i>
                      Activites
                      <img
                        src="./assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        className="arrow ms-auto ms-md-2"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3 activity-toggle"
                      aria-labelledby="dropdownMenuBlocks"
                      style={{ maxHeight: "600px", overflowY: "auto" }}
                    >
                      <div className="d-none d-lg-block">
                        {activities.map((item) => (
                          <Link
                            className="nav-item dropdown dropdown-hover dropdown-subitem"
                            key={item.id}
                            to={`/activite`}
                            onClick={() => setSelectedId(item.id)}
                          >
                            <a className="dropdown-item py-2 ps-3 border-radius-md">
                              <div className="w-100 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    {item.title}
                                  </h6>
                                  <span className="text-sm">
                                    {item.tagline}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                      <div className="row d-lg-none">
                        {activities.map((item) => (
                          <Link
                            className="col-md-12"
                            to={`/activite`}
                            onClick={() => setSelectedId(item.id)}
                          >
                            <div className="d-flex mb-2">
                              <div className="w-100 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                    {item.title}{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown dropdown-hover mx-2">
                    <a
                      className="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      id="dropdownMenuDocs"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="material-icons opacity-6 me-2 text-md">
                        article
                      </i>
                      Acheivement
                      <img
                        src="./assets/img/down-arrow-dark.svg"
                        alt="down-arrow"
                        className="arrow ms-auto ms-md-2"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg "
                      aria-labelledby="dropdownMenuDocs"
                    >
                      <div className="d-none d-lg-block">
                        <ul className="list-group">
                          <li className="nav-item list-group-item border-0 p-0">
                            <a
                              className="dropdown-item py-2 ps-3 border-radius-md"
                              href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit "
                            >
                              <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                Getting Started
                              </h6>
                              <span className="text-sm">
                                All about overview, quick start, license and
                                contents
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </li> */}
                  <li className="nav-item my-auto ms-3 ms-lg-0 mt-1">
                    <Link
                      to="/volunteers"
                      className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0"
                    >
                      Volunteers
                    </Link>
                  </li>
                  <li className="nav-item my-auto ms-3 ms-lg-0 mt-1">
                    <Link
                      to="contact"
                      className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
