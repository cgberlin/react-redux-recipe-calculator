import { combineReducers } from 'redux';
import {newRecipe, submitRecipe, SUBMIT_RECIPE, fetchByIngredients} from '../actions/index'

function rootReducer(state = {recipe : "none"}, action) {

  switch(action.type) {
    case SUBMIT_RECIPE:
      return Object.assign({}, state, {
        name : action.recipe,
        recipe : action.recipe
      });
      break;
    default:
      return state;
  }
}

combineReducers({
  rootReducer
});

export default rootReducer;
