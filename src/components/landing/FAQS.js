/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQs = () => {
  // State to keep track of active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      {/* FAQ */}
      <div className='container content-space-1'>
        <div className='text-center'>
          <img
            className='mb-5'
            src='../assets/svg/illustrations/oc-looking-for-answers.svg'
            alt='Illustration'
            style={{ maxWidth: '15rem' }}
          />
        </div>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>Frequently Asked Questions</h3>
        </div>
        {/* End Heading */}
        {/* Carousel */}
        <div className='w-lg-85 mx-lg-auto mb-7'>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {/* FAQ Item 1 */}
            <Carousel.Item>
              <div className='card'>
                <div className='card-header' id='headingOneEg1'>
                  <h5 className='mb-0'>
                    <button
                      className='accordion-button text-primary'
                      type='button'
                      onClick={() => handleSelect(0)}
                    >
                      What is Swahilipot Hub?
                    </button>
                  </h5>
                </div>
                <div
                  id='collapseOneEg1'
                  className={activeIndex === 0 ? 'collapse show' : 'collapse'}
                  aria-labelledby='headingOneEg1'
                  data-bs-parent='#accordionFAQEg1'
                >
                  <div className='card-body'>
                    Swahilipot Hub is an innovation and technology hub located in
                    Mombasa, Kenya. It serves as a community-driven space that
                    promotes technology, entrepreneurship, and skills development
                    in the coastal region of Kenya.
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* FAQ Item 2 */}
            <Carousel.Item>
              <div className='card'>
                <div className='card-header' id='headingTwoEg1'>
                  <h5 className='mb-0'>
                    <button
                      className='accordion-button text-primary'
                      type='button'
                      onClick={() => handleSelect(1)}
                    >
                      What programs and services does SwahiliPot Hub offer?
                    </button>
                  </h5>
                </div>
                <div
                  id='collapseTwoEg1'
                  className={activeIndex === 1 ? 'collapse show' : 'collapse'}
                  aria-labelledby='headingTwoEg1'
                  data-bs-parent='#accordionFAQEg1'
                >
                  <div className='card-body'>
                    SwahiliPot Hub offers a range of programs and services,
                    including training workshops, mentorship programs, networking
                    events, access to co-working spaces, and maker labs. These
                    initiatives aim to empower individuals by providing them with
                    the necessary resources and skills to participate in the
                    digital economy.
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* FAQ Item 3 */}
            <Carousel.Item>
              <div className='card'>
                <div className='card-header' id='headingThreeEg1'>
                  <h5 className='mb-0'>
                    <button
                      className='accordion-button text-primary'
                      type='button'
                      onClick={() => handleSelect(2)}
                    >
                      Who can benefit from Swahilipot Hub?
                    </button>
                  </h5>
                </div>
                <div
                  id='collapseThreeEg1'
                  className={activeIndex === 2 ? 'collapse show' : 'collapse'}
                  aria-labelledby='headingThreeEg1'
                  data-bs-parent='#accordionFAQEg1'
                >
                  <div className='card-body'>
                    Swahilipot Hub is open to entrepreneurs, developers,
                    creatives, and anyone interested in technology and innovation.
                    It caters to individuals who are looking to enhance their
                    digital skills, collaborate on projects, and connect with
                    like-minded individuals in the tech ecosystem.
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* FAQ Item 4 */}
            <Carousel.Item>
              <div className='card'>
                <div className='card-header' id='headingFourEg1'>
                  <h5 className='mb-0'>
                    <button
                      className='accordion-button text-primary'
                      type='button'
                      onClick={() => handleSelect(3)}
                    >
                      Can I visit Swahilipot Hub as a visitor?
                    </button>
                  </h5>
                </div>
                <div
                  id='collapseFourEg1'
                  className={activeIndex === 3 ? 'collapse show' : 'collapse'}
                  aria-labelledby='headingFourEg1'
                  data-bs-parent='#accordionFAQEg1'
                >
                  <div className='card-body'>
                    Yes, Swahilipot Hub welcomes visitors who are interested in
                    learning more about their initiatives and the local tech
                    ecosystem. You can visit the hub to attend events, participate
                    in workshops, or simply network with professionals in the
                    field. SwahiliPot Hub promotes an inclusive and vibrant
                    community where individuals can exchange ideas and explore
                    opportunities in technology and innovation.
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* End Carousel */}
        {/* Info */}
        <div className='text-center'>
          <p className='mb-0'>Still have questions?</p>
          <a className='link' href='mailto:info@swahilipothub.co.ke'>
            Contact our friendly support team{' '}
            <i className='bi-chevron-right small ms-1' />
          </a>
        </div>
        {/* End Info */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default FAQs;
