import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <header className="bg-gradient-dark">
      <div
        className="page-header min-vh-75"
        style={{
          backgroundImage: `url('../assets/img/building1.jpeg')`,
          backgroundPosition: "center",
        }}
      >
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mx-auto my-auto">
              <h1 className="text-white">{title}</h1>
              <p className="lead mb-4 text-white opacity-8">{subTitle}</p>

              {/* <h6 className="text-white mb-2 mt-5">Find us on</h6>
              <div className="d-flex justify-content-center">
                <a href="javascript:;">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">
                    facebook
                  </i>
                </a>
                <a href="javascript:;">
                  <i className="material-icons text-3xl text-gradient text-info mb-3">
                    youtube
                  </i>
                </a>
                <a href="javascript:;">
                  <i className="fab fa-twitter text-lg text-white me-4"></i>
                </a>
                <a href="javascript:;">
                  <i className="fab fa-google-plus text-lg text-white"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
