import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const Numbers = () => {
  const [key, setKey] = useState(0)

  // Auto-refresh the component every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1)
    }, 30000) // 30000 milliseconds = 0.5 minutes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='bg-soft-warning'>
      <div className='container content-space-1 content-space-md-3'>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-4'>
          <h3>Swahilipot Hub in Numbers</h3>
          <p className='fs-6'>Our Impacts in Numbers</p>
        </div>
        {/* End Heading */}
        <div className='w-lg-75 text-center mx-lg-auto'>
          <div className='row'>
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>
                  <CountUp key={key} start={0} end={4000} duration={2} />
                  +
                </h2>
                <p className='mb-0'>Community Members</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>
                  <CountUp key={key} start={0} end={25} duration={2} />
                </h2>
                <p className='mb-0'>Programs and Activities</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>
                  <CountUp key={key} start={0} end={65} duration={2} />%
                </h2>
                <p className='mb-0'>of our members are Youth</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
  )
}

export default Numbers
