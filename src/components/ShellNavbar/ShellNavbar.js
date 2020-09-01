import React from 'react';

// Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const ShellNavbar = () => (
    <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Navbar.Brand><strong>ofYou</strong></Navbar.Brand>
        </Container>
    </Navbar>
);

ShellNavbar.propTypes = {};

ShellNavbar.defaultProps = {};

export default ShellNavbar;
