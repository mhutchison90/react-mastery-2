import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        About
        <div>
            <p>I am Looking for a Job soon</p>
            <p>I am done at DevMountain Soon</p>
            <p>This is the third P tag</p>
        </div>
        <div>
            <button>Hover on this button Please</button>
            <br/>
            <br/>
            focus on this input:<input/>
            <br/>
            <br/>
           Or this one:<input/>
           <br/>
           <br/>
           <input type='number' disabled placeholder='disabled'/>
        </div>
      </div>
    );
  }
}

export default About;
