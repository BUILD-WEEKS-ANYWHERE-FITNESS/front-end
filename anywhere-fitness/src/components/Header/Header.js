import React from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <h1>Anywhere Fitness</h1>
                    <div className="links-container">
                        <NavLink className="nav-links" to="/Landing/">Home</NavLink>
                        <NavLink className="nav-links" to="/About/">About</NavLink>
                        <button>Login/Sign Up</button>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header;