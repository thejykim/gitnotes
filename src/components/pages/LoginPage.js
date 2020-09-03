import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';

import { auth } from '../../services/firebase';

library.add(fab, faGithub);

export default class LoginPage extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h4 className="display-5">Sign in to GitNotes</h4>

        <div className="d-flex justify-content-center" style={{ textAlign: 'left', padding: '1rem 0' }}>
          <Card className="shadow-sm" style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Text>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="input" />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text className="small text-muted">Forgot your password? Too bad.</Form.Text>
                  </Form.Group>

                  <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" type="submit" className="w-100">Sign in</Button>
                  </div>
                </Form>

                <hr />

                <div style={{ textAlign: 'center' }}>
                  <Button variant="dark" className="w-100" onClick={() => {
                    let provider = new auth.GithubAuthProvider();
                    return auth().signInWithPopup(provider);
                  }}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}