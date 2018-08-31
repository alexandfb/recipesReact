import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchRecipePanel extends Component {
  render () {
    const recipeList = this.props.recipes.recipes.map(obj => (
      <Link to={`/show/${obj.id}`} key={obj.id} className='col-md-6 col-xs-12 mt-3 d-flex recipe-item' >
        <div className='card bg-dark '>
          <div className='card-body'>
            <div className='media row'>
              <img className='col-sm-4 col-xs-4 col-md-4 align-self-center img-thumbnail' src={obj.url} alt='cookbook' />
              <div className='media-body pl-5'>
                <h5 className='mt-0'>{obj.title}</h5>
                <p>Preparation Time: {obj.tp}</p>
                <p>Servings: {obj.sv}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))
    const list = recipeList.length
      ? recipeList
      : <div className='mt-3 col-12 text-center'>Nenhuma receita encontrada</div>

    return (
      <div className='row'>
        {list}
      </div>
    )
  }
}

export default SearchRecipePanel
