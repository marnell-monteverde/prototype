import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import progressBar from './progressBar';
import Payments from './Payments';

class SeminarInfo extends Component {

	render() {
		return (
		<div>
			<div className="container">
			  <div className="row">
			  	<div className="col l6 left">
					<strong style={{"font-size": "120%"}}>Seminar 1</strong>
					{' '}
				  	<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star"></span>
			  	</div>
			  	<div className="col l6 right">
			  		<Link className="btn" to="/seminarCompleteInfo">View full contents <i className="material-icons">present_to_all</i></Link>
			  		<a className="right"><Payments amount="700"/></a>			  		
			  	</div>

			  </div>
			  <div className="row">
					 <video className="responsive-video" controls>
					    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
					  </video>
			  </div>
			  <div className="row">
				  <div className="card">
				    <div className="card-content">
				      <span className="card-title">Progress:</span>
				      {progressBar("70%")}
				      <p style={{"color": "red"}}>* Quiz not yet taken</p>
				    </div>
				  </div>

			  </div>

			  <div className="row">
				  <div className="card">
				    <div className="card-content">
				      <span className="card-title">Description:</span>
				      <p>This seminar is all about.....</p>
				    </div>
				    <div className="card-content">
				      <span className="card-title">Prerequisites:</span>
				      <ul >
				        <li><div><i className="material-icons">subdirectory_arrow_right</i> Basic knowledge in Linear Algebra</div></li>
				        <li><div><i className="material-icons">subdirectory_arrow_right</i> Basic knowledge in Discrete Mathematics </div></li>
				        <li><div><i className="material-icons">subdirectory_arrow_right</i> Basic knowledge in Basic Statistics and Probability </div></li>
				      </ul>			      
				    </div>

				    <div className="card-content">
					    <div className="card horizontal brown lighten-5">
					      <div className="card-image">
					        <img src="https://robohash.org/1" height="150" width="150"/>
					      </div>
					      <div className="card-stacked">
					        <div className="card-content">
						      <span className="card-title">About the Speaker:</span>
						      <h5>Juan dela Cruz</h5>
					          <p>I am a graduate in... and has a PHD in....</p>
					        </div>
					        <div className="card-action">
					          <a href="#"><i className="material-icons">contact_mail</i> {" "} More of me </a>
					        </div>
					      </div>
					    </div>
				    </div>
				  </div>
			  </div>

			  <div className="row">
			  	<h5>Reviews </h5>
				  <ul className="collection">
				    <li className="collection-item avatar">
				      <img src="https://robohash.org/10" alt="" className="circle"/>
				      <span className="title" style={{"font-size": "120%"}}><strong>Seminar is excellent</strong></span>
				      <p>This seminar is very interactive...</p>
				      <a href="#!" className="secondary-content">
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>				      	
				      </a>
				    </li>
				    <li className="collection-item avatar">
				      <img src="https://robohash.org/11" alt="" className="circle"/>
				      <span className="title" style={{"font-size": "120%"}}><strong>Seminar is good</strong></span>
				      <p>This seminar is good. however, need to focus on the following...</p>
				      <a href="#!" className="secondary-content">
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      </a>
				    </li>
				    <li className="collection-item avatar">
				      <img src="https://robohash.org/12" alt="" className="circle"/>
				      <span className="title" style={{"font-size": "120%"}}><strong>Seminar needs some additional...</strong></span>
				      <p>Needs to add on information about the following...</p>
				      <a href="#!" className="secondary-content">
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      </a>
				    </li>
				    <li className="collection-item avatar">
				      <img src="https://robohash.org/13" alt="" className="circle"/>
				      <span className="title" style={{"font-size": "120%"}}><strong>Seminar is very good</strong></span>
				      <p>This seminar is very interactive...</p>
				      <a href="#!" className="secondary-content">
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>
				      	<i className="material-icons">grade</i>				      	
				      </a>
				    </li>
				  </ul>
              <a className="btn">Show more reviews</a>
			  </div>



			  </div>
		</div>
  		);
	}
}

export default SeminarInfo;