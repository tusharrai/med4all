import React from 'react';
import { Grid } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppNavigation from '../containers/app-navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <AppNavigation />
          
            { this.props.children }
          
        </div>
      </MuiThemeProvider>
    )
  },
});
