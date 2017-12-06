import React, { Component } from 'react';
import './Parent.css';
import { Link } from 'react-router-dom';
import { Child } from './Child/Child'

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''

        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    changeHandler(e) {
        this.setState({
            value: e
        })
    }
    handleValue(value){
      this.setState({
          value:value
      })  
    }

    render() {

        return (
            <div className="Parent">
                Parent
                state:{this.state.value}
                {console.log(this.state)}
        <br />
                <Link to='/parent/child'> Child </Link>

                <Child
                    changeHandler={this.changeHandler}
                    handleValue={this.handleValue}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default Parent;
