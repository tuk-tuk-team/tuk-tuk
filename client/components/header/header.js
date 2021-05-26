import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Container } from 'reactstrap';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const links = !this.props.authUser ? (
			<li className="nav-item">
				<Link to="/login">Увійти</Link>
			</li>
		) : (
			<>
				<li className="nav-item">
					<Link to="/posts">Оголошення</Link>
				</li>
				<li className="nav-item">
					<Link to="/posts/add">Нове оголошення</Link>
				</li>
				<li className="nav-item">
					<Link to="/profile">Профіль</Link>
				</li>
			</>
		);
		return (
			<header className="header">
				<Container>
					<div className="header-wrapper">
						<div className="header-brand">
							<Link to="/">Tuk-Tuk</Link>
						</div>
						<nav className="nav">
							<ul className="nav-list">{links}</ul>
						</nav>
					</div>
				</Container>
			</header>
		);
	}
}
