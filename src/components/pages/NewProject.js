import { Component } from "react";
import { Container } from "react-bootstrap";

export default class NewProject extends Component {
  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        <h4>Create a new project</h4>
        <p className="text-muted">You'll need an existing GitHub repository to base this project on.</p>
        <hr />
      </Container>
    );
  }
}