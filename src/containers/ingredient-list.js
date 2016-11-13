import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import Ingredient from './ingredient'

class IngredientList extends Component{
  render() {
    var recipe = this.props.Response;
    if (!recipe.extendedIngredients) {
      return null;
    }
    return (
      <div className = "ingredient-list">
      <h4>Ingredients</h4>
      <ul>
          {recipe.extendedIngredients.map(function(ingredient) {
            return <li key={ingredient.name}>{ingredient.originalString}</li>
          })}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Response : state.recipe
  };
};

export default connect(mapStateToProps)(IngredientList);
