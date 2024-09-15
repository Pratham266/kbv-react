import React from "react";

const Volunteers = () => {
  return (
    <section style={{ marginTop: "80px" }}>
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
            <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg p-3">
                    <h3 className="text-white text-primary mb-0">Volunteers</h3>
                  </div>
                </div>
                <div className="card-body">
                  <p className="pb-3">
                    Join us in making a difference for deaf students by
                    volunteering your skills and time to create an inclusive
                    environment.
                  </p>
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
                              placeholder="email@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group input-group-static mb-4">
                            <label>Phone</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="9999999999"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ps-md-2">
                          <div className="input-group input-group-static mb-4">
                            <label>City</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="city"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0 mt-md-0 mt-4">
                        <div className="input-group input-group-static mb-4">
                          <label>Select Volunteer Role</label>
                          <select className="form-control">
                            <option value="">-- Select Role --</option>
                            <option value="Fund raising ">Fund raising</option>
                            <option value="Arranging and  conducting field trips / tour">
                              Arranging and conducting field trips / tour
                            </option>
                            <option value="Designing  and  maintaining the website">
                              Designing and maintaining the website.
                            </option>
                            <option value="Cataloging the  library">
                              Cataloging the library
                            </option>
                            <option value="Research &  survey work.">
                              Research & survey work.
                            </option>
                          </select>
                        </div>

                        <div className="input-group input-group-static mb-4">
                          <label>
                            Tell us about your interest in volunteering
                          </label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows="6"
                            placeholder="Share your thoughts on why you'd like to volunteer or any relevant experience."
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

export default Volunteers;
