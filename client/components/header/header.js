import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Container } from 'reactstrap';

export default function Header() {
	return (
		<header className="header">
			<Container>
				<div className="header-wrapper">
					<div className="header-brand">
						<Link to="/">Tuk-Tuk</Link>
					</div>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="/posts">Оголошення</Link>
							</li>
							<li className="nav-item">
								<Link to="/posts/add">Нове оголошення</Link>
							</li>
							<li className="nav-item">
								<Link to="/profile">Профіль</Link>
							</li>
							<li className="nav-item">
								<Link to="/login">Увійти</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
