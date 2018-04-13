import React from 'react';
import './progressBar.css';

const progressBar = (percentage) => {
	return (
		<div className="progressContainer">
		  <div className="progressBar" style={{"width": percentage, "background-color": "#4CAF50"}}>{percentage}</div>
		</div>

		);

};

export default progressBar;