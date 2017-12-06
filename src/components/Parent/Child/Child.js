import React, { Component } from 'react';

export class Child extends Component {
    render() {
        console.log('from child: ', this.props.value)
        return (

            <div>
            <br />
                Child Component Input: <input
                    vvalue={this.props.value}
                    onChange={e => {
                        this.props.changeHandler(e.target.value)}}
                />
            </div>
        )
    }
}