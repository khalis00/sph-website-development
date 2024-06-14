/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Activities = () => {
  return (
    <div>
      <>
        {/* Blog */}
        <div className='container content-space-1'>
          {/* Heading */}
          <div className='w-lg-65 text-center mx-lg-auto mb-7'>
            <h3>Our Activities</h3>
            <p className='fs-6'>Explore all Space guides and resources.</p>
          </div>
          {/* End Heading */}
          <div className='row mb-5 mb-sm-5'>
            <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            
            </div>
            <>
              {/* Features */}
              <div className="container">
                <div className="row align-items-md-center">
                  <div className="col-md-6 order-md-2 mb-5 mb-md-0">
                    <div className="ps-md-5">
                      {/* Heading */}

                      {/* End Heading */}
                      <div className="d-grid gap-3">
                        {/* Info Block */}
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <span className="svg-icon svg-icon-sm text-primary"></span>
                          </div>
                          <div className="flex-grow-1 ms-4">
                            <h5 className="text-primary">
                              <a href="#">Training Programs</a>
                            </h5>
                            <p>
                            We have assembled a diverse array of curriculums that
                                include digital skills, software development, and a wide
                                range of technical training tailored to meet the needs of
                                our beneficiaries.
                            </p>
                          </div>
                        </div>
                        {/* End Info Block */}
                        {/* Info Block */}
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <span className="svg-icon svg-icon-sm text-primary"></span>
                          </div>
                          <div className="flex-grow-1 ms-4">
                            <h5 className="text-primary">
                              <a href="#">Mentorship and Guidance</a>
                            </h5>
                            <p>
                            The Swahili Tech Initiative's mentorship and guidance
                                programs pair individuals with seasoned tech professionals
                                to share knowledge, offer support, and growth.
                            </p>
                          </div>
                        </div>
                        {/* End Info Block */}
                        {/* Info Block */}
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <span className="svg-icon svg-icon-sm text-primary"></span>
                          </div>
                          <div className="flex-grow-1 ms-4">
                            <h5 className="text-primary">
                              <a href="#">Networking</a>
                            </h5>
                            <p>                    We aim to establish a network of women dedicated to
                                fostering a vibrant and engaged community. Our goal is to
                                cultivate a sisterhood that supports and sustains the
                                collective spirit. Together, we'll ensure our community
                                thrives and remains connected.</p>
                          </div>
                        </div>
                        {/* End Info Block */}
                      </div>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      src="../assets/img/950x950/training.jpeg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              {/* End Features */}
              {/* Features */}

              {/* End Features */}
            </>

            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Blog */}
      </>
    </div>
  )
}

export default Activities
