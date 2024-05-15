import React from 'react'
import Header from '../../components/includes/Header'
import Footer from '../../components/includes/Footer'
import Devider from '../../components/Devider';
import AdminSlideBar from '../../components/Admin/AdminSlideBar';
function AdminLayout({ children }) {
  const childComponentName = children.type.displayName || children.type.name || 'Component';

  return (
    <>
      <Header />
      <div className='section-top'><Devider title={childComponentName} /></div>
      <div className="container">
        <div className='row'>
          <div className='col-md-2'>
            <AdminSlideBar />
          </div>
          <div className='col-md-10 bg-light'>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminLayout