import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar bg="light" expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>HELLO MY FRIEND</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href='/' className='nav-link'>Home</NavLink>
                        <NavLink href='/users' className='nav-link'>Users</NavLink>
                        <NavLink href='/admin' className='nav-link'>Admin</NavLink>
                        <NavLink href='/hrefdoapp' className='nav-link'>Todoapp</NavLink>
                        <NavLink href='/otpapp' className='nav-link'>OTP APP</NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Login</NavDropdown.Item>
                            <NavDropdown.Item >Logout</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;