import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import TextField from 'material-ui/TextField';
var actions = require('../actions/index');

class SearchForm extends Component{
  FetchRecipe(e) {
    let ingredients = this.refs.ingredientInput.getValue();
    console.log(ingredients);
    this.props.dispatch(actions.fetchByIngredients(ingredients));
  }
  render() {
    return (
      <div className = "search-form-recipe">
        <h3 className = "roboto-text">Please input ingredients seperated by commas</h3>
        <TextField hintText="mushrooms,chicken,tomato" ref ="ingredientInput"/>
        <button type = "button" onClick={() => this.FetchRecipe()}> submit </button>
      </div>
    );
  }
}

//You will probably need to have from the state the results of the recipe
const mapStateToProps = (state) => {
  return {
    results: state
  }
};

export default connect(mapStateToProps)(SearchForm);
