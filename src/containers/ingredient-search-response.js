import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import IngredientList from './ingredient-list'

class SearchResponse extends Component{
  render() {
    var recipe = this.props.Response;
    var title = recipe.title;
    var imageSrc = recipe.image;
    var instructions = recipe.instructions;
    console.log(recipe.extendedIngredients);
    return (
      <div>
        <h4>{title}</h4>
        <div />
        <img src = {imageSrc} />
        <div />
        {instructions}
        <div />
        <IngredientList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Response : state.recipe
  };
};

export default connect(mapStateToProps)(SearchResponse);
