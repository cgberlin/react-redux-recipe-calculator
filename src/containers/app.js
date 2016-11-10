import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'


var App = function(props) {
    return (
      <div>
          <div>
            <h1>Recipe Maker</h1>
          </div>
          <div>
              {props.children}
          </div>
      </div>
    );
  };
 export default App;
