import React, { Component } from 'react';
import './feed.css';
import SearchForm from '../search-form';

export default class Feed extends Component {
	render() {
		return (
			<div className="feed">
				<h1>Оголошення</h1>
				<SearchForm />
			</div>
		);
	}
}
