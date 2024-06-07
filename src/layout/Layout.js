import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MetaTags from './MetaTags'
import { initGA, logPageView } from '../utils/analytics'

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <>
      <MetaTags />
      <Header />
      <main id='content' role='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
