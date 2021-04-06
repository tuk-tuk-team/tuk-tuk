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
						<Link to="/">Tuk-tuk</Link>
					</div>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="/posts">Оголошення</Link>
							</li>
							<li className="nav-item">
								<Link to="/profile">Профіль</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
