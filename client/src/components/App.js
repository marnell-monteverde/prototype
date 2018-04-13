import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Footer from './footer';
import Content from './content';
import SeminarList from './SeminarList';
import SeminarInfo from './SeminarInfo';
import SeminarCompleteInfo from './SeminarCompleteInfo';
import Quiz from './Quiz';



class App extends Component {

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/" component={Content} />
						<Route exact path="/" render={()=><SeminarList displayPrice={true}/>} />
						<Route exact path="/mySeminars" render={()=><SeminarList displayPrice={false}/>} />
						<Route exact path="/seminarInfo" component={SeminarInfo} />
						<Route exact path="/seminarCompleteInfo" component={SeminarCompleteInfo} />
						<Route exact path="/quiz" component={Quiz} />
						<Footer />
					</div>					
				</BrowserRouter>

			</div>

			);		
	}

}

 export default App;