import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MedicinesList from '../containers/medicines-list.js';
import { AddMedicine } from '../components/add-medicine.js';
import { MedicineSearch } from '../../api/medicines/search.js';


// export const Medicines = () => (
//   <Row>
//       <Col xs={12}>
//       <MedicinesList />
//       </Col>
//   </Row>
// );


export class Medicines extends React.Component {
  componentWillMount() {
    MedicineSearch.search('');
  }

  componentDidMount() {
  	text = this.refs.searchBar.value.trim();
  }

   handleSubmit(event) {
    event.preventDefault();
    var text = this.refs.searchBar.value.trim();
    MedicineSearch.search(text);
  }

  render() {
    return <Row>
    	<Col xs= {12}>
	    	<form onChange={this.handleSubmit.bind(this)}>
	            <div className="input-group">
	              <input className="form-control" placeholder="Search..." name="searchBar" ref="searchBar"/>
	                <span className="input-group-btn">
	                  <button className="btn btn-primary" type="button">Search</button>
	                </span>
	            </div>
	         </form>
    		<MedicinesList />
    	</Col>
  	</Row>;
  }
}