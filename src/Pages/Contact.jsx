import React, { useEffect, useState } from "react";
import { credentialsOfEmail } from "../EmailService/sendEmail";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    try {
      const toggleDivMain = document.querySelector(".toggle-class");
      const toggleDivActivite = document.querySelector(".activity-toggle");
      const toggleDivAbout = document.querySelector(".about-toggle");
      toggleDivMain.classList.remove("show");
      toggleDivAbout.classList.remove("show");
      toggleDivActivite.classList.remove("show");
      window.scrollTo(0, 0);
    } catch (err) {
      // nothing
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, message } = formData;
    const { serviceID, salesTemplate, publicId } = credentialsOfEmail();

    setLoading(true);
    // Validate required fields
    if (!fullName || !email || !message) {
      toast("Please fill out all required fields.", {
        type: "warning",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast("Please enter a valid email address.", {
        type: "warning",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    const templateParams = {
      to_name: "KBV School Contact",
      to_email: email,
      from_name: fullName,
      message: `Message : ${message}`,
    };

    emailjs
      .send(serviceID, salesTemplate, templateParams, {
        publicKey: publicId,
      })
      .then((response) => {
        toast("Your message has been sent successfully.", {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        toast(
          "An error occurred while sending your message. Please try again later.",
          {
            type: "error",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        setLoading(false);
      });
  };

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

            <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg p-3">
                    <h3 className="text-white text-primary mb-0">Contact us</h3>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    id="contact-form"
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="card-body p-0 my-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group input-group-static mb-4">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Full Name"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
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
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
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
                            placeholder="Describe your concern or request in detail."
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          {loading ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 200 200"
                              style={{ height: "100px", width: "400px" }}
                            >
                              <circle
                                fill="#FF156D"
                                stroke="#FF156D"
                                stroke-width="2"
                                r="15"
                                cx="40"
                                cy="65"
                              >
                                <animate
                                  attributeName="cy"
                                  calcMode="spline"
                                  dur="2"
                                  values="65;135;65;"
                                  keySplines=".5 0 .5 1;.5 0 .5 1"
                                  repeatCount="indefinite"
                                  begin="-.4"
                                ></animate>
                              </circle>
                              <circle
                                fill="#FF156D"
                                stroke="#FF156D"
                                stroke-width="2"
                                r="15"
                                cx="100"
                                cy="65"
                              >
                                <animate
                                  attributeName="cy"
                                  calcMode="spline"
                                  dur="2"
                                  values="65;135;65;"
                                  keySplines=".5 0 .5 1;.5 0 .5 1"
                                  repeatCount="indefinite"
                                  begin="-.2"
                                ></animate>
                              </circle>
                              <circle
                                fill="#FF156D"
                                stroke="#FF156D"
                                stroke-width="2"
                                r="15"
                                cx="160"
                                cy="65"
                              >
                                <animate
                                  attributeName="cy"
                                  calcMode="spline"
                                  dur="2"
                                  values="65;135;65;"
                                  keySplines=".5 0 .5 1;.5 0 .5 1"
                                  repeatCount="indefinite"
                                  begin="0"
                                ></animate>
                              </circle>
                            </svg>
                          ) : (
                            <button
                              type="submit"
                              className="btn bg-gradient-primary mt-3 mb-0"
                              disabled={loading}
                            >
                              Send Message
                            </button>
                          )}
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
