import React, { Component } from "react";
import {
    //Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import superagent from "superagent";
import Home from "./Home";

import Overview from "./files/Overview";

import "../js/loader.js";
import "../js/urlConstant.js";
import "../js/appConstants.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class Main extends Component  {

  constructor(props){
    super(props)
    this.state = {
        urlConstants: window.urlConstant,
        appConstants: window.appConstants,
        appPrefix: window.appConstants.Allow,
        contextid: window.appConstants.Allow + "-" + window.guid
    }
  }  

  componentDidMount(){
      this.getUrlConstants();
  }

  getUrlConstants(){
      const url=this.state.appConstants.SampleUrl;
      superagent
        .get(url)
        .query(null)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if(response && response.text){
                try{
                    var data = JSON.parse(response.text);

                    if(data && data.tabs){
                        this.setState({
                            urlConstants : data
                        })
                    }
                }
                catch(Exception){
                    this.setState({
                        urlConstants:  window.urlConstant
                    })
                }
            }
        })
  }


  render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Menu >                       
                            <li><NavLink  className="menu-item--small" exact to="/">Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</NavLink></li>
                            <li><NavLink  className="menu-item--small" to="/Overview">Overview</NavLink></li>
                        </Menu>
                    </div>
                    <div className="header">
                        <ul className="pad-left-60">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/Overview">Overview</NavLink></li>
                        </ul>
                    </div>
                   
                    <div className="content ">
                        <Route exact path="/" component={Home}/>
                        <Route path="/Overview" component={Overview}/>
                    </div>
                </div>
          </HashRouter>
        );
  }
}
 