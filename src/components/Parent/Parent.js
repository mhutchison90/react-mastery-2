import React, { Component } from 'react';
import './Parent.css';
import {Link} from 'react-router-dom';
import Child from './Child/Child'

class Parent extends Component {
  render() {
    return (
      <div className="Parent">
        Parent 
        <br/>
        <Link to='/parent/child'> Child </Link>

<Child/>
      </div>
    );
  }
}

export default Parent;
