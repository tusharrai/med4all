import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <MuiThemeProvider>
        { this.renderNavigation(this.props.hasUser) }
     </MuiThemeProvider>
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};
