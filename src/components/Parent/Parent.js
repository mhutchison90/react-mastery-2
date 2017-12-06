import React, { Component } from 'react';
import './Parent.css';
import {Link} from 'react-router-dom';

class Parent extends Component {
  render() {
    return (
      <div className="Parent">
        Parent 
        <br/>
        <Link to='/parent/child'> Child </Link>

      </div>
    );
  }
}

export default Parent;
