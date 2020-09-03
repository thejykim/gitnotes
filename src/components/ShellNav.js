import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { auth } from '../services/firebase';
import { Component } from 'react';
import { useRouter } from 'next/router';

export default class ShellNav extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      loading: true
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      this.setState({
        loggedIn: user ? true : false,
        loading: false 
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>Git<strong>Notes</strong></Navbar.Brand>
              <Navbar.Toggle aria-controls="shell-nav" />
              <Navbar.Collapse id="shell-nav" className="justify-content-between">
                <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link>Explore</Nav.Link>
                </Nav>
    
                <Nav>
                  <Navbar.Text>{ this.state.loggedIn ?
                  `Signed in as ${auth().currentUser.displayName}.` :
                  'Not signed in. <a href="login">Log in here.</a>' }</Navbar.Text>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
          { this.props.children }
        </div>
      );
    }
  }
}