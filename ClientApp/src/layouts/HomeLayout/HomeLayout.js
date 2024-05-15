import React from 'react'
import Header from '../../components/includes/Header'
import Footer from '../../components/includes/Footer'

function HomeLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default HomeLayout