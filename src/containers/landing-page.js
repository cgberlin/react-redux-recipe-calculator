import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import { Router, Route, Link } from 'react-router'


var LandingContainer = function(props) {
    return (
      <div className = "roboto-text">
          <p>Created by Cody Berlin</p>
      </div>
    );
  };
 export default LandingContainer;
