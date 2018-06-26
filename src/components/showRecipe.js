import React, {Component} from 'react'
import RecipesApi from '../recipesApi'

class ShowRecipe extends Component {
	render(){	
		const recipe = RecipesApi.get(this.props.match.params.id);
		
		if (!recipe) {
		    return <div>Sorry, but the recipe was not found</div>
		}

		const ingredientList = recipe.ingredients.map(obj => (
			<li key={obj.name} className="list-group-item"><b>{obj.name}</b>, {obj.amount} {obj.unit}</li>
			));

		return (			
			<div className="row">
				<div className="col-md-8 offset-md-2 text-center d-print-none">
					<button className="col-md-2 offset-md-1 btn btn-primary" type="button">Edit Recipe</button>
					<button className="col-md-2 offset-md-2 btn btn-danger" type="button">Delete Recipe</button>
					<button className="col-md-2 offset-md-2 btn btn-info" onClick={window.print} type="button">Print Recipe</button>
				</div>
				<div className="col-md-8 offset-md-2">
					<div className="card mt-4">
						<div className="card-header text-center">{recipe.title}</div>						
						<div className="card-body">
							<div className="media">
					  			<div className="media-body pl-5 row">
					  				<img className="col-md-2 offset-md-2 align-self-center img-thumbnail" src={recipe.url} alt="cookbook"/>
									<div className="col-md-4 offset-md-2">
										<p className="card-text"><b>Servings</b><br/> {recipe.sv}</p>
										<p className="card-text"><b>Time to Prepare</b><br/>{recipe.tp}</p>											
									</div>						  				
					 			</div>
					 		</div>
					 		<hr/>
							<p className="text-center">Ingredients</p>
							<ul className="list-group list-group-flush">
						    	{ingredientList}
						  	</ul>
							<hr/>
							<p className="text-center">Instructions</p>
							<p>{recipe.instructions}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default ShowRecipe;
