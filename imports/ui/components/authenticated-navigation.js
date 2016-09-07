import React from 'react';
import { Link, browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import CartCount from '../containers/cart-count';
import AppBar  from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';


const handleTitleTouchTap = () => {
    browserHistory.push('/');
 }

export class AuthenticatedNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleLogout = this.handleLogout.bind(this);
    this.userName = this.userName.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose =this.handleClose.bind(this);
  }

  handleLogout() {
    Meteor.logout(() => browserHistory.push('/'));
  } 

  userName() {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose()  {

   this.setState({open: false});
 }

  render() {
    return (
    <div>
        <AppBar
          title="Med4All"
          onTitleTouchTap={handleTitleTouchTap}
          onLeftIconButtonTouchTap={this.handleToggle}

          iconElementRight={
            
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem 
                onTouchTap={this.handleLogout}
                primaryText="Log Out"
              />
            </IconMenu>
           
          }

        >
        </AppBar>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Med4All" showMenuIconButton={false}/>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/medicines" />}>Medicines</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/donate" />}>Donate</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/donations" />}>Your Donations</MenuItem>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/cart" />}>Cart<CartCount/></MenuItem>

        </Drawer>
      </div>
    )
  }
}
