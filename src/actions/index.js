import fetch from 'isomorphic-fetch'
import $ from 'jquery'

const SUBMIT_RECIPE = "SUBMIT_RECIPE";
const submitRecipe = (ingredients, number) => {
  return {
    type : SUBMIT_RECIPE,
    ingredients : ingredients
  }
};

var fetchByIngredients = () => {
  console.log('fetching ingredients');
  return (dispatch) => {
    $.ajax({
      url : 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random',
      type : 'GET',
      body :  "potato,mushroom,milk,bananas",
      success : (data) => {
        console.log(data);
      },
      beforeSend: (xhr) => {
          xhr.setRequestHeader("X-Mashape-Authorization", "bZT55Qln4CmshOdE29j4CzVqdKeQp1FdEFwjsny1Sz4wwpx4gh");
          }
    });
  };
};



export {
  SUBMIT_RECIPE,
  submitRecipe,
  fetchByIngredients
}
