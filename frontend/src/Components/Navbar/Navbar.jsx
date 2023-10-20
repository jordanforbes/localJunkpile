import NavButton from "./NavButton/NavButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavButton view="Art" name="Art" />
            <NavButton view="App" name="Web Development" />
            <Nav.Link href="">Link</Nav.Link>
            <NavDropdown title="Github" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/jordanforbes">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/jordanforbes/localJunkpile">
                This Repo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
