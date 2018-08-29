import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import { connect } from 'react-redux'
import { initRecipe } from '../../actions/recipes'
import { withRouter } from 'react-router'

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
