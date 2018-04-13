import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';

class SeminarCompleteInfo extends Component {

	render() {
		return (
				<div className="row" style={{"padding-left": "25px"}}>
					<div className="col s12 m12 l9">
						<h5>Seminar</h5>
						<div className="row">
							<video className="responsive-video" controls>
							    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
							</video>
						</div>
						<div className="row">
						  <div className="card">
						    <div className="card-content">
						      <span className="card-title">Resources Used:</span>
						      <a href="#"> Resources Used <i className="material-icons">file_download</i></a>
						    </div>
						  </div>
						</div>
						<div className="row">
							<Link to="/quiz" className="btn col l12">Take quiz <i className="material-icons">question_answer</i></Link>
						</div>



					</div>
					<div className="col s12 m12 l3">
					  	<h5>Q & A</h5>
						  <ul className="collection">
						    <li className="collection-item avatar">
						      <img src="https://robohash.org/10" alt="" className="circle"/>
						      <span className="title" style={{"font-size": "120%"}}><strong>Question 1</strong></span>
						      <p>What is the...</p>
						    </li>
						    <li className="collection-item avatar">
						      <img src="https://robohash.org/11" alt="" className="circle"/>
						      <span className="title" style={{"font-size": "120%"}}><strong>Question 2</strong></span>
						      <p>When is the...</p>
						    </li>
						    <li className="collection-item avatar">
						      <img src="https://robohash.org/12" alt="" className="circle"/>
						      <span className="title" style={{"font-size": "120%"}}><strong>Question 3</strong></span>
						      <p>Where is the...</p>
						    </li>
						    <li className="collection-item avatar">
						      <img src="https://robohash.org/13" alt="" className="circle"/>
						      <span className="title" style={{"font-size": "120%"}}><strong>Question 4</strong></span>
						      <p>How is the...</p>
						    </li>
						  </ul>					
					</div>
				</div>

			);
	}

}

export default SeminarCompleteInfo;