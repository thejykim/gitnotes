import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { auth } from '../../services/firebase';
import { usernamePasswordSignin } from '../../services/AccountFunctions';

library.add(fab, faGithub);
library.add(fab, faGoogle);

export default class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null,
      error: null
    };

    this.handleSignin = this.handleSignin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSignin(event, provider) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (provider) {
      usernamePasswordSignin(provider)
        .then((result) => {
          window.location.replace('/profile');
        })
        .catch((error) => {
          this.setState({ error: error.toString() })
        });
    } else {
      if (this.state.username && this.state.password) {
        usernamePasswordSignin(this.state.username, this.state.password)
          .then((user) => {
            window.location.replace('/profile');
          })
          .catch((error) => {
            this.setState({ error: error.toString() })
          });
      }
    }

    return false;
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h4 className="display-5">Sign in to NextLogin</h4>

        <div className="d-flex justify-content-center" style={{ textAlign: 'left', paddingTop: '1rem' }}>
          <Card className="shadow-sm" style={{ width: '25rem' }}>
            <Card.Body>
              {this.state.error ? <Alert variant='danger'>{this.state.error}</Alert> : null}
              <Form onSubmit={this.handleSignin}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" type="input" onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" onChange={this.handleChange} required />
                  <Form.Text className="small text-muted">Forgot your password? Too bad.</Form.Text>
                </Form.Group>

                <div style={{ textAlign: 'center' }}>
                  <Button variant="primary" type="submit" size="lg" className="w-100" style={{ fontSize: '14px' }}>Sign in</Button>
                </div>
              </Form>

              <hr />

              <div style={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
                <Button variant="dark" size="lg" className="w-100" style={{ fontSize: '14px' }} onClick={() => {
                  this.handleSignin(null, 'github')
                }}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub</Button>
              </div>

              <div style={{ textAlign: 'center' }}>
                <Button variant="info" size="lg" className="w-100" style={{ fontSize: '14px' }} onClick={() => {
                  this.handleSignin(null, 'google')
                }}>
                  <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-content-center" style={{ textAlign: 'center', paddingTop: '1rem' }}>
          <Card className="shadow-sm" style={{ width: '25rem' }}>
            <Card.Body>
              If you haven't signed up with us yet, <a href="signup">create an account</a>.
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}