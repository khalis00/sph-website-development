import React from "react";
import Link from "next/link"; // Import Link from next/link

const PageHero = () => {
  return (
    <>
      {/* Hero */}
      <div className='bg-soft-warning overflow-hidden'>
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
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
          <div className="container-fluid position-relative px-lg-7">
            <div className="mb-5 hero-image-container">
              {/* Background Image */}
              <div className="hero-image"></div>
            </div>
            {/* Background Shapes */}
            <div className='position-absolute zi-n1' style={{ top: '-6rem', left: '-6rem' }}>
              <img
                src='/assets/svg/components/shape-1.svg'
                alt='SVG'
                width={500}
                style={{ width: '12rem' }}
              />
            </div>
            <div className='position-absolute zi-n1' style={{ bottom: '-6rem', right: '-7rem' }}>
              <img
                src='/assets/svg/components/shape-7.svg'
                alt='SVG'
                width={250}
              />
            </div>
            {/* End Background Shapes */}
          </div>
          <div className="text-center">
            {/* Use Link component for navigation with legacyBehavior */}
            <Link href="/about" legacyBehavior>
              <a className="btn btn-outline-primary">
                Join us | Explore roles <i className="bi-chevron-right small ms-1" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* End Hero */}
      <style jsx>{`
        .hero-image-container {
          position: relative;
          width: 100%;
          height: 600px; /* Adjust height as needed */
          overflow: hidden;
        }
        .hero-image {
          background-image: url('/images/technologyteam/team.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default PageHero;
