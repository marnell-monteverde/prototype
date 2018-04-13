import React, { Component } from 'react';

class Header extends Component {


	renderContent() {
		return (
			<nav className="navbar navbar-expand-lg navbar-expand-sm fixed-top navbar-light bg-light">
			  <a className="navbar-brand col-xs-2" href="#">CPD</a>
			  <form 
					className="form-inline input-group search-bar" 
					onSubmit={ this.onSearchSubmit }>
					<div className="input-group col-lg-6 col-sm-6 col-xs-6">
					  <input 
					  	type="text"
					  	ref="searchBar"
					  	placeholder="Search items"
					  	className="form-control"
					  />
					  <div className="input-group-append">
					    <button className="btn btn-outline-success" type="submit">Search</button>
					  </div>
					</div>
			  </form>

			  <button className="navbar-toggler col-xs-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item dropdown">
			        <a className="nav-link btn" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          <img className=""src="/assets/maria.jpg" alt="user_image" height="40" width="40"/>
			             Maria
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a className="dropdown-item" href="#">Daily News</a>			        
			          <a className="dropdown-item" href="#">My profile</a>
			          <a className="dropdown-item" href="#">Account Settings</a>
			          <div className="dropdown-divider"></div>
			          <a className="dropdown-item" href="#">Sign Out</a>
			        </div>
			      </li>
			      <li className="nav-item btn">
			        <a className="nav-link" href="#">My Seminars</a>
			      </li>
			      <li className="nav-item btn">
			      	<p class="navbar-text">My Points <span className="badge badge-danger">0</span></p>
			      </li>

			    </ul>
			  </div>
			</nav>		

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