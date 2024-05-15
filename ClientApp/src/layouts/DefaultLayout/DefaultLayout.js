import React from 'react'
import Header from '../../components/includes/Header'
import Footer from '../../components/includes/Footer'
import Devider from '../../components/Devider'
function DefaultLayout({ children }) {
  const childComponentName = children.type.displayName || children.type.name || 'Component';
  return (
    <>
      <Header />
      <div className='section-top'><Devider title={childComponentName}/></div>
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout