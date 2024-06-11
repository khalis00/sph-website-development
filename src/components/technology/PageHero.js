import React from "react";

const PageHero = () => {
  return (
    <>
      {/* Hero */}
      <div className="overflow-hidden">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 col-md-8 col-lg-7">
              {/* Heading */}
              <div className="text-center mb-7">
                <h1 className="display-4 text-primary">
                  Technology{" "}
                  <span className="text-warning">Department</span>
                </h1>
                <p className="lead">
                  "Kukuza Teknolojia: Kuunda Kesho Leo"
                </p>
              </div>
              {/* End Heading */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="position-relative mb-5">
            <img
              className="img-fluid"
              src="../images/technologyteam/technology.jpeg"
              alt="Technology Department"
            />
          </div>
          {/* End Background Shapes */}
          <div className="text-center">
            <a className="btn btn-outline-primary" href="/about">
              Join us | Explore roles <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default PageHero;
