import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

class Header extends Component {

	componentDidMount() {
	    /* TODO: Check if okay to place in here 
	     NOTE: use for rendering Materialize CSS*/
	  var elem = document.querySelector('.sidenav');
	  var instance = M.Sidenav.init(elem);

	  var elem = document.querySelector('.dropdown-trigger');
	  var instance = M.Dropdown.init(elem);


	}

	_renderDropdownMenu() {
		return(
				<ul id="dropdown1" className="dropdown-content">
				  <li>
				  	<a href="#!"><img src="assets/maria.jpg" alt="" height="80" width="80" className="circle responsive-img"/>MyProfile</a>
				  </li>
				  <li><Link to="/">Daily News</Link></li>
				  <li className="divider"></li>
				  <li><a href="#!">Sign Out</a></li>
				</ul>			
			);
	}

	_renderNavigationMenu() {
		return([
           <li>
           		<SearchBar />
            </li>,
	        <li><Link to="/mySeminars">My Seminars</Link></li>,
	        <li><a>CPD Points <span className="new badge" data-badge-caption="points">4</span></a></li>,
	        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><img src="assets/maria.jpg" alt="" height="80" width="80" className="circle responsive-img"/>Maria</a></li>

		]);
	}


	renderContent() {


		return (
			<div>
				{this._renderDropdownMenu()}

				<nav>
		    	<div className="nav-wrapper light-blue darken-4">
		        <Link to="/" className="brand-logo">CPD</Link>
			      <Link to="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
			      <ul className="right hide-on-med-and-down">
                    {this._renderNavigationMenu()}
			      </ul>
			    </div>
			  </nav>


			  <ul className="sidenav" id="mobile-demo">
                   {this._renderNavigationMenu()}
			  </ul>
	       </div>

		);

	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>			
			);
	}

}

export default Header;