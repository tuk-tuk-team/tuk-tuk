import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

import Header from '../header';
import { FeedPage } from '../pages';
import Profile from '../profilePage/profilePage.js';
import PostPage from '../postPage/postPage';

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<Container>
						<Route exact path="/" component={FeedPage} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/posts/1" component={PostPage} />
					</Container>
				</Router>
			</>
		);
	}
}
export default App;
