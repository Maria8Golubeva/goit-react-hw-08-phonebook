//import styles from "./styles.module.css";
import { Nav } from 'react-bootstrap';

function AuthNavigation() {

    return (
        <>
            <Nav.Link href='/register'>Sign up</Nav.Link>
            <Nav.Link  href='/login'>Log in</Nav.Link>
        </>
    )
};

export default AuthNavigation;