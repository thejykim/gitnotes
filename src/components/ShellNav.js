import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Component } from 'react';

export default class ShellNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: !!this.props.username,
      username: this.props.username,
      uid: this.props.uid
    };
  }

  render() {
    const children = this.props.children;

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
                <Navbar.Text>
                  {this.state.loggedIn ? 'Signed in as ' : 'Not signed in. '}
                  <a href={this.state.loggedIn ? 'profile' : 'login'}>
                    {this.state.loggedIn ? this.state.username : 'Sign in here'}
                  </a>.
                  </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {
              username: this.state.username,
              uid: this.state.uid
            });
          })
        }

        <footer className="footer">
          <Container>
            <span class="text-muted">&copy; 2020 GitNotes.
            Source code available on <a href="https://github.com/thejykim/gitnotes" target="_blank">GitHub</a>.</span>
          </Container>
        </footer>
      </div>
    );
  }
}