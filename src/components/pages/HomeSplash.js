import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Component } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../../services/AccountFunctions';

export default class HomeSplash extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      email: null,
      password: null
    }

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.state.email && this.state.password) {
      registerUser(this.state.username, this.state.email, this.state.password)
        .then((result) => {
          useRouter().push('/profile');
        })
        .catch((error) => {
          console.log(error);
        })
    } else {

    }

    return false;
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div style={{ padding: '4rem 0', marginBottom: '4rem', backgroundColor: '#2b3137' }}>
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="text-white" style={{ textAlign: 'center' }}>
                <h1 className="display-5">Every commit matters.</h1>
                <p className="lead">Documenting your git projects just became easy.</p>
              </Col>

              <Col>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Form onSubmit={this.handleSignup}>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="input" placeholder="Have anything witty?" onChange={this.handleChange} />
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="No spam, ever." onChange={this.handleChange} />
                        <Form.Text className="small text-muted">We'll never share your email with anyone else.</Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Secure your account." onChange={this.handleChange} />
                      </Form.Group>

                      <Button variant="primary" className="w-100" type="submit" style={{ textAlign: 'center' }} >Sign up</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Card className="border-secondary" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px 0px' }}>
            <Card.Body>
              <Row style={{ padding: '2rem' }} className="d-flex align-items-center">
                <Col>
                  <h2 className="display-5">Beneficial for everyone</h2>
                  <p className="lead">Sometimes a README isn't enough.</p>
                </Col>

                <Col style={{ textAlign: 'center' }}>
                  <h5>Students</h5>
                  <p>Don't just list off your tech stack on GitHub.</p>
                  <Button variant="outline-primary">Show, don't tell</Button>
                </Col>

                <Col style={{ textAlign: 'center' }}>
                  <h5>Organizations</h5>
                  <p>Expecting collaborators in the future?</p>
                  <Button variant="outline-primary">See how it helps</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}