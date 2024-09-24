import React from "react";
import "./css/homecard.scss";
import { useNavigate } from "react-router-dom";

const visitors = [
  {
    id: 2,
    img: "./assets/img/home/home_6.jpg",
  },
  {
    id: 4,
    img: "./assets/img/home/home_5.jpg",
  },
  {
    id: 1,
    img: "./assets/img/home/home_1.jpg",
  },
  {
    id: 3,
    img: "./assets/img/home/home_4.jpg",
  },
];

const HomeCards = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/about");
  };
  return (
    <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <section className="my-5">
        <div className="row">
          {visitors.map((itm) => (
            <div className="col-lg-3 col-sm-6" key={itm.id}>
              <div className="card card-plain">
                <div className=" p-0 position-relative">
                  <a
                    className="d-block blur-shadow-image"
                    style={{
                      marginTop: "8px",
                      backgroundColor: "transparent",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={itm.img}
                      alt={`visitor-img-${itm.id}`}
                      className="img-fluid shadow border-radius-lg"
                      loading="lazy"
                      style={{
                        height: "240px",
                        width: "373px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </a>
                </div>
                {/* <div className="card-body px-0">
              <h5>
                <a href="javascript:;" className="text-dark font-weight-bold">
                  Rover raised $65 million
                </a>
              </h5>
              <p>
                Finding temporary housing for your dog should be as easy as
                renting an Airbnb. That’s the idea behind Rover ...
              </p>
            </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Our Vision */}

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 my-auto">
              <h3 className="text-gradient text-primary mb-0">Our Vision</h3>
              <h3>We at "KBV"</h3>
              <p className="pe-md-5 mb-4">
                School for the Hearing Impaired believe in the word in which all
                people who are Hearing Impaired and deaf have every opportunity
                to experience full and productive lives.
              </p>
              <div className="github-buttons">
                <a
                  className="btn bg-gradient-primary mb-5 mb-sm-0"
                  onClick={goToAboutUs}
                >
                  Know More
                </a>
                <div className="github-button">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 my-auto">
              <a>
                <img
                  className="w-100 border-radius-lg shadow-lg"
                  src="./assets/img/visitors/certi.jpeg"
                  alt="Product Image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 my-auto">
              <h3 className="text-gradient text-primary mb-0">Our Mission</h3>
              <h3>Our school provides</h3>
              <p className="pe-md-5 mb-4">
                Hearing impaired students access to comprehensive, evidence
                based education and support services in the class room and in
                the greater community. we strive for excellence and innovation.
                we work to maximize each students social, physical,
                intellectual, communication, emotional and spiritual growth.
              </p>
              <div className="github-buttons">
                <a
                  className="btn bg-gradient-primary mb-5 mb-sm-0"
                  onClick={goToAboutUs}
                >
                  Know More
                </a>
                <div className="github-button">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 my-auto">
              <a>
                <img
                  className="w-100 border-radius-lg shadow-lg"
                  src={
                    "./assets/img/school/home/got school trophy in ureka science fair -2018.jpg"
                  }
                  alt="Product Image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
              <div className="rotating-card-container">
                <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
                  <div
                    className="front front-background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="card-body py-7 text-center">
                      <i className="material-icons text-white text-4xl my-3">
                        touch_app
                      </i>
                      <h3 className="text-white">
                        What Makes Our Schools the Perfect Choice for Your
                        Child?
                      </h3>
                    </div>
                  </div>
                  <div
                    className="back back-background"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="card-body pt-7 text-center">
                      <h3 className="text-white">
                        Why Our Schools are the Right Fit for Your Child?
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row justify-content-start">
                <div className="col-md-6">
                  <div className="info">
                    <i className="material-icons text-gradient text-primary text-3xl">
                      school
                    </i>
                    <h5 className="font-weight-bolder mt-3">
                      Well Trained Professionals
                    </h5>
                    <p className="pe-3">
                      Our dedicated team of well-trained professionals ensures a
                      top-tier educational experience for every student.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <i className="material-icons text-gradient text-primary text-3xl">
                      foundation
                    </i>
                    <h5 className="font-weight-bolder mt-3">
                      Awesome Infra-Structure
                    </h5>
                    <p className="pe-3">
                      Experience learning in our state-of-the-art infrastructure
                      designed to foster creativity and growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start mt-5">
                <div className="col-md-6 mt-3">
                  <i className="material-icons text-gradient text-primary text-3xl">
                    public{" "}
                  </i>
                  <h5 className="font-weight-bolder mt-3">
                    International Lesson Patterns
                  </h5>
                  <p className="pe-3">
                    We offer globally recognized lesson patterns that prepare
                    students for success on an international stage.
                  </p>
                </div>
                <div className="col-md-6 mt-3">
                  <i className="material-icons text-gradient text-primary text-3xl">
                    nature
                  </i>
                  <h5 className="font-weight-bolder mt-3">
                    Holistic Development Programs
                  </h5>
                  <p className="pe-3">
                    Our holistic development programs nurture every aspect of a
                    child's growth, from academics to personal well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="row text-center my-sm-5 mt-5">
              <div className="col-lg-6 mx-auto">
                <span className="badge bg-primary mb-3">
                  Achievements & Highlights
                </span>
                <h2 className="">Celebrating Our Milestones</h2>
                <p className="lead">
                  Showcasing the moments of excellence and progress from our
                  school community. These photos represent our students' and
                  staff's dedication and achievements across various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={"./assets/img/home/home_2.jpg"}
                      alt="aboutus"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      // style={{ height: "300px", width: "416px" }}
                    />
                  </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-5">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={
                        "./assets/img/school/home/got 1 sr prize in district level program of 26 th januadry celebration by governmaent of gujarat.jpeg"
                      }
                      alt="contacus"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      // style={{ height: "300px", width: "416px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-md-3 mt-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={"./assets/img/home/home_3.jpg"}
                      alt="author"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-md-3 mt-6">
                  <div
                    className="card move-on-hover"
                    style={{
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      border: "2px solid #e91e63",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={
                        "./assets/img/school/home/WhatsApp Image 2020-01-10 at 8.39.56 AM.jpeg"
                      }
                      alt="signin"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      // style={{ height: "300px", width: "416px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto mt-md-0 mt-5">
              <div
                className="position-sticky"
                style={{ top: "100px !important" }}
              >
                <h4 className="">Triumphs & Honors</h4>
                <h6 className="text-secondary font-weight-normal">
                  Our school takes pride in a range of accomplishments that
                  highlight our students' and staff's exceptional talents. From
                  achieving top ranks in national and regional academic
                  competitions to winning numerous sports trophies, our
                  achievements reflect dedication and teamwork. We also
                  celebrate vibrant cultural performances and exhibitions
                  throughout the year, alongside impactful community service
                  projects that embody our commitment to making a positive
                  difference.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- -------- START Content Presentation Docs ------- --> */}
      <div className="container mt-sm-5">
        <div
          className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
          style={{
            backgroundImage: `url('./assets/img/school/home/cul1.jpeg')`,
          }}
          loading="lazy"
        >
          <span className="mask bg-gradient-dark"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ms-lg-5">
                <h1 className="text-white">Hearing Hope</h1>
                <p className="lead text-white opacity-8">
                  Empowering hearing-impaired children through education,
                  vocational training, and comprehensive care
                </p>
                <a
                  href="#"
                  className="text-white icon-move-right"
                  onClick={goToAboutUs}
                >
                  more
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">favorite</i>

              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Support</h5>
                <p className="text-white">
                  Providing essential love, and care for hearing-impaired
                  students, ensuring their well-being and holistic development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">school</i>
              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Education</h5>
                <p className="text-white">
                  Offering primary education and vocational training in
                  tailoring, candle making, and handicrafts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="info-horizontal bg-gradient-primary border-radius-xl d-block d-md-flex p-4">
              <i className="material-icons text-white text-3xl">star</i>
              <div className="ps-0 ps-md-3 mt-3 mt-md-0">
                <h5 className="text-white">Achievements</h5>
                <p className="text-white">
                  Celebrating district, state, and national awards and
                  recognizing government support and grants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- -------- END Content Presentation Docs ------- --> */}
      <section className="py-sm-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/o4rISJwMCMk?si=u6DBK0GdGdNN_eAg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HZZIlYoRQIw?si=el-oGmMFEn6on301"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5qRrf55AOpk?si=cVuF6mdREK4Y9Rsz"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
