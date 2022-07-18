
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"


function NavBar() {
    return <>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="scroll"
        className='navigationBar pb-0'
        collapseOnSelect>
          <Container fluid className='navContainer'>
          <Navbar.Brand href="#home" className=''>
            <div className=''>
                  <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Lions_Clubs_International_logo.svg/200px-Lions_Clubs_International_logo.svg.png"
                      width="200"
                      height="200"
                      className="d-block align-top mx-auto"
                      alt="Lions Club of Colombo Centennial logo"             
                      />
            </div>
            <div class="d-flex justify-content-end NavbuttonGroup ">
              <div class="p-2 btn-div"><Link to='/join'><Button className="w-100" variant="primary">Join</Button></Link></div>
              <div class="p-2 btn-div"><Link to='/donate'><Button className="w-100" variant="warning">Donate</Button></Link></div>
              <div class="p-2 btn-div"><Link to='/signin'><Button className="w-100" variant="danger">Sign in</Button></Link></div>

              {/* <div class="p-2"><Button className="ml-auto" variant="primary"><Search/></Button></div> */}
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill className="mt-3 justify-content-center" >
                      <Nav.Link as={Link} to='/' eventKey="1">Home</Nav.Link>
                      <Nav.Link as={Link} to='/aboutUs' eventKey="2">About Us</Nav.Link>
                      <Nav.Link as={Link} to='/leoClub' eventKey="3">Leo Club</Nav.Link>
                      <Nav.Link as={Link} to='/lcif' eventKey="4">LCIF</Nav.Link>
                      <Nav.Link as={Link} to='/member' eventKey="5">Member</Nav.Link>
                      <Nav.Link as={Link} to='/events' eventKey="6">Events</Nav.Link>
                      <Nav.Link as={Link} to='/conference' eventKey="7">Conference</Nav.Link>
                      <Nav.Link as={Link} to='/join' className='hide-for-lg-screen' eventKey="8"><Button className='smScreenBtn' variant="primary">Join</Button></Nav.Link>
                      <Nav.Link as={Link} to='/donate' className='mb-2 hide-for-lg-screen' eventKey="9"><Button className='smScreenBtn' variant="warning">Donate</Button></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
          </Container>
    </Navbar>
    </>
}


export default NavBar;