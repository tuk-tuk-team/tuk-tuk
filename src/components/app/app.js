import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import { Container } from 'reactstrap';

import Header from '../header';
import Feed from '../feed';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Container>
					<Route exact path="/posts" component={Feed} />
				</Container>
			</Router>
		);
	}
}

export default App;
