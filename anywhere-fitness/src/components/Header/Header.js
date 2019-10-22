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
                    <NavbarBrand href="/">Anywhere Fitness</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem className="nav-links">
                         <Link to="/"> <NavLink>Home</NavLink></Link>
                        </NavItem>
                        <NavItem className="nav-links">
                          <NavLink>About</NavLink>
                        </NavItem>
                        <NavItem className="nav-links">
                            <button><Link className="nav-links" to="/login">Login/Sign Up</Link></button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                  </Navbar>
              </header>
    )
}

export default Header;
