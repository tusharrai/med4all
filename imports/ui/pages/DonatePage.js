import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AddMedicine } from '../components/add-medicine.js';


export class DonatePage extends React.Component {
  
  render() {
    return <Row>
    	<Col xs= {12}>
    	<AddMedicine 
    		brand = {this.props.params.brand}
    		manufacturer = {this.props.params.manufacturer}
    		category = {this.props.params.category}
    	/>
    	</Col>
  	</Row>;
  }
}

DonatePage.propTypes = {
   params: React.PropTypes.object,
};
