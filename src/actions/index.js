import fetch from 'isomorphic-fetch'

const SUBMIT_RECIPE = "SUBMIT_RECIPE";
const submitRecipe = (recipe) => {
  return {
    type : SUBMIT_RECIPE,
    recipe : recipe
  }
};

var fetchByIngredients = (param) => {
  console.log('fetching ingredients', param);
  return (dispatch) => {
    return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients='+param+'&limitLicense=false&number=1&ranking=1',{
      headers: {
        "X-Mashape-Authorization": "bZT55Qln4CmshOdE29j4CzVqdKeQp1FdEFwjsny1Sz4wwpx4gh"
      },
    }).then((response) => {
      console.log('fetch made!');
      let data = response.json();
      return data;
    }).then((data) => {
      if (data[0] == undefined){
        alert('invalid ingredients, check spelling');
      }
      else {
      let recipeId = data[0].id;
        return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+recipeId+'/information?includeNutrition=true',{
          headers: {
            "X-Mashape-Authorization": "bZT55Qln4CmshOdE29j4CzVqdKeQp1FdEFwjsny1Sz4wwpx4gh"
          },
        }).then((response) => {
          console.log('fetch made!');
          let data = response.json();
          return data;
      }).then((data) => {
        let recipe = data;
        return dispatch(
          submitRecipe(recipe)
        );
      });
    }
    });
  }
};

var fetchByRandom = () => {
  return (dispatch) => {
    return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random',{
      headers: {
        "X-Mashape-Authorization": "bZT55Qln4CmshOdE29j4CzVqdKeQp1FdEFwjsny1Sz4wwpx4gh"
      },
    }).then((response) => {
      console.log('fetch made!');
      let data = response.json();
      return data;
    }).then((data) => {
      let recipe = data.recipes[0];
      console.log(recipe);
      return dispatch(
        submitRecipe(recipe)
      );
    });
  }
};


export {
  SUBMIT_RECIPE,
  submitRecipe,
  fetchByIngredients,
  fetchByRandom
}
