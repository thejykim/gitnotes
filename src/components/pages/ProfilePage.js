import { Component } from "react";

import Container from 'react-bootstrap/Container';

import { getRepositories } from '../../services/AccountFunctions';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      uid: this.props.uid,
      repositories: null
    }
  }

  componentDidMount() {
    getRepositories(this.state.uid)
      .then((repos) => {
        this.setState({
          repositories: repos
        })
      })
      .catch((error) => {
        // No need to handle anything here.
      })
  }

  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        <h4>Your repositories</h4>

        <hr />

        <div style={{padding: '0.5rem 1rem'}}>
          <h5>gitnotes</h5>
          <p>Add intuitive documentation for your git projects.</p>
        </div>

        <hr />
        
        <div style={{padding: '0.5rem 1rem'}}>
          <h5>intellinote</h5>
          <p>Easily create original compositions with a powerful creation kit.</p>
        </div>
      </Container>
    );
  }
}