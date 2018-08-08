import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class InsertRecipeButton extends Component {
	render(){
		return(
			<div className="col-2">
				<Link to="/insert/"  className="btn btn-outline-success">Add Recipe</Link>						
			</div>
		)
	} 
}

export default InsertRecipeButton;