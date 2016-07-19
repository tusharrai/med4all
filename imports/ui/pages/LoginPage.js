import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';

export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 10 } sm={ 8 } md={ 6 } xs Offset = {1} smOffset = {2} mdOffset= { 2 }>
        <h3 className="page-header">Login</h3>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <Input
            type="email"
            label="Email Address"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Address"
          />
          <div className="form-group">
            <label htmlFor="password">
              <span className="pull-left">Password</span>
              <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
            </label>
            <input
              type="password"
              className="form-control"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <Button type="submit" bsStyle="success">Login</Button>
        </form>
      </Col>
    </Row>;
  }
}
