import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
} from "./../../features/viewSelectorSlice/viewSelectorSlice";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const dispatch = useDispatch();
  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={toggleArt}>Art</Nav.Link>
            <Nav.Link onClick={toggleApps}>Apps</Nav.Link>
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
