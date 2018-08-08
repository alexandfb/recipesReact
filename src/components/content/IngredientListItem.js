import React, {Component} from 'react'

class IngredientListItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.ingredientList.name,
			amount: props.ingredientList.amount,
			unit: props.ingredientList.unit			
		}
	}

	setValue(newValue,field){		
		this.setState({ [field] : newValue});
	}

	render(){		
		const options = ["at Will","Cups","Grams"].map(function(value) {
	    return <option key={value} value={value}>{value}</option>;
	  });

	  options.unshift(
	    <option key="other" disabled> -- Select Unit -- </option>
	  );		
		return (
			<div className="form-group row" id={this.props.ingredientList.id}>		
				<div className="offset-sm-2 col-sm-4">
					<input type="text" className="form-control" onChange={(e) => this.setValue(e.target.value,"name")} id="inputIngredientName" placeholder="Name" value={this.state.name}/>
				</div>
				<div className="col-sm-2">				
					<input type="text" className="form-control" onChange={(e) => this.setValue(e.target.value,"amount")} id="inputIngredientAmount" placeholder="0" value={this.state.amount} />
				</div>
				<div className="col-sm-3">
				    <select className="form-control"  onChange={(e) => this.setValue(e.target.value,"unit")} defaultValue=" -- Select Unit -- ">{options}</select>					
				</div>
				<button type="button" onClick={(e) => this.props.onRowRemoval(this.props.index)} className="close" aria-label="Close">
					<span aria-hidden="true" className="text-danger">&times;</span>
				</button>
			</div>			
		);
	}
}

export default IngredientListItem;


