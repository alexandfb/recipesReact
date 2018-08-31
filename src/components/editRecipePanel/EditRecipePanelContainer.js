import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipes'
import { withRouter } from 'react-router'
import EditRecipePanel from './EditRecipePanelComponent'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecipe: (id) => { dispatch(getRecipe(id)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRecipePanel))
