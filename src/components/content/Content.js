import React, { Component } from 'react'
import {Switch, Route} 			from 'react-router-dom'
import InsertRecipePanel 			from './InsertRecipePanel';
import SearchRecipePanel 			from './SearchRecipePanel';
import ShowRecipePanel 				from './ShowRecipePanel';
import EditRecipePanel 				from './EditRecipePanel';
import NotFound 				from './NotFound';
import Home 					from './Home';
import { connect } from 'react-redux'
import { getRecipes } from '../../actions/recipes'
import { withRouter } from 'react-router'

class Content extends Component {

	componentDidMount(){
		this.props.getRecipes();
	}

	render(){
		return(
			<div className="content col-12">
				<Switch>
					<Route exact path="/" component={Home} />
			    <Route path="/show/:id"   component={ShowRecipePanel} />
			    <Route path="/edit/:id"   component={EditRecipePanel} />
			    <Route path="/search" render={() => <SearchRecipePanel {...this.props} />} />
			    <Route path="/insert" component={InsertRecipePanel} />
			    <Route path="*" component={NotFound} />
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
    getRecipes: (filter) => { dispatch(getRecipes(filter)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));