import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';

import { auth } from '../services/firebase';

library.add(fab, faGithub);

export default class Homepage extends React.Component {
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
    return (
      <Container>
        <Jumbotron>
          <Row className="d-flex align-items-center">
            <Col style={{ textAlign: 'center' }}>
              <h1 className="display-5">Every commit matters.</h1>
              <p className="lead">Documenting your git projects just became easy.</p>
            </Col>

            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    <h4 className="display-5">Sign up</h4>
                    <br />
                    <Form>
                      <Form.Group controlId="homeEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email." />
                        <Form.Text className="small text-muted">We'll never share your email with anyone else.</Form.Text>
                      </Form.Group>

                      <Form.Group controlId="homePassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Choose a password." />
                      </Form.Group>
                      <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Jumbotron>

        <br />

        <Card className="border-secondary" style={{ boxShadow: '0px 10px 56px -19px rgba(0,0,0,0.75)' }}>
          <Card.Body>
            <Card.Text>
              <Row style={{ padding: '2rem' }} className="d-flex align-items-center">
                <Col>
                  <h2 className="display-5">Beneficial for everyone</h2>
                  <p className="lead">When a README isn't enough.</p>
                </Col>

                <Col style={{ textAlign: 'center' }}>
                  <h5>Students</h5>
                  <p>Don't just throw your tech stack out there.</p>
                  <Button variant="outline-primary">Show, don't tell</Button>
                </Col>

                <Col style={{ textAlign: 'center' }}>
                  <h5>Organizations</h5>
                  <p>Expecting collaborators in the future?</p>
                  <Button variant="outline-primary">See how it helps</Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}