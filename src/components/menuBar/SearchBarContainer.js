import { connect } from 'react-redux'
import { getRecipes } from '../../actions/recipes'
import { withRouter } from 'react-router'
import SearchBar from './SearchBarComponent'

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecipes: (filter) => { dispatch(getRecipes(filter)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))
