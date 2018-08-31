import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowRecipePanel extends Component {
  componentDidMount () {
    const recipeId = this.props.match.params.id
    this.props.getRecipe(recipeId)
  }

  deleteRecipe (recipeId) {
    this.props.deleteRecipe(recipeId)
    console.log('Deleting Recipe', recipeId)
    this.props.history.push('/Search')
  }

  render () {
    const recipe = this.props.selectedRecipe
    if (!recipe) {
      return <div>Sorry, but the recipe was not found</div>
    }

    const ingredientList = recipe.ingredients.map(obj => (
      <li key={obj.id} className='list-group-item list-group-item-dark'><b>{obj.name}</b>, {obj.amount} {obj.unit}</li>
    ))

    const recipeId = this.props.match.params.id
    return (
      <div className='row'>
        <div className='col-md-8 offset-md-2 text-center d-print-none mt-5'>
          <Link to={`/edit/${recipeId}`} key={recipeId} className='col-md-2 offset-md-1 btn btn-outline-primary' >Edit Recipe</Link>
          <button className='col-md-2 offset-md-2 btn btn-outline-danger' onClick={(e) => this.deleteRecipe(recipeId)} type='button'>Delete Recipe</button>
          <button className='col-md-2 offset-md-2 btn btn-outline-info' onClick={window.print} type='button'>Print Recipe</button>
        </div>
        <div className='col-12'>
          <div className='card bg-dark mt-4'>
            <div className='card-header text-center'>{recipe.title}</div>
            <div className='card-body'>
              <div className='media'>
                <div className='media-body pl-5 row'>
                  <img className='col-md-2 offset-md-2 align-self-center img-thumbnail' src={recipe.url} alt='cookbook' />
                  <div className='col-md-4 offset-md-2'>
                    <p className='card-text'><b>Servings</b><br /> {recipe.sv}</p>
                    <p className='card-text'><b>Time to Prepare</b><br />{recipe.tp}</p>
                  </div>
                </div>
              </div>
              <hr />
              <p className='text-center'>Ingredients</p>
              <ul className='list-group list-group-flush'>
                {ingredientList}
              </ul>
              <hr />
              <p className='text-center'>Instructions</p>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowRecipePanel
