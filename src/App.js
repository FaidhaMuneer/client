import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Donation from './component/Donation'
import Footer from './component/Footer'
import Hedder from './component/Hedder'

const App = () => {

  return (
    <div>
      <Hedder />
      <Container>
        <Donation />
      </Container>

      <Footer />
    </div>
  )
}

export default App