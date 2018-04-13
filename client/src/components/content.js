import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';


class Content extends Component {

	componentDidMount() {
		var elem = document.querySelector('.carousel');
  		var instance = M.Carousel.init(elem, {numVisible: 7, });
	}

	render() {

		return (
			<div>
			  <h2>Top Seminars</h2>
			  <div className="carousel">
			  	<div>
				    <Link to="/seminarInfo" className="carousel-item" href="#one!"><img src="https://robohash.org/1"/> Seminar 1</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#two!"><img src="https://robohash.org/2"/> Seminar 2</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#three!"><img src="https://robohash.org/3"/> Seminar 3</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#four!"><img src="https://robohash.org/4"/> Seminar 4</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#five!"><img src="https://robohash.org/5"/> Seminar 5</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#five!"><img src="https://robohash.org/6"/> Seminar 6</Link>
				    <Link to="/seminarInfo" className="carousel-item" href="#five!"><img src="https://robohash.org/7"/> Seminar 7</Link>
			  	</div>
			</div>
		   </div>

	      );		
	}

};

export default Content;