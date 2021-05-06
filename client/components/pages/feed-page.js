import React, { Component } from 'react';
import './feed-page.css';
import SearchForm from '../search-form';
import PostList from '../post-list';

export default class FeedPage extends Component {
	render() {
		return (
			<div className="feed">
				<h1>Оголошення</h1>
				<SearchForm />
				<hr></hr>
				<PostList />
			</div>
		);
	}
}
