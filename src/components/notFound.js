import React, {Component} from 'react'

class NotFound extends Component {
	render(){		
		return (
				<div className="alert alert-danger" role="alert">
					<b>The page that you are trying to access was not found</b>
				</div>
		);
	}
}

export default NotFound;