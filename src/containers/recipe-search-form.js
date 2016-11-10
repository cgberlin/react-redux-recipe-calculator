import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import $ from 'jquery'
var actions = require('../actions/index');

class SearchForm extends React.Component{
  TestMe(e) {
    actions.fetchByIngredients();
  }
  render() {
    return (
      <div className = "search-form-recipe">
        <h2>Please input ingredients seperated by commas</h2>
        <input id = "input-ingredient-search" type = "text"/>
        <button type = "button" onClick={this.TestMe}> submit </button>
      </div>
    );
  }
}
export default SearchForm;
