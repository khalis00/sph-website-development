import Hero from '@/components/landing/Hero'
import FeatureActions from '@/components/landing/FeatureActions'
import SwahilipotPillar from '@/components/landing/SwahilipotPillar'
import WorkWithUs from '@/components/landing/WorkWithUs'
import Testimonials from '@/components/landing/Testimonials'
import Partners from '@/components/landing/Partners'
import PageCTA from '@/components/landing/PageCTA'
import Numbers from '@/components/landing/Numbers'
import FAQs from '@/components/landing/FAQS'
import TwitterTimeline from '@/components/x-embed/embed'
import SpacesCard from '@/components/sphSpaces/SpacesCard'

const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureActions />
      <WorkWithUs />
      <SwahilipotPillar />
      <SpacesCard />
      <Testimonials />
      <Partners />
      <Numbers />
      <FAQs />
      <TwitterTimeline />
    </>
  )
}

export default Landing
