import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'

const Ingredient = React.createClass({
  render : (props) => {
    <div className = "ingredient">
      {this.props.ingredient}
    </div>
  }
});
export default Ingredient;
