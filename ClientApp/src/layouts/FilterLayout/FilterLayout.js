import React from 'react'
import Header from '../../components/includes/Header'
import Footer from '../../components/includes/Footer'
import Devider from '../../components/Devider'
import FilterBar from '../../components/FilterBar';
import Pagging from '../../components/Pagging';
import FilterBlog from '../../components/FilterBlog';
function FilterLayout({ children }) {
  const childComponentName = children.type.displayName || children.type.name || 'Component';
  return (
    <>
      <Header />
      <div className='section-top'><Devider title={childComponentName} /></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>{(children.type.name === 'Shop' ? <FilterBar /> : <FilterBlog />)}</div>
          <div className='col-md-8'>
            {children}
            <div className='mt-5'>
              <Pagging startPage={1} endPage={3} itemsPerPage={4} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FilterLayout