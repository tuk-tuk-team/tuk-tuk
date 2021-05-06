import React, {Component} from 'react';
import './login.css';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }

        this.handlerInput = this.handlerInput.bind(this);
        this.login = this.login.bind(this);
    }

    handlerInput(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }

    login() {
        console.log(this.state);
    }



    render() {
        return (
            <div className = 'container-login-page'>
                <h2>Увійти до облікового запису</h2>
                <div className = 'login-inputs'>
                    <input 
                        placeholder = "Введіть номер телефону або email" 
                        className = "login"
                        name = "login"
                        type = "text"
                        value = {this.state.login}
                        onChange={this.handlerInput}
                    ></input>
                    <input 
                        placeholder = "Введіть пароль" 
                        className = "password"
                        name = "password"
                        type = "password"
                        value = {this.state.password}
                        onChange={this.handlerInput}
                    ></input>
                    <button className = "btn btn-danger" type = "reset" onClick = {this.login}>Увійти</button>
                    <a href = '/restore_password'>Забули пароль?</a>
                    <div className = 'no-acc'>
                        <span>Немає аккаунта?  </span>
                        <a href = "/signup">Зареєструватися!</a>
                    </div>
                </div>
            </div>
        );
    };
};