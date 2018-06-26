import React, { Component } 	from 'react'
import {Switch, Route} 			from 'react-router-dom'
import InsertRecipe 			from './insertRecipe';
import SearchRecipe 			from './searchRecipe';
import ShowRecipe 				from './showRecipe';
import NotFound 				from './notFound';
import Home 					from './home';

class CookbookPanel extends Component{
	
	render(){
		return (
			<div className="cookbook-panel col-md-12 mt-5">
				<Switch>
					<Route exact path="/" component={Home} />
			        <Route path="/show/:id"   component={ShowRecipe}   />
			        <Route path="/search" render={() => <SearchRecipe {...this.props} />}  />
			        <Route path="/insert" component={InsertRecipe} />
			        <Route path="*" component={NotFound} />
			    </Switch>
			</div>
		)
	}
}

export default CookbookPanel;