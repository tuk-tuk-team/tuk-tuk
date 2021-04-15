import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './app.css';

import Header from '../header';
import { FeedPage, ProfilePage, PostPage, NewPostPage, Login } from '../pages';


class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<Container>
                        <Route exact path="/" render={() => <h1 className="mt-5">Welcome to Tuk-Tuk</h1>} />
                        <Route exact path="/login" component={Login} />
						<Route exact path="/posts" component={FeedPage} />
                        <Route exact path="/posts/add" component={NewPostPage} />
						<Route exact path="/posts/1" component={PostPage} />
                        <Route exact path="/profile" component={ProfilePage} />
					</Container>
				</Router>
			</>
		);
	}
}
export default App;
