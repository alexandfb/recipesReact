import React, { Component } from 'react'
import RecipeForm from './RecipeForm'

class InsertRecipePanel extends Component {
	constructor(props){
		super(props);

		this.state = {
			maxvalue : 10, 
			recipe: {
	     	id:"10",
	     	title: "Crock Pot Roast",
	     	ingredients: [
          {id:"1","amount": "1","name": " beef roast","unit": "Meat"},
          {id:"2","amount": "1 package", "name": "brown gravy mix","unit": "Baking" },
          {id:"3","amount": "1 package", "name": "dried Italian salad dressing mix", "unit": "Condiments"},
          {id:"4","amount": "1 package", "name": "dry ranch dressing mix","unit": "Condiments"   },
          {id:"5","amount": "1/2 cup",   "name": "water",    "unit": "Drinks" }
      	],
      	instructions: "Place beef roast in crock pot.\n Mix the dried mixes together in a bowl and sprinkle over the roast.\n Pour the water around the roast.\n Cook on low for 7-9 hours.",
      	sv: "10 people",
      	tp: "10 minutes",
      	url:"/cookbook.gif",
	    } 
		}
	}

	render(){
		return(
			<div>
				<h1> Add Recipe</h1>
				<RecipeForm btnText="Insert Recipe" recipe={this.state.recipe} />
			</div>
		)
	}	  
}

export default InsertRecipePanel;