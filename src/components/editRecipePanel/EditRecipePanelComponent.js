import React, { Component } from 'react'
import RecipeForm from '../recipeForm/RecipeFormContainer'

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

export default EditRecipePanel
