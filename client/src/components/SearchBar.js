import React, { Component } from 'react';

class SearchBar extends Component {

	render() {
		return (
               <div className="center row">
                  <div className="col s12 " >
                    <div className="row" id="topbarsearch">
                      <div className="input-field col s6 s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" placeholder="search seminars" id="autocomplete-input" className="autocomplete"/>
                        </div>
                      </div>
                    </div>
                  </div>          
			);
	}
}

export default SearchBar;