import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.css';
import groupImg from './img/group.jpg';
import flatImg from './img/flat.jpg';

export default class PostCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};

		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		this.setState(({liked}) => ({
			liked: !liked
		}));
	}

	FlatView(props, classLiked) {
		let { title, img, price, district } = props;
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
						</div>
						<button className={"like-post" + classLiked} onClick={this.onLike}>
							<i className="fas fa-heart"></i>
						</button>
					</div>
				</li>
			</Col>
		);
	}
	
	GroupView(props, classLiked) {
		const { title } = props;
	
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
						<button className={"like-post" + classLiked} onClick={this.onLike}>
							<i className="fas fa-heart"></i>
						</button>
					</div>
				</li>
			</Col>
		);
	}

	render() {
		const { type } = this.props;
		const { liked } = this.state;
		const classLiked = liked ? ' liked' : '';

		if (type === 'flat') {
			return this.FlatView(this.props, classLiked);
		} else {
			return this.GroupView(this.props, classLiked);
		}
	}
}
