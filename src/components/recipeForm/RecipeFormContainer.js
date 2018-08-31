import RecipeForm from './RecipeFormComponent'
import { connect } from 'react-redux'
import { updateField } from '../../actions/recipes'
import { withRouter } from 'react-router'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateField: (updatedRecipe) => { dispatch(updateField(updatedRecipe)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeForm))
