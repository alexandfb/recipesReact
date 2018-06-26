import React, {Component} from 'react'
import InsertRecipeIngredientListItem from './insertRecipeIngredientListItem'

class InsertRecipeIngredientList extends Component {
	constructor(props){
		super(props);
		this.state = {
			ingredientList: props.ingredientList,
			maxVal:props.ingredientList.length
		}
		this.addNewIngredientRow=this.addNewIngredientRow.bind(this);
		this.removeIngredientRow=this.removeIngredientRow.bind(this);

	}


	addNewIngredientRow(){
		let ingredientList = this.state.ingredientList;
		const maxVal = this.state.maxVal;
		ingredientList.push({id:maxVal+1,"amount": "","name": "","unit": ""});
		this.setState({ingredientList: ingredientList,maxVal:maxVal+1});
		console.log(this.state.maxVal);
	}

	removeIngredientRow(row){
		console.log(row);
		let ingredientList = this.state.ingredientList;
		ingredientList.splice(row,1);

		console.log(ingredientList);
		this.setState({ingredientList: ingredientList});
	}

	render(){		

		const ingredientList = this.state.ingredientList.map((obj,index) => (			
			<InsertRecipeIngredientListItem key={obj.id} ingredientList={obj} index={index} onRowRemoval={this.removeIngredientRow} />
			));

		return (
			<div>
			<div className="row">
				<h2 className="col-md-4 offset-md-4"> Ingredients</h2> 
				<div className="col-md-4">
					<button type="button" onClick={this.addNewIngredientRow} className="btn btn-success">Add Ingredient</button>
				</div>
			</div>
			    
				{ingredientList}
			
			</div>
		);
	}
}

export default InsertRecipeIngredientList;