import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class MenuBar extends Component {
	constructor(props){
		super(props);

		this.state = { searchQuery: ''}
	}

	render(){
		return (
			<div className="menu-bar offset-md-2 col-md-10 d-print-none pt-3">
				<div className="row">
					<div className="col-md-10 search-bar">
						<div className="input-group">
							<input type="text" onChange={event => this.onInputChange(event.target.value)} className="form-control search" />
							<div className="input-group-append">
								<Link to="/search/"  className="btn btn-primary search-button">Search</Link>						
							</div>
						</div>
					</div>
					<div className="add-button col-md-2">
						<Link to="/insert" className="btn btn-primary block">New Recipe</Link>
					</div>
				</div>
			</div>
		);
	}

	onInputChange(term){
		this.setState({ searchQuery: term })
		this.props.onSearchTermChange(term)
	}
}

export default MenuBar;
     