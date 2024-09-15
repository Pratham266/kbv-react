import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div
                className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                style={{
                  backgroundImage: `url('../assets/img/at-volutree.jpg')`,
                  backgroundSize: "cover",
                }}
                loading="lazy"
              ></div>
            </div>
            {/* <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <video
                  className="w-100 border-radius-lg"
                  src="../assets/video/Skit-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />{" "}
              </div>
            </div> */}
            <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg p-3">
                    <h3 className="text-white text-primary mb-0">Contact us</h3>
                  </div>
                </div>
                <div className="card-body">
                  <form id="contact-form" method="post" autocomplete="off">
                    <div className="card-body p-0 my-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group input-group-static mb-4">
                            <label>Full Name</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ps-md-2">
                          <div className="input-group input-group-static mb-4">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="hello@creative-tim.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0 mt-md-0 mt-4">
                        <div className="input-group input-group-static mb-4">
                          <label>How can we help you?</label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows="6"
                            placeholder="Describe your problem in at least 250 characters"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <button
                            type="submit"
                            className="btn bg-gradient-primary mt-3 mb-0"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
