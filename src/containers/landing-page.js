import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import { Router, Route, Link } from 'react-router'


var LandingContainer = function(props) {
    return (
      <div>
          <div>
            <Link to={'/random-search'}>
              <button id = "random-search-button" Link to={'/random-search'}>Random Recipe</button>
            </Link>
          </div>
          <div>
            <Link to={'/ingredient-search'}>
              <button id = "ingredient-search-button">Ingredient Search</button>
            </Link>
          </div>
      </div>
    );
  };
 export default LandingContainer;
