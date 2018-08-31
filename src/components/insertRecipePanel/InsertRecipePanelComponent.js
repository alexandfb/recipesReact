import React, { Component } from 'react'
import RecipeForm from '../recipeForm/RecipeFormContainer'

class InsertRecipePanel extends Component {
  componentDidMount () {
    this.props.initRecipe()
  }

  render () {
    const recipe = this.props.selectedRecipe

    if (!recipe) {
      return <div>Sorry, but the recipe was not found</div>
    }

    return (
      <div>
        <h1> Add Recipe</h1>
        <RecipeForm btnText='Insert Recipe' recipe={recipe} />
      </div>
    )
  }
}

export default InsertRecipePanel
