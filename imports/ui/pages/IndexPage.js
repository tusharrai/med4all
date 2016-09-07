import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Medicines For All</h2>
    <p>Bring your unused medicines to good use..</p>
    <p>
      <Link
        to="/donate">
        <RaisedButton label="Donate" primary={true}/>
         
      </Link>
    </p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Beta</p>
  </Jumbotron>
);
