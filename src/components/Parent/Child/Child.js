import React, { Component } from 'react';

const Child = (props) => {

    return (
        <div>
            Child Component Input: 
            
            <input
                value={props.value}
                onChange={e => {
                    props.changeHandler(e.target.value)
                }}
            />
        </div>
    )
}




export default Child