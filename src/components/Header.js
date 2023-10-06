import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import _ from "lodash";

const Header = () => {
    const [account, setAccount] = useState({});

    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (session) {
            setAccount(account);
        }
    }, [])


    const navigate = useNavigate();
    const handleLoginSSO = () => {
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }
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
                        <Nav.Link as={NavLink} to="/loginSSO" className='nav-link' onClick={() => handleLoginSSO()}>LOGIN SSO</Nav.Link>
                    </Nav>
                    {account && !_.isEmpty && account.isAuthenticated ? <div>luu cc</div> : <Nav >
                        <button className='btn-login' onClick={handlePressButtonLogin}>Log in</button>
                        <button className='btn-signup' onClick={handleRegister}>Sign up</button>
                    </Nav>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;