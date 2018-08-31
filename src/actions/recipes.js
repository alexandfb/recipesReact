// import axios from 'axios'
// axios is the library to handle HTTP requests: https://github.com/axios/axios
import RecipesApi from '../recipesApi'

export function getRecipes (filter) {
  return dispatch => {
    const recipes = RecipesApi.search(filter)

    dispatch({
      type: 'FETCH_RECIPES',
      payload: recipes
    })
  }
}

export function getRecipe (id) {
  return dispatch => {
    const recipe = RecipesApi.get(id)

    dispatch({
      type: 'GET_RECIPE',
      payload: recipe
    })
  }
}

export function initRecipe () {
  const recipe = {
    id: '-1',
    title: '',
    ingredients: [],
    instructions: '',
    sv: '',
    tp: '',
    url: '/cookbook.gif'
  }
  return dispatch => {
    dispatch({
      type: 'GET_RECIPE',
      payload: recipe
    })
  }
}

export function deleteRecipe (id) {
  return dispatch => {
    let recipes = RecipesApi.search(null)
    recipes = recipes.filter(item => item.id !== id)
    dispatch({
      type: 'DELETE_RECIPE',
      payload: recipes
    })
  }
}

export function updateField (updatedRecipe) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_FIELDS',
      payload: updatedRecipe
    })
  }
}

export function updateIngredientList (newIngredientList) {
  return (dispatch, getState) => {
    let selectedRecipe = getState().recipes.selectedRecipe
    selectedRecipe.ingredients = newIngredientList

    dispatch({
      type: 'UPDATE_FIELDS',
      payload: selectedRecipe
    })
  }
}

export function updateIngredientItem (ingredientItem) {
  return (dispatch, getState) => {
    let selectedRecipe = getState().recipes.selectedRecipe
    const index = selectedRecipe.ingredients.indexOf(ingredientItem)
    selectedRecipe.ingredients[index] = ingredientItem

    dispatch({
      type: 'UPDATE_INGREDIENT',
      payload: selectedRecipe
    })
  }
}

export function initMaxIngredientValue () {
  const maxValue = RecipesApi.getMaxIngredientId()
  return dispatch => {
    dispatch({
      type: 'SET_INGREDIENT_MAX_VALUE',
      payload: maxValue
    })
  }
}

export function setMaxIngredientValue (maxValue) {
  return dispatch => {
    dispatch({
      type: 'SET_INGREDIENT_MAX_VALUE',
      payload: maxValue
    })
  }
}

export function submitRecipeForm (type) {
  const recipes = null
  return dispatch => {
    dispatch({
      type: 'SUBMIT_RECIPE_FORM',
      payload: recipes
    })
  } 
}
