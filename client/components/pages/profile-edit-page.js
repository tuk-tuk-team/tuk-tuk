import React, {Component} from 'react';
import './profile-edit-page.css';

export default class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            occupation: '',
            about: '',
            roommatesPreferences: '',
            priceRange: '',
            avatar: ''
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
    }

    handlerInput(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }

    finishEditing() {
        console.log(this.state);
    }

    render() {
        return(
            <div className = 'edit-profile-menu'>
                <div className = 'edit-profile-menu-container'>
                    <div className = 'edit-avatar'>
                        <h2>Виберіть аватар</h2>
                        <input
                            name = "avatar"
                            type = "file"
                            value = {this.state.avatar}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'edit-occupation'>
                        <h2>Рід занять</h2>
                        <input
                            name = "occupation"
                            placeholder = "Введіть Ваш рід занять" 
                            type = "text"
                            value = {this.state.occupation}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'edit-about-input'>
                        <h2>Про Вас</h2>
                        <input
                            name = "about"
                            placeholder = "Розкажіть дещо про себе" 
                            type = "text"
                            value = {this.state.about}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'edit-roomates-preferences-input'>
                        <h2>Вподобання в сусідах</h2>
                        <input
                            name = "rommatesPreferences"
                            placeholder = "Розкажіть про Ваші вподобання в сусідах" 
                            type = "text"
                            value = {this.state.roommatesPreferences}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = 'username-input'>
                        <h2>Цінові вподобання</h2>
                        <input
                            name = "priceRange"
                            placeholder = "Розкажіть про Ваші цінові вподобання" 
                            type = "text"
                            value = {this.state.priceRange}
                            onChange={this.handlerInput}
                        ></input>
                    </div>
                    <div className = "submit-btn">
                        <button className = "btn-primary btn" type = "reset" onClick = {this.finishEditing}>Зберегти</button>
                    </div>
                </div>
            </div>
        );
    }
}