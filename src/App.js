import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Donation from './component/Donation'
import Footer from './component/Footer'
import Hedder from './component/Hedder'
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
import Thanks from "./component/Thanks"
import NavBar from './component/NavBar'

const App = () => {

  return (
    <div>
     <NavBar/>
     <Container>
     <Switch>
  
  <Route path="/"    exact component={Donation}/>
<Route path="/thanks" exact component={Thanks}  />
</Switch>
     </Container>
     
      <Footer/>
     

    </div>
  )
}

export default App