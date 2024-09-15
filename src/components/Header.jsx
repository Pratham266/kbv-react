import React from "react";

const Header = () => {
  return (
    <header className="header-2">
      <div
        className="page-header min-vh-75 relative"
        style={{
          backgroundImage: `url('./assets/img/building1.jpeg')`,
          backgroundPosition: "center",
        }}
      >
        <span className="mask bg-gradient-primary opacity-4"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <h1 className="text-white pt-3 mt-n5">
                Smt. Kamlaben <br />
                Badhir Vidhyalaya
              </h1>
              <p className="lead text-white mt-3">
                A child, who has not known the sound of " Mother" and her love,
                a child who has not listened the sweet stories of grandmother,
                who has not listened the melodies voice of birds. These hearing
                impaired students required love and affection, protective
                environment and care. They do not want pity but need support and
                help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
