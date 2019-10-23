import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <header>
             <Navbar color="light" light expand="lg">
                    <NavbarBrand><h1>Anywhere Fitness</h1></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem className="nav-links">
                         <Link className="my-link" to="/"> <NavLink className="nav-item-style">Home</NavLink></Link>
                        </NavItem>
                        <NavItem className="nav-links">
                          <NavLink className="nav-item-style">About</NavLink>
                        </NavItem>
                        <NavItem className="nav-links">
                            <button><Link className="nav-links" to="/login/">Login/Sign Up</Link></button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                  </Navbar>
              </header>
    )
}

export default Header;
