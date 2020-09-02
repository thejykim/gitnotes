import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function ShellNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Of You</Navbar.Brand>
                <Navbar.Toggle aria-controls="shell-nav" />
                <Navbar.Collapse id="shell-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Explore</Nav.Link>
                    </Nav>

                    <Nav>
                        <Navbar.Text>Signed in as <a href="profile">thejykim</a></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}