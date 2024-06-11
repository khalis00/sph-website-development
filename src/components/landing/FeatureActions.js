/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
//import Image from 'next/image'

const FeatureActions = () => {
  return (
    <>
      <style jsx>{`
        .bg-img-center {
          background-position: center;
          background-size: cover;
          transition: transform 0.5s ease;
        }
        .bg-img-center:hover {
          transform: scale(1.05);
        }
        .img-fluid {
          transition: transform 0.5s ease;
        }
        .img-fluid:hover {
          transform: scale(1.05);
        }
      `}</style>
      {/* Features */}
      <div className="container overflow-hidden content-space-1">
        {/* Heading */}
        <div className="w-lg-65 text-center mx-lg-auto mb-7">
          <h3>
            Swahilipot Hub
            <br />
            Strategic Objectives
          </h3>
          <p className="fs-6">
            Swahilipot’s approach to meaningful youth engagement and empowerment
            is guided by 3 outcome goals/strategic objectives.
          </p>
        </div>
        {/* End Heading */}
        
        <div className="content-space-b-1 content-space-b-md-1">
          <div className="bg-soft-primary-light">
            <div className="container">
              <div className="row justify-content-center justify-content-lg-between">
                <div className="col-md-6 content-space-t-1 content-space-md-1">
                  {/* Heading */}
                  <div className="mb-7">
                    <h1 className="display-4 text-primary mb-3 mb-md-5">
                      <span className="text-warning">Enhancing  —</span>
                      <br />
                      Youth Civic Participation and Community Impact
                    </h1>
                    <div className="lead">
                      <ul>
                        <li>Providing safe and conducive spaces for youth to engage in civic activities and express their ideas.</li>
                        <li>Offering holistic support systems, including mentorship programs, to empower youth and enhance their skills for community involvement.</li>
                        <li>Ensuring access to social services that address the needs of young people and enable them to actively participate in social change initiatives.</li>
                      </ul>
                    </div>
                  </div>
                  {/* End Heading */}
                </div>
                {/* End Col */}
                <div className="col-sm-10 col-md-6 col-lg-5">
                  <div className="row gx-2 transform-y-5rem">
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        {/* Images */}
                        <div
                          className="d-none d-md-block bg-img-center"
                          style={{
                            backgroundImage: "url(/assets/images/1.jpg.jpeg)",
                            height: "18.25rem"
                          }}
                        />
                        <div
                          className="d-none d-md-block bg-img-center"
                          style={{
                            backgroundImage: "url(/assets/images/2.jpg.jpeg)",
                            height: "20.25rem"
                          }}
                        />
                        <img
                          className="d-md-none img-fluid w-100"
                          src="/assets/images/3.jpg.jpeg"
                          alt="Image Description"
                        />
                        <img
                          className="d-md-none img-fluid w-100"
                          src="/assets/images/2.jpg.jpeg"
                          alt="Image Description"
                        />
                        {/* End Images */}
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-6">
                      <div className="d-grid gap-2">
                        {/* Images */}
                        <div
                          className="d-none d-md-block bg-img-center"
                          style={{
                            backgroundImage: "url(/assets/images/1.jpg.jpeg)",
                            height: "22rem"
                          }}
                        />
                        <div
                          className="d-none d-md-block bg-img-center"
                          style={{
                            backgroundImage: "url(/assets/images/2.jpg.jpeg)",
                            height: "16rem"
                          }}
                        />
                        <img
                          className="d-md-none img-fluid w-100"
                          src="/assets/images/1.jpg.jpeg"
                          alt="Image Description"
                        />
                        <img
                          className="d-md-none img-fluid w-100"
                          src="/assets/images/2.jpg.jpeg"
                          alt="Image Description"
                        />
                        {/* End Images */}
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
<<<<<<< HEAD
=======
          {/* End Col */}
          <div className="col-sm-10 col-md-6 col-lg-5">
            <div className="row gx-2 transform-y-5rem">
              <div className="col-6">
                <div className="d-grid gap-2">
                  {/* Images */}
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
 aliisph
                      backgroundImage:"url(../assets/img/225x324/img1.jpg)",
                  

                      backgroundImage: "url(../assets/img/225x292/img1.jpg)",
                      height: "18.25rem"
 alpha-dev
                    }}
                  />
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../assets/img/225x324/img1.jpg)",
                      height: "20.25rem"
                    }}
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x292/img1.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x324/img1.jpg"
                    alt="Image Description"
                  />
                  {/* End Images */}
                </div>
              </div>
              {/* End Col */}
              <div className="col-6">
                <div className="d-grid gap-2">
                  {/* Images */}
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "../assets/img/225x324/img1.jpg",
                      height: "22rem"
                    }}
                  />
                  <div
                    className="d-none d-md-block bg-img-center"
                    style={{
                      backgroundImage: "url(../assets/img/225x261/img1.jpg)",
                      height: "16rem"
                    }}
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x355/img1.jpg"
                    alt="Image Description"
                  />
                  <img
                    className="d-md-none img-fluid w-100"
                    src="../assets/img/225x261/img1.jpg"
                    alt="Image Description"
                  />
                  {/* End Images */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Col */}
>>>>>>> 6bab4bf35dc7a4915e9c95e022b3416b0e458fa7
        </div>
        {/* End Hero */}
      
        {/* Features */}
        <div className="container overflow-hidden content-space-b-1">
          <div className="row justify-content-end align-items-md-center">
            <div className="bg-primary-dark position-relative pt-3 pt-md-0">
              <div className="container">
                <div
                  className="d-none d-md-block col-md-6 position-absolute top-0 end-0 bg-img-center h-100"
                  style={{ backgroundImage: "url(/assets/images/2.jpg.jpeg)" }}
                />
                <div className="d-md-none mb-5 mb-md-0">
                  <img
                    className="img-fluid"
                    src="/assets/images/1.jpg.jpeg"
                    alt="Image Description"
                  />
                </div>
                <div className="row align-items-lg-center content-space-b-1 content-space-md-3">
                  <div className="col-md-8 col-lg-6">
                    {/* Heading */}
                    <div className="pe-lg-3 mb-7">
                      <h3>Strengthening Partnerships and Collaborations for Youth Empowerment</h3>
                      <div className="lead text-white">
                        <ul>
                          <li>Fostering partnerships between various stakeholders, such as government institutions, NGOs, and community organizations, to create a comprehensive support system for youth.</li>
                          <li>Collaborating with different sectors to increase opportunities for young people, such as education, employment, and entrepreneurship.</li>
                          <li>Catalyzing systemic change by bringing together diverse actors to collectively address issues affecting youth and create sustainable solutions.</li>
                        </ul>
                        <span className="text-warning">destination?</span>
                      </div>
                    </div>
                    {/* End Heading */}
                  </div>
                  {/* End Col */}
                  <div className="col-md-4 align-self-md-end position-relative z-1">
                    <div
                      className="d-none d-md-block transform-0"
                      style={{
                        marginBottom: "-12rem",
                        marginLeft: "-5rem",
                        marginRight: "10rem"
                      }}
                    >
                      <img
                        className="img-fluid"
                        src="/assets/images/2.jpg.jpeg"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Features */}
      
        {/* Features */}
        <div className="container overflow-hidden content-space-b-1">
          <div className="bg-soft-warning position-relative py-4 py-md-0">
            <div className="container">
              <div
                className="d-none d-md-block col-md-6 position-absolute top-0 end-0 bg-img-center h-100"
                style={{ backgroundImage: "url(/assets/images/2.jpg.jpeg)" }}
              />
              <div className="d-md-none mb-5 mb-md-0">
                <img
                  className="img-fluid"
                  src="/assets/images/1.jpg.jpeg"
                  alt="Image Description"
                /><br></br>
              </div>
              <div className="row align-items-md-center content-space-md-3">
                <div className="col-md-6">
                  <div className="pe-lg-3">
                    <h1 className="h2 mb-3 mb-md-5">
                      Promoting Positive Youth Development and Building Capacities
                    </h1>
                    <div>
                      <ul>
                        <li>Implementing youth development programs that focus on nurturing the skills, capacities, and agency of young individuals.</li>
                        <li>Offering opportunities for young people to develop their talents, interests, and strengths through a range of activities and initiatives.</li>
                        <li>Equipping young people with assets, including knowledge, networks, and resources, to enhance their personal growth, leadership abilities, and long-term success.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className="col-md-4 align-self-md-end position-relative z-1">
                  <div
                    className="d-none d-md-block transform-0"
                    style={{
                      marginBottom: "-12rem",
                      marginLeft: "-3rem",
                      marginRight: "10rem"
                    }}
                  >
                    <img
                      className="img-fluid"
                      src="/assets/images/2.jpg.jpeg"
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
        {/* End Features */}
      </div>
    </>
  )
}

export default FeatureActions
