import React, {Component} from 'react'

class NotFound extends Component {
	render(){		
		return (
			<div>
				<h1 className="text-center text-danger">Oh boy :\</h1>
				<h2 className="text-center text-danger">The page that you are trying to access was not found</h2>			
			</div>
		);
	}
}

export default NotFound;