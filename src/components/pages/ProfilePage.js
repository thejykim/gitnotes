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
            <Button variant="success" href="/new">New project</Button>
          </Col>
        </Row>

        { this.state.projects ? Object.keys(this.state.projects).map((key) => {
          const project = this.state.projects[key];
          console.log(project.name);

          return(
            <div>
              <hr />
              <div style={{padding: '0.5rem 1rem'}}>
                <h5>{ project.name } {' '}
                  <small className="text-muted">
                    { project.gitUser + '/' + project.gitRepo }
                  </small>
                </h5>

                <p>
                  { project.desc }
                </p>
              </div>
            </div>
          );
        }) : <div><hr /><p>No projects found.</p></div>}
      </Container>
    );
  }
}