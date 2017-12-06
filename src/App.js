import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router'
import {Link} from 'react-router-dom';
import DumbComponent from './components/DumbComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        HOME!<br/>

      <Link to='/about'> About </Link>
      <Link to='/contact'> Contact </Link>
      <Link to='/parent'> Parent </Link>
      <Link to='/testing'> testing </Link>
      <Link to='/parentrender'>    Router Render </Link>
      {/* <DumbComponent/> */}
        {router}
      </div>
    );
  }
}

export default App;
