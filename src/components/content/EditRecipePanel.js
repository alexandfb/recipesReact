import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipes'
import { withRouter } from 'react-router'

class EditRecipePanel extends Component {
  componentDidMount () {
    const recipeId = this.props.match.params.id
    this.props.getRecipe(recipeId)
  }

  render () {
    const recipe = this.props.selectedRecipe
    if (!recipe) {
      return <div>Sorry, but the recipe was not found</div>
    }

    return (
      <div>
        <h1> Edit Recipe</h1>
        <RecipeForm btnText='Edit Recipe' recipe={recipe} />
      </div>
    )
  }
}

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
