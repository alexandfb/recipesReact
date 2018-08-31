import { connect } from 'react-redux'
import { updateIngredientList, setMaxIngredientValue } from '../../actions/recipes'
import { withRouter } from 'react-router'
import IngredientList from './IngredientListComponent'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe,
    maxIngredientId: state.recipes.maxIngredientId
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateIngredientList: (newIngredientlist) => { dispatch(updateIngredientList(newIngredientlist)) },
    setMaxIngredientValue: (newValue) => { dispatch(setMaxIngredientValue(newValue)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IngredientList))
