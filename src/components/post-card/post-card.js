import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.css';
import groupImg from './img/group.jpg';
import flatImg from './img/flat.jpg';

export default function PostCard(props) {
	const { type } = props;
	if (type === 'flat') {
		return FlatView(props);
	} else {
		return GroupView(props);
	}
}

function FlatView(props) {
	let { title, img, price, district } = props;
	img = img ? img : flatImg;

	return (
		<Col xl={4} lg={6}>
			<li className="post-card">
				<div className="post-img">
					<img src={img}></img>
				</div>
				<div className="post-card-details">
					<Link to="/posts/4525">
						<p className="title">{title}</p>
					</Link>
					<div>
						<div className="price">
							Ціна: <span>{price} &#8372;</span>
						</div>
						<div className="district">
							Р-н <span>{district}</span>
						</div>
					</div>
					<button className="like-post liked">V</button>
				</div>
			</li>
		</Col>
	);
}

function GroupView(props) {
	const { title } = props;

	return (
		<Col xl={4} lg={6}>
			<li className="post-card group">
				<div className="post-img">
					<img src={groupImg}></img>
				</div>
				<div className="post-card-details">
					<Link to="/posts/4525">
						<p className="title">{title}</p>
					</Link>
					<button className="like-post liked">V</button>
				</div>
			</li>
		</Col>
	);
}
