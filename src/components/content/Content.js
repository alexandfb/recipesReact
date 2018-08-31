import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import InsertRecipePanel from '../insertRecipePanel/InsertRecipePanelContainer'
import SearchRecipePanel from '../searchRecipePanel/SearchRecipePanel'
import ShowRecipePanel from '../showRecipePanel/ShowRecipePanelContainer'
import EditRecipePanel from '../editRecipePanel/EditRecipePanelContainer'
import NotFound from '../notFound/NotFound'
import Home from '../home/Home'
import { connect } from 'react-redux'
import { getRecipes, initMaxIngredientValue } from '../../actions/recipes'
import { withRouter } from 'react-router'

class Content extends Component {
  componentDidMount () {
    this.props.getRecipes()
    this.props.initMaxIngredientValue()
  }

  render () {
    return (
      <div className='content col-12'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/show/:id' component={ShowRecipePanel} />
          <Route path='/edit/:id' component={EditRecipePanel} />
          <Route path='/search' render={() => <SearchRecipePanel {...this.props} />} />
          <Route path='/insert' component={InsertRecipePanel} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getRecipes: (filter) => { dispatch(getRecipes(filter)) },
    initMaxIngredientValue: (newValue) => { dispatch(initMaxIngredientValue(newValue)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))
