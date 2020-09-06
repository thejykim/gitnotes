import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class NewProject extends Component {
  constructor() {
    super();

    this.state = {
      githubUser: null,
      githubRepo: null,
      formComplete: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('clicked');
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    }, () => {
      if (this.state.formComplete) {
        // it's okay to access length property at this point, since we know they're empty strings
        if (this.state.githubUser.length == 0 || this.state.githubRepo.length == 0) {
          this.setState({
            formComplete: false
          });
        }
      } else {
        if (this.state.githubUser && this.state.githubRepo && this.state.githubUser.length > 0 && this.state.githubRepo.length > 0) {
          this.setState({
            formComplete: true
          });
        }
      }
    });
  }

  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        <h4>Create a new project</h4>
        <p className="text-muted">You'll need an existing GitHub repository to base this project on.</p>
        <hr />

        <br />

        <h6>Repository link</h6>
        <Form inline>
          <Form.Label htmlFor="githubUser" style={{ minWidth: '18ch' }}>
            https://github.com/
          </Form.Label>
          <Form.Control name="githubUser" id="githubUser" placeholder="facebook" onChange={this.handleChange} />
          <Form.Label htmlFor="githubRepo" style={{ minWidth: '3ch' }}>
            <strong> / </strong>
          </Form.Label>
          <Form.Control name="githubRepo" id="githubRepo" placeholder="react" onChange={this.handleChange} />
        </Form>

        <br />

        <Button variant="success" disabled={!this.state.formComplete} onClick={this.handleSubmit}>Next</Button>
      </Container>
    );
  }
}