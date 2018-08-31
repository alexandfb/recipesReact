import { connect } from 'react-redux'
import { initRecipe } from '../../actions/recipes'
import { withRouter } from 'react-router'
import InsertRecipePanel from './InsertRecipePanelComponent'

function mapStateToProps (state) {
  return {
    selectedRecipe: state.recipes.selectedRecipe
  }
}

function mapDispatchToProps (dispatch) {
  return {
    initRecipe: () => { dispatch(initRecipe()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InsertRecipePanel))
