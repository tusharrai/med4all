import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MedicineSearch } from '../../api/medicines/search.js';


export class SearchBox extends React.Component {
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
  	return (<Row>
  			<form onChange={this.handleSubmit.bind(this)}>
	            <div className="input-group">
	              <input className="form-control" placeholder="Search..." name="searchBar" ref="searchBar"/>
	                <span className="input-group-btn">
	                  <button className="btn btn-primary" type="button">Search</button>
	                </span>
	            </div>
			</form>
	</Row> 
	);

  }
}

