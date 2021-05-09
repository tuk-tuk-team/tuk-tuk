import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './app.css';

import Header from '../header';
import {
	FeedPage,
	ProfilePage,
	PostPage,
	NewPostPage,
	Login,
	SignUpMenu,
	EditProfile,
	EditPost
} from '../pages';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		};

		this.loginUser = this.loginUser.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	loginUser(user) {
		this.setState({
			authUser: { ...user }
		});
	}

	logoutUser() {
		this.setState({ authUser: null });
	}

	render() {
		return (
			<>
				<Router>
					<Header authUser={this.state.authUser} />
					<Container>
						<Switch>
							<Route
								exact
								path="/"
								render={() => <h1 className="mt-5">Welcome to Tuk-Tuk</h1>}
							/>
							<Route
								exact
								path="/login"
								component={(props) => (
									<Login loginUser={this.loginUser} {...props} />
								)}
							/>
							<Route exact path="/posts" component={FeedPage} />
							<Route exact path="/posts/add" component={NewPostPage} />
							<Route exact path="/posts/:id" component={PostPage} />
							<Route exact path="/profile" component={ProfilePage} />
							<Route exact path="/register" component={SignUpMenu} />
							<Route exact path="/editProfile" component={EditProfile} />
							<Route exact path="/posts/:id/edit" component={EditPost} />
						</Switch>
					</Container>
				</Router>
			</>
		);
	}
}
export default App;
