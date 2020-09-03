import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';

import { auth } from '../../services/firebase';
import HomeSplash from './HomeSplash';

library.add(fab, faGithub);

export default class Homepage extends React.Component {
  render() {
    return(<HomeSplash></HomeSplash>);
  }
}