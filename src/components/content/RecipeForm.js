import React, {Component} from 'react'
import IngredientList from './IngredientList'

class RecipeForm extends Component {	
	constructor(props){
		super(props);
		this.state = {'recipe':this.props.recipe};
		this.processEvent=this.processEvent.bind(this);
		this.setValue=this.setValue.bind(this);
	}

	processEvent(){
		console.log(this.state);
	}

	setValue(newValue,field){	
		let recipe= this.state.recipe;
		recipe[field]=newValue;
		this.setState({recipe});
	}

	render(){		
		return (
			<form>
				<div className="form-group row">
					<label htmlFor="inputRecipeName" className="col-sm-2 form-control-label">Name:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control"  onChange={(e) => this.setValue(e.target.value,"title")}  id="inputRecipeName" placeholder="Name" value={this.state.recipe.title} />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputRecipeServings" className="col-sm-2 form-control-label">Servings:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" onChange={(e) => this.setValue(e.target.value,"sv")} id="inputRecipeServings" placeholder="Servings" value={this.state.recipe.sv} />
					</div>
				</div>					
				<div className="form-group row">
					<label htmlFor="inputPreparationTime" className="col-sm-2 form-control-label">Preparation Time:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" onChange={(e) => this.setValue(e.target.value,"tp")} id="inputPreparationTime" placeholder="Preparation Time" value={this.state.recipe.tp} />
					</div>
				</div>					
				<IngredientList ingredientList={this.state.recipe.ingredients} />
				<h2>Instructions</h2>
				<div className="form-group row">						
					<div className="offset-sm-2 col-sm-9">
						<textarea rows="10" className="form-control" onChange={(e) => this.setValue(e.target.value,"instructions")}  id="inputRecipeInstructions" value={this.state.recipe.instructions}></textarea>							
					</div>
				</div>		
				<div className="form-group row">
					<div className="offset-sm-10 col-sm-2">
						<button type="button" onClick={this.processEvent}   className="btn btn-outline-primary">{this.props.btnText}</button>
					</div>
				</div>
			</form>
		);
	}
}

export default RecipeForm;