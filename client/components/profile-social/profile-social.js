import React, {Component} from 'react';

export default class Social extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        const {telegram, viber, whatsApp, phoneNumber} = this.props;
        return (
            <div className = 'profile-page-social-info'>
                <h2>Контакти</h2>
                <div className = 'profile-page-socail-rows'>
                    <div className = 'profile-page-social-row'>
                        <h3>Телефон:</h3>
                        <span className = 'text-secondary'>{phoneNumber}</span>
                    </div>
                    <div className = 'profile-page-social-row'>
                        <h3>Telegram:</h3>
                        <span className = 'text-secondary'>{telegram}</span>
                    </div>
                    <div className = 'profile-page-social-row'>
                        <h3>Viber:</h3>
                        <span className = 'text-secondary'>{viber}</span>
                    </div>
                    <div className = 'profile-page-social-row'>
                        <h3>WhatsApp:</h3>
                        <span className = 'text-secondary'>{whatsApp}</span>
                    </div>
                </div>
            </div>
        );
    }
}