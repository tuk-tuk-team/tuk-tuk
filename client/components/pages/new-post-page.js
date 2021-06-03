import React, { Component } from 'react';
import './new-post-page.css';
import AddPostForm from '../add-post-form';

export default class NewPostPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="new-post">
				<h1>Нове оголошення</h1>
				<AddPostForm />
			</div>
		);
	}
}
