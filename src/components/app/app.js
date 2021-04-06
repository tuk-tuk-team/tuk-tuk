import React, { Component } from 'react';
import './app.css';
import { Container } from 'reactstrap';

import Header from '../header';
import Feed from '../feed';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Container>
					<Feed />
				</Container>
			</>
		);
	}
}

export default App;
