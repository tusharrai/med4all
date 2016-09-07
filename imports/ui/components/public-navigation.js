import React from 'react';
import Link from 'react-router';
import { browserHistory } from 'react-router';
import AppBar  from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

const handleTitleTouchTap = () => {
    browserHistory.push('/');
 }

export class PublicNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose =this.handleClose.bind(this);
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
			        <MenuItem href="/login" primaryText="Log In"/>
			        <MenuItem href="/signup" primaryText="Sign Up"/>
			      </IconMenu>
			    }
			  />
			  <Drawer
		          docked={false}
		          width={250}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		      >
		      	  <AppBar title="Med4All" showMenuIconButton={false}/>
		          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
		          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
		      </Drawer>
       	</div>
       )
	}
}
