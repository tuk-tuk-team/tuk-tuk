import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.css';
import groupImg from './img/group.jpg';
import flatImg from './img/flat.jpg';
import BtnLike from '../btn-like';

export default class PostCard extends Component {
	constructor(props) {
		super(props);
	}

	FlatView(props) {
		let { title, img, price, district, date, liked, onLike } = props;
		img = img ? img : flatImg;
	
		return (
			<Col xl={4} lg={6}>
				<li className="post-card">
					<div className="post-img">
						<img src={img}></img>
					</div>
					<div className="post-card-details">
						<Link to="/posts/1">
							<p className="title">{title}</p>
						</Link>
						<div>
							<div className="price">
								Ціна: <span>{price} &#8372;</span>
							</div>
							<div className="district">
								Р-н <span>{district}</span>
							</div>
							<div className="date">
								{date}
							</div>
						</div>
						<BtnLike onLike={onLike} liked={liked} />
					</div>
				</li>
			</Col>
		);
	}
	
	GroupView(props) {
		const { title, date, liked, onLike } = props;
	
		return (
			<Col xl={4} lg={6}>
				<li className="post-card group">
					<div className="post-img">
						<img src={groupImg}></img>
					</div>
					<div className="post-card-details">
						<Link to="/posts/1">
							<p className="title">{title}</p>
						</Link>
						<div>
							<div className="date">
								{date}
							</div>
						</div>
						<BtnLike onLike={onLike} liked={liked} />
					</div>
				</li>
			</Col>
		);
	}

	render() {
		const { type } = this.props;

		if (type === 'flat') {
			return this.FlatView(this.props);
		} else {
			return this.GroupView(this.props);
		}
	}
}
