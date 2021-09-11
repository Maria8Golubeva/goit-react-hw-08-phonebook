import { useSelector } from "react-redux";
import { getLoggedIn } from "redux/authorization/authorization-selectors";

import AuthNavigation from "Components/AuthNavigation";
import Profile from "Components/Profile";

import { Nav, Navbar, Container } from 'react-bootstrap';

function AppBar() {
    const isLogged = useSelector(getLoggedIn);

    return ( 
        <Navbar >
            <Container>
                <Navbar.Brand href="/">Home page</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">

                    <Nav className="me-auto">
                        {isLogged && <Nav.Link href="contacts">Contacts</Nav.Link>}
                        {!isLogged && <AuthNavigation/>}
                    </Nav>

                    <Navbar.Text>
                    {isLogged && <Profile/>}  
                    </Navbar.Text>

                </Navbar.Collapse>  
            </Container>
        </Navbar>
    )
};

export default AppBar;