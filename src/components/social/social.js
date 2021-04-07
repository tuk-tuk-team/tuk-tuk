import React from 'react';

const Social = ({telegram, viber, whatsApp, phoneNumber}) => {
    return (
        <div className = 'social-info'>
            <h2>Контакти</h2>
            <div className = 'socail-rows'>
                <div className = 'social-row'>
                    <h3>Телефон:</h3>
                    <span className = 'text-secondary'>{phoneNumber}</span>
                </div>
                <div className = 'social-row'>
                    <h3>Telegram:</h3>
                    <span className = 'text-secondary'>{telegram}</span>
                </div>
                <div className = 'social-row'>
                    <h3>Viber:</h3>
                    <span className = 'text-secondary'>{viber}</span>
                </div>
                <div className = 'social-row'>
                    <h3>WhatsApp:</h3>
                    <span className = 'text-secondary'>{whatsApp}</span>
                </div>
            </div>
        </div>
    );
}

export default Social;