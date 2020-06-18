import React from "react";
import style from "./style.module.css";
import { Navbar, Nav } from "react-bootstrap";

const TitleBar = () => {
  return (
    <div id={style.nvv}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/">Codechef Contest Info</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Ongoing Contests</Nav.Link>
            <Nav.Link href="/future">Upcoming Contests</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TitleBar;
