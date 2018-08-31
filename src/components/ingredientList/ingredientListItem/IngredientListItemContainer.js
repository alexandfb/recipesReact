import { connect } from 'react-redux'
import { updateIngredientItem } from '../../../actions/recipes'
import { withRouter } from 'react-router'
import IngredientListItem from './IngredientListItemComponent'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateIngredientItem: (ingredientItem) => { dispatch(updateIngredientItem(ingredientItem)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IngredientListItem))
