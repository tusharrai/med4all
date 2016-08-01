import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MedicinesList from '../containers/medicines-list.js';
import {SearchBox}from '../components/search-box.js';


export const Medicines = () => (
   <Row>
      <Col xs={ 10 } sm={ 8 } md={ 6 } xsOffset = {1} smOffset = {2} mdOffset= { 2 }>
          <h3>Find and Donate</h3>
          <SearchBox />
          <p></p>
          <MedicinesList />       
      </Col>
      
    </Row>
);