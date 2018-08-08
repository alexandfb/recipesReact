const initialState = {
  recipes: [],
  selectedRecipe: null,
  maxRecipeId: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
  	case 'GET_RECIPE':
  		return {...state, selectedRecipe : action.payload}
    case 'FETCH_RECIPES':
      return {...state, recipes: action.payload}
    case 'DELETE_ALL_RECIPES':
      return {...state, recipes: [], selectedRecipe: null}
    default:
      return state
  }
}
