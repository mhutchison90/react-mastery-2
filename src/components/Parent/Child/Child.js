import React, { Component } from 'react';
import './Child.css';

class Child extends Component {
  render() {
    return (
      <div className="Child">
        Child
        <br/>
        <br/>
        <br/>
        This is the Child Component. It is being nested in the parent Component.
      </div>
    );
  }
}

export default Child;
