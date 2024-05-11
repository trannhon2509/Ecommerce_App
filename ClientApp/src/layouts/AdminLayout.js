import React from 'react'
import NavMenu from '../components/NavMenu'

function AdminLayout( {children} ) {
  return (
    <div>
        <NavMenu />
        <h1>Admin Layout</h1>
        {children}
    </div>
  )
}

export default AdminLayout