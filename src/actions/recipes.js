// import axios from 'axios'
// axios is the library to handle HTTP requests: https://github.com/axios/axios
import RecipesApi from '../recipesApi';

export function getRecipes(filter) {
  return dispatch => {
    const recipes = RecipesApi.search(filter);

    dispatch({
      type: 'FETCH_RECIPES',
      payload: recipes
    })
  }
}

export function getRecipe(id) {
	 return dispatch => {
    const recipe = RecipesApi.get(id);

    dispatch({
      type: 'GET_RECIPE',
      payload: recipe
    })
  }
}
