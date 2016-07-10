import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';


export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Medicines For All</h2>
    <p>Bring your unused medicines to good use..</p>
    <p>
      <Link
        to="/donate">
        <Button
          type="submit" bsStyle="success"
        >
          Donate
        </Button>
      </Link>
    </p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Beta</p>
  </Jumbotron>
);
