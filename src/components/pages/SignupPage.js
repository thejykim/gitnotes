import { Component } from "react";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { registerUser } from '../../services/AccountFunctions';

export default class SignupPage extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      email: null,
      password: null,
      error: null
    };

    this.handleEmailSignup = this.handleEmailSignup.bind(this);
    this.handleOtherSignup = this.handleOtherSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleEmailSignup() {
    event.preventDefault();
    event.stopPropagation();

    registerUser(this.state.username, this.state.email, this.state.password)
      .then((user) => {
        window.location.replace('/profile');
      })
      .catch((error) => {
        this.setState({ error: error.toString() })
      })

    return false;
  }

  handleOtherSignup() {
    event.preventDefault();
    event.stopPropagation();

    console.log(event);

    registerUser(this.state.username, event.submitter.name)
      .then((user) => {
        window.location.replace('/profile');
      })
      .catch((error) => {
        this.setState({ error: error.toString() })
      })

    return false;
  }

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h4 className="display-5">Create a new account</h4>

        <Container>
          <Tabs defaultActiveKey="email" variant="pills" className="justify-content-center" style={{ padding: '1rem 0' }}>
            <Tab eventKey="email" title="Email">
              <div className="d-flex justify-content-center" style={{ textAlign: 'left', paddingTop: '1rem' }}>
                <Card className="shadow-sm" style={{ width: '25rem' }}>
                  <Card.Body>
                    {this.state.error ? <Alert variant='danger'>{this.state.error}</Alert> : null}

                    <Form onSubmit={this.handleEmailSignup}>
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="input" onChange={this.handleChange} required />
                      </Form.Group>

                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="input" onChange={this.handleChange} required />
                        <Form.Text className="small text-muted">We'll never share your email with anyone.</Form.Text>
                      </Form.Group>

                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={this.handleChange} required />
                      </Form.Group>

                      <div style={{ textAlign: 'center' }}>
                        <Button variant="primary" size="lg" type="submit" className="w-100" style={{ fontSize: '14px' }}>Sign up</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Tab>

            <Tab eventKey="other" title="GitHub / Google">
              <div className="d-flex justify-content-center" style={{ textAlign: 'left', padding: '1rem 0' }}>
                <Card className="shadow-sm" style={{ width: '25rem' }}>
                  <Card.Body>
                    {this.state.error ? <Alert variant='danger'>{this.state.error}</Alert> : null}

                    <Form onSubmit={this.handleOtherSignup}>
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="input" onChange={this.handleChange} required />
                        <Form.Text className="small text-muted">Choose a username, then click a provider below.</Form.Text>
                      </Form.Group>

                      <div style={{ textAlign: 'center', paddingBottom: '0.5rem' }}>
                        <Button name="github" type="submit" variant="dark" size="lg" className="w-100" style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub</Button>
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <Button name="google" type="submit" variant="info" size="lg" className="w-100" style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Tab>
          </Tabs>

          <div className="d-flex justify-content-center" style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <Card className="shadow-sm" style={{ width: '25rem' }}>
              <Card.Body>
                Already have an account? <a href="login">Login here</a>.
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div >
    );
  }
}