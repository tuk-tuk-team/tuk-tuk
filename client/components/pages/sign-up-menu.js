import React, {Component} from 'react';
import './sign-up-menu.css';

export default class SignUpMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            gender: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            password: ''
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    handlerInput(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }

    signUp() {
        console.log(this.state);
    }

    render() {
        return(
            <div className = 'sign-up-menu'>
                <div className = 'sign-up-menu-container'>
                    <div className = 'title'>Зареєструвати аккаунт</div>
                    <hr></hr>
                    <div className = 'firstname-input'>
                        <input
                            name = "firstName"
                            placeholder = "Введіть Ваше ім`я" 
                            type = "text"
                            value = {this.state.firstName}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'lastname-input'>
                        <input 
                            name = "lastName"
                            placeholder = "Введіть Ваше прізвище" 
                            type = "text"
                            value = {this.state.lastName}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'username-input'>
                        <input
                            name = "userName"
                            placeholder = "Введіть ім`я аккаунта" 
                            type = "text"
                            value = {this.state.userName}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'choose-gender'>
						<h4>Виберіть Вашу стать</h4>
                        <div className="form-radio">
                            <input
                                type="radio"
                                id="gender-type-1"
                                name="gender"
                                value="Жіноча"
                                defaultChecked
                                onChange={this.handlerInput}
                            />
                            <label>Жіноча</label>
                        </div>
                        <div className="form-radio">
                            <input
                                type="radio"
                                id="gender-type-2"
                                name="gender"
                                value="Чоловіча"
                                onChange={this.handlerInput}
                            />
                            <label>Чоловіча</label>
                        </div>
                    </div>
                    <div className = 'email-input'>
                        <input
                            name = "email"
                            placeholder = 'Введіть Ваш Email' 
                            type = "email"
                            value = {this.state.email}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'phone-input'>
                        <input
                            name = "phone"
                            placeholder = 'Введіть Ваш номер телефону' 
                            type = "text"
                            value = {this.state.phone}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'date-of-birth-input'>
                        <input
                            name = "dateOfBirth"
                            placeholder = 'Введіть Вашу дату народження' 
                            type = "date"
                            value = {this.state.dateOfBirth}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'password-input'>
                        <input
                            name = "password"
                            placeholder = 'Введіть пароль' 
                            type = "password"
                            value = {this.state.password}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = "submit-btn">
                        <button className = "btn-primary btn" type = "reset" onClick = {this.signUp}>Зареєструватися</button>
                    </div>
                </div>
            </div>
        );
    }
}