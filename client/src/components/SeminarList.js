import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class SeminarList extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		/*TODO: Remove, get from back-end */
		const seminarListsData = [{title: "Seminar 1", description: "This is the decription of this seminar", price: 500},
								  {title: "Seminar 2", description: "This is the decription of this seminar", price: 600},
								  {title: "Seminar 3", description: "This is the decription of this seminar", price: 700},
								  {title: "Seminar 4", description: "This is the decription of this seminar", price: 900},
								  {title: "Seminar 5", description: "This is the decription of this seminar", price: 1000},
								  {title: "Seminar 6", description: "This is the decription of this seminar", price: 1200},
								  {title: "Seminar 7", description: "This is the decription of this seminar", price: 1500},
								  {title: "Seminar 8", description: "This is the decription of this seminar", price: 2000},
								  {title: "Seminar 9", description: "This is the decription of this seminar", price: 3000},
								  {title: "Seminar 10", description: "This is the decription of this seminar", price: 7000}

							  ];


		const seminarListsComponents = seminarListsData.map(({ title, description, price }, index) =>{

				const imagePath = `https://robohash.org/${index}`;

				let priceComponent = null
				if (this.props.displayPrice) {
					priceComponent = <p><Payments amount={price}/></p>;
				}

				return(
					<div className= "col s12 m12 l2">
					  <div className="card">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator responsive-img" src={imagePath} width="300" height="300"/>
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
						  <p><Link className="orange-text text-darken-2" to="/seminarInfo">Go to course <i className="material-icons">more</i></Link></p>
						  <br/>
						  {priceComponent}
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
					      <p>{description}</p>
					    </div>
					  </div>
					 </div>
				);
		});

		return (
			<div>
				<h3>All Seminars</h3>
				<div className="row">
					{seminarListsComponents}
				</div>
			</div>
			);
	}

}

export default SeminarList;