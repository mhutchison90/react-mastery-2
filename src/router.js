import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// --IMPORTING COMPONTENTS--
import App from './App'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Parent from './components/Parent/Parent'
import {Child} from './components/Parent/Child/Child'



export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path="/parentrender" render={() => <div>RENDER THIS PLEASE</div>}/>
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/parent' component={Parent} />
        <Route  path='/parent/child' component={Child} />
        <Route  path='/testing' component={Child} />
    </Switch>
)