import React from 'react';
import './header.css';
import { Container } from 'reactstrap';

export default function Header() {
	return (
		<header className="header">
			<Container>
				<div className="header-wrapper">
					<div className="header-brand">
						<a href="#">Tuk-tuk</a>
					</div>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<a href="#">Оголошення</a>
							</li>
							<li className="nav-item">
								<a href="#">Профіль</a>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
