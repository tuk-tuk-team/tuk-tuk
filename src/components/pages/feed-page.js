import React, { Component } from 'react';
import './feed-page.css';
import SearchForm from '../search-form';

export default class FeedPage extends Component {
	render() {
		return (
			<div className="feed">
				<h1>Оголошення</h1>
				<SearchForm />
			</div>
		);
	}
}
