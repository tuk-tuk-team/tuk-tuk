import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PostCard from '../post-card';

export default class PostList extends Component {
	render() {
		return (
			<div className="feed-posts-block">
				<ul className="post-list">
					<Row>
						<PostCard
							type="flat"
							title="Шукаю співмешканця, будемо круто жити"
							price="5600"
							district="Шевченківський"
							img="https://via.placeholder.com/1920x1080"
						/>
						<PostCard
							type="group"
							title="Шукаю позитивну людину, разом знайдему квартиру"
						/>
						<PostCard
							type="flat"
							title="Однокомнатная квартира, давайте вместе жить"
							price="4210"
							district="Голосіївський"
							img=""
						/>
						<PostCard
							type="flat"
							title="Співмешканець в двокімнатну квартиру!"
							price="6700"
							district="Печерський"
							img="https://via.placeholder.com/2000x1050"
						/>
					</Row>
				</ul>
			</div>
		);
	}
}
