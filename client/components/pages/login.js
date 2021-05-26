import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth-service';
import './login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				email: '',
				password: ''
			},
			error: null
		};
		this.authService = new AuthService();

		this.handlerInput = this.handlerInput.bind(this);
		this.onLogin = this.onLogin.bind(this);
	}

	handlerInput(e) {
		const { name, value } = e.target;
		this.setState(({ data }) => {
			data[name] = value;
		});
	}

	onLogin(e) {
		e.preventDefault();
		this.authService.login(this.state.data).then((data) => {
			if (!data.error) {
				this.props.loginUser(data);
				return this.props.history.push('/');
			}

			this.setState({
				error: data.message
			});
		});
	}

	render() {
		if (this.state.error) {
			console.log(this.state.error);
		}

		return (
			<div className="container-login-page">
				<h2>Увійти до облікового запису</h2>
				<div className="login-inputs">
					<form method="POST">
						<input
							placeholder="Введіть email"
							className="login"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.handlerInput}
							required
						></input>
						<input
							placeholder="Введіть пароль"
							className="password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.handlerInput}
							required
						></input>
						<button
							className="btn btn-danger"
							type="submit"
							onClick={this.onLogin}
						>
							Увійти
						</button>
					</form>
					<Link to="/restore_password">Забули пароль?</Link>
					<div className="no-acc">
						<span>Немає аккаунта? </span>
						<Link to="/register">Зареєструватися!</Link>
					</div>
				</div>
			</div>
		);
	}
}
