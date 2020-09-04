import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';

import HomeSplash from './HomeSplash';

library.add(fab, faGithub);

export default class Homepage extends React.Component {
  render() {
    return(<HomeSplash></HomeSplash>);
  }
}