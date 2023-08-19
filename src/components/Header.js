import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handlePressButtonLogin = () => {
        navigate("/login");
    }
    const handleRegister = () => {
        navigate("/register")
    }
    return (
        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>HELLO MY FRIEND</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className='nav-link'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/users" className='nav-link'>Users</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin" className='nav-link'>Admin</Nav.Link>
                        <Nav.Link as={NavLink} to="/hrefdoapp" className='nav-link'>Todoapp</Nav.Link>
                        <Nav.Link as={NavLink} to="/otpapp" className='nav-link'>OTP APP</Nav.Link>
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={handlePressButtonLogin}>Log in</button>
                        <button className='btn-signup' onClick={handleRegister}>Sign up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;