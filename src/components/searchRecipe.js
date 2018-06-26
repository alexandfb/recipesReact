import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchRecipe extends Component {
	render(){				
		let recipeList = this.props.recipes.map(obj => (
          	<Link to={`/show/${obj.id}`} key={obj.id} className="col-sm-4 mt-3" >	    			
				<div className="card bg-light ">  
					<div className="card-body">	
		    			<div className="media">
						  <img className="col-sm-4 align-self-center img-thumbnail" src={obj.url} alt="cookbook"/>
						  <div className="media-body pl-5">
						    <h5 className="mt-0">{obj.title}</h5>
						    <p>Preparation Time: {obj.tp}</p>
						    <p>Servings: {obj.sv}</p>
						  </div>
						</div>
					</div>
				</div>
			</Link>
        ));     	   

		return (
			<div>
				<h1>List of Recipes</h1>
				<div className="row">	
					{recipeList}
				</div>
			</div>
		);
	}
}

export default SearchRecipe;