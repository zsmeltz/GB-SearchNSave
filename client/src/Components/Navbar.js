import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';




function NavBar() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Google Books</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link>
            </NavItem>
            <NavItem>
              <NavLink >Saved</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
};

export default NavBar;


// to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}