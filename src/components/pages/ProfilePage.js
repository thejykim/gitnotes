import { Component } from "react";

import Container from 'react-bootstrap/Container';

export default class ProfilePage extends Component {
  render() {
    return (
      <Container style={{paddingTop: '2rem'}}>
        <h4>Your repositories</h4>
        <hr />
      </Container>
    );
  }
}