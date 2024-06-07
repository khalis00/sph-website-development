/* eslint-disable @next/next/no-img-element */

const PageCTA = () => {
  return (
    <div className='container content-space-1 content-space-md-3'>
      <div className='text-center'>
        <img
          className='mb-5'
          src='./assets/svg/illustrations/oc-growing.svg'
          alt='Illustration'
          style={{ width: '15rem' }}
        />
      </div>
      {/* Heading */}
      <div className='w-lg-65 text-center mx-lg-auto mb-7'>
        <h3>Start your business journey with Space</h3>
        <p className='fs-6'>
          Try Space for free, and explore all the tools and services you need to
          start, run, and grow your business.
        </p>
      </div>
      {/* End Heading */}
      <div className='text-center'>
        <a className='btn btn-primary' href='./page-login.html'>
          Start free trial
        </a>
      </div>
    </div>
  )
}

export default PageCTA
