import { NavDropdown } from 'react-bootstrap';

export const Language = () => {
    return (
        <>
            <NavDropdown title="Language" id="basic-nav-dropdown2">
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Item >Vietnamese </NavDropdown.Item>
            </NavDropdown >
        </>
    )
}