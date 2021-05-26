import React, { Component } from 'react';
import AuthService from '../../services/auth-service';
import './sign-up-menu.css';

export default class SignUpMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				firstName: '',
				lastName: '',
				username: '',
				gender: 'f',
				email: '',
				phone: '',
				dateOfBirth: '',
				password: ''
			},
			error: null
		};
		this.handlerInput = this.handlerInput.bind(this);
		this.onRegister = this.onRegister.bind(this);
		this.authService = new AuthService();
	}

	handlerInput(event) {
		const { name, value } = event.target;
		this.setState(({ data }) => {
			data[name] = value;
		});
	}

	onRegister(e) {
		e.preventDefault();
		this.authService.register(this.state.data).then((data) => {
			if (!data.error) {
				return this.props.history.push('/login');
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
			<div className="sign-up-menu">
				<div className="sign-up-menu-container">
					<div className="title">
						<h2>Реєстрація аккаунта</h2>
					</div>
					<hr />
					<form method="POST">
						<div className="firstname-input post-input-block">
							<h4>Ім'я</h4>
							<input
								name="firstName"
								placeholder="Введіть Ваше ім`я"
								type="text"
								value={this.state.firstName}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="lastname-input post-input-block">
							<h4>Прізвище</h4>
							<input
								name="lastName"
								placeholder="Введіть Ваше прізвище"
								type="text"
								value={this.state.lastName}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="username-input post-input-block">
							<h4>Ім'я акаунта (псевдонім)</h4>
							<input
								name="username"
								placeholder="Введіть ім`я акаунта"
								type="text"
								value={this.state.username}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="choose-gender post-input-block">
							<h4>Стать</h4>
							<div className="form-radio">
								<input
									type="radio"
									id="gender-type-1"
									name="gender"
									value="f"
									onChange={this.handlerInput}
									defaultChecked
								/>
								<label htmlFor="gender-type-1">Жінка</label>
							</div>
							<div className="form-radio ">
								<input
									type="radio"
									id="gender-type-2"
									name="gender"
									value="m"
									onChange={this.handlerInput}
								/>
								<label htmlFor="gender-type-2">Чоловік</label>
							</div>
						</div>
						<div className="post-input-block">
							<h4>Email</h4>
							<input
								className="email-input"
								name="email"
								placeholder="Введіть Ваш Email"
								type="email"
								value={this.state.email}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="phone-input post-input-block">
							<h4>Номер телефону</h4>
							<input
								name="phone"
								placeholder="+380951234567"
								type="text"
								value={this.state.phone}
								onChange={this.handlerInput}
								maxLength="13"
								required
							></input>
						</div>
						<div className="post-input-block">
							<h4>Дата народження</h4>
							<input
								className="date-of-birth-input"
								name="dateOfBirth"
								placeholder="Введіть Вашу дату народження"
								type="date"
								value={this.state.dateOfBirth}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="post-input-block">
							<h4>Пароль</h4>
							<input
								className="password-input"
								name="password"
								placeholder="Введіть пароль"
								type="password"
								value={this.state.password}
								onChange={this.handlerInput}
								required
							></input>
						</div>
						<div className="submit-btn">
							<button
								className="btn-primary btn"
								type="submit"
								onClick={this.onRegister}
							>
								Зареєструватися
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
