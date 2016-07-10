import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, Badge } from 'react-bootstrap';
import CartCount from '../containers/cart-count';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};


export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/medicines">
        <NavItem eventKey={ 2 } href="/medicines">Medicines</NavItem>
      </LinkContainer>
      <LinkContainer to="/donate">
        <NavItem eventKey={ 3 } href="/donate">Donate</NavItem>
      </LinkContainer>
      <LinkContainer to="/donations">
        <NavItem eventKey={ 3 } href="/donations">Your Donations</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/cart">
        <NavItem eventKey={ 4 } href="/cart">Cart <CartCount></CartCount></NavItem>
      </LinkContainer>
      <NavDropdown eventKey={ 5 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 5.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
