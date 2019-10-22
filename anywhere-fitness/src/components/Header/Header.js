import React from 'react';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <h1>Anywhere Fitness</h1>
                    <div className="links-container">
                        <NavLink className="nav-links" exact to="/">Home</NavLink>
                        <NavLink className="nav-links" to="/about/">About</NavLink>
                        <button><Link className="nav-links" to="/login">Login/Sign Up</Link></button>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header;