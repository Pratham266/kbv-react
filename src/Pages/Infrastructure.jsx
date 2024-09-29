import React, { useEffect } from "react";
import Header from "../components/about/Header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const infrastructureData = [
  {
    id: 1,
    title: "Big and airy classroom",
    description:
      "Spacious classrooms ensuring a comfortable learning environment.",
  },
  {
    id: 2,
    title: "Big Play Ground",
    description:
      "A large playground for physical activities and outdoor sports.",
  },
  {
    id: 3,
    title: "Smart Class",
    description:
      "Equipped with smart technology to enhance interactive learning.",
  },
  {
    id: 4,
    title: "Computer Lab",
    description: "State-of-the-art computer lab with modern equipment.",
  },
  {
    id: 5,
    title: "Mini Science Lab",
    description: "A mini lab for hands-on science experiments and learning.",
  },
  {
    id: 6,
    title: "Drawing room, Toyes & Books Library, Craft Room",
    description: "Creative spaces for drawing, crafts, and reading.",
  },
  {
    id: 7,
    title: "Big Prayer Hall",
    description: "A large hall for prayer and school gatherings.",
  },
  {
    id: 8,
    title: "Free Hostel Facility",
    description: "Comfortable and free accommodation for students.",
  },
  {
    id: 9,
    title: "Audiometry Room",
    description: "A room equipped for hearing assessments and tests.",
  },
  {
    id: 10,
    title: "Vocational Training Equipment",
    description: "Tools and equipment for skill-based vocational training.",
  },
  {
    id: 11,
    title: "Close Circuit Television Camera – CCTV",
    description: "CCTV cameras ensuring campus safety and security.",
  },
  {
    id: 12,
    title: "Electronic Attendance recording system",
    description: "Automated system for accurate student attendance tracking.",
  },
  {
    id: 13,
    title: "Free Audiogram & BTE Hearing Aid",
    description: "Provision of free audiograms and hearing aids for students.",
  },
  {
    id: 14,
    title: "Speech Trainer",
    description:
      "Specialized equipment to support speech training for students.",
  },
  {
    id: 15,
    title: "Water Purifier & Water Cooler",
    description: "Safe drinking water through advanced purification systems.",
  },
  {
    id: 16,
    title: "Auditory training",
    description:
      "Facilities dedicated to auditory skill development and training.",
  },
  {
    id: 17,
    title: "Male & female Washroom",
    description: "Separate washrooms ensuring hygiene and privacy.",
  },
  {
    id: 18,
    title: "Free School Uniform, Schoolbag, Shoes, School Handbook etc",
    description: "Provision of essential school supplies at no cost.",
  },
  {
    id: 19,
    title: "Projector and TV",
    description: "Multimedia equipment for visual and engaging presentations.",
  },
];

const Infrastructure = () => {
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
        title={"Infrastructure and Instruments"}
        subTitle={`"Empowering Learning through Advanced Facilities"`}
      />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <div className="position-relative">
                <PhotoProvider>
                  <PhotoView src="./assets/infra/infra1.jpeg">
                    <img
                      className="max-width-50 w-100 position-relative z-index-2"
                      src="./assets/infra/infra1.jpeg"
                      alt="image-dhabakara-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                      }}
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>

            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
              {infrastructureData &&
                infrastructureData?.slice(0, 11).map((item) => (
                  <div className="p-3 info-horizontal" key={item?.id}>
                    <div
                      className="icon icon-shape  bg-gradient-primary shadow-primary text-center"
                      style={{ height: "20px", width: "20px" }}
                    >
                      <i className="fas fa-ship opacity-10"></i>
                    </div>
                    <div className="description ps-3">
                      <span style={{ fontWeight: 600 }}>{item?.title}</span>
                      <p className="mb-0">{item?.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
              {infrastructureData &&
                infrastructureData?.slice(11).map((item) => (
                  <div className="p-3 info-horizontal" key={item?.id}>
                    <div
                      className="icon icon-shape  bg-gradient-primary shadow-primary text-center"
                      style={{ height: "20px", width: "20px" }}
                    >
                      <i className="fas fa-ship opacity-10"></i>
                    </div>
                    <div className="description ps-3">
                      <span style={{ fontWeight: 600 }}>{item?.title}</span>
                      <p className="mb-0">{item?.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-6 my-auto">
              <div className="position-relative">
                <PhotoProvider>
                  <PhotoView src="./assets/infra/infra2.jpeg">
                    <img
                      className="max-width-50 w-100 position-relative z-index-2"
                      src="./assets/infra/infra2.jpeg"
                      alt="image-dhabakara-2"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                      }}
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
