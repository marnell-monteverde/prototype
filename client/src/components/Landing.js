import React, { Component } from 'react';
import M from 'materialize-css';

class Landing extends Component {

	componentDidMount() {

	  var elem = document.querySelector('.slider');
	  var instance = M.Slider.init(elem, {});
		
	}

	render() {


		return (
			  <div className="slider">
			    <ul className="slides">
			      <li>
			        <img src="assets/seminar6.jpg"/>
			        <div className="caption right-align">
			          <h3>This is our big Tagline!</h3>
			          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img  src="assets/seminar5.jpg"/>
			        <div className="caption left-align">
			          <h3>Left Aligned Caption</h3>
			          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="assets/seminar3.jpg"/>
			        <div className="caption right-align black-text">
			          <h3>Right Aligned Caption</h3>
			          <h5 className="light black-text">Here's our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="https://robohash.org/4"/>
			        <div className="caption center-align">
			          <h3>This is our big Tagline!</h3>
			          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
			        </div>
			      </li>
			    </ul>
			  </div>
			      
			);

	}

}

export default Landing;