import React from 'react'
import { Container } from 'reactstrap'
import NavMenu from '../components/NavMenu'

function DefaultLayout({ children }) {
  return (
    <div>
      <NavMenu />
        <Container tag="main">
            {children}
        </Container>
    </div>
  )
}

export default DefaultLayout