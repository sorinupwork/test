import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

const MainNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Web Sorin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

      <GiHamburgerMenu
        style={{ margin: "0 5%", cursor: "pointer" }}
        color="white"
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link href="/echipe">Echipe</Nav.Link>
          <Nav.Link href="/jucatori">Jucatori</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default MainNavbar;
