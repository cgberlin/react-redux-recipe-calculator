import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, Link } from 'react-router'
import MainContainer from './main-container'
import RandomContainer from './random-recipe-container'


const App = (props) => {
    return (
      <MuiThemeProvider>
        <div>
            <div>
              <h1 id = "main-title">Recipe Maker</h1>
            </div>
            <Tabs>
              <Tab label="About">
                <div>
                  <h3 className = "roboto-text"> You can use this web app to search for a <br /> random recipe, or you can <br /> input ingredients and it will try<br />
                      to find you a recipe using them.
                  </h3>
                </div>
              </Tab>
              <Tab label="Recipe Ingredient Search">
                <div>
                <MainContainer />
                </div>
              </Tab>
              <Tab label="Random Recipe" >
                <div>
                <RandomContainer />
                </div>
              </Tab>
            </Tabs>
            <div>
                {props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  };
 export default App;
