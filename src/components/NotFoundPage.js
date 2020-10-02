import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div>
			<h2>404!</h2>
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default NotFoundPage;