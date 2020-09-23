import { Component } from "react";

import Container from 'react-bootstrap/Container';

import { getProjects } from '../../services/ProjectFunctions';
import { Row, Col, Button } from "react-bootstrap";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      uid: this.props.uid,
      projects: null
    }
  }

  componentDidMount() {
    getProjects(this.state.username)
      .then((proj) => {
        this.setState({
          projects: proj
        })
      })
      .catch((error) => {
        // No need to handle anything here.
      })
  }

  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        <Row className="d-flex justify-content-between">
          <Col>
            <h4>Your projects</h4>
          </Col>

          <Col style={{textAlign: 'right'}}>
            <Button variant="success" href="#">New project</Button>
          </Col>
        </Row>

        <div>
          <hr />
          <div style={{padding: '0.5rem 1rem'}}>
            <h5>Static Content {' '}
              <small className="text-muted">
                with a subtitle
              </small>
            </h5>

            <p>
              Procedurally generate this content in ProfilePage.js.
            </p>
          </div>
        </div>

        
        <div>
          <hr />
          <div style={{padding: '0.5rem 1rem'}}>
            <h5>Another Project {' '}
              <small className="text-muted">
                thejykim/nextlogin
              </small>
            </h5>

            <p>
              Optional description here?
            </p>
          </div>
        </div>
      </Container>
    );
  }
}