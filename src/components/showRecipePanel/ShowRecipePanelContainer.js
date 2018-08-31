import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getRecipe, deleteRecipe } from '../../actions/recipes'
import ShowRecipePanel from './ShowRecipePanelComponent'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecipe: (id) => { dispatch(getRecipe(id)) },
    deleteRecipe: (id) => { dispatch(deleteRecipe(id)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowRecipePanel))
