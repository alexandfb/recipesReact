const initialState = {
  recipes: [],
  selectedRecipe: null,
  maxIngredientId: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
  	case 'GET_RECIPE':
  		return {...state, selectedRecipe : action.payload}
    case 'FETCH_RECIPES':
      return {...state, recipes: action.payload}
    case 'DELETE_RECIPE':
      return {...state, recipes: action.payload, selectedRecipe: null}
    case 'UPDATE_FIELDS':
      return {...state, selectedRecipe : action.payload}      
    case 'SET_INGREDIENT_MAX_VALUE':
      return {...state, maxIngredientId: action.payload}      
    default:
      return state
  }
}
