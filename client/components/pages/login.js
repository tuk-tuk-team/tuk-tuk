import React, {Component} from 'react';
import './login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'container-login-page'>
                <h2>Увійти до облікового запису</h2>
                <div className = 'login-inputs'>
                    <input placeholder = "Введіть номер телефону або email" className = "login"></input>
                    <input placeholder = "Введіть пароль" className = "password"></input>
                    <button className = "btn btn-danger">Увійти</button>
                    <a href = '/restore_password'>Забули пароль?</a>
                    <div className = 'no-acc'>
                        <span>Немає аккаунта?</span>
                        <a href = "/signup">Зареєструватися!</a>
                    </div>
                </div>
            </div>
        );
    };
};