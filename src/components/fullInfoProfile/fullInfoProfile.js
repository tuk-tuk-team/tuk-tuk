import React from 'react';

const getAge = (dateOfBirth) => {
    const currentDate = new Date();
    const difference = currentDate - new Date(dateOfBirth);
    const age = Math.floor(difference/31557600000);
    return age;
}

const FullInfo = ({firstName, lastName, occupation, roomatesPreferences, priceRange, dateOfBirth}) => {
    return (
        <div className = 'full-info'>
            <h2>Повна інформація</h2>
            <div className = 'full-info-description'>
                <div className = 'full-info-row'>
                    <h3>Ім`я:</h3>
                    <span className = 'col-sm-9 text-secondary'>{firstName}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Прізвище:</h3>
                    <span className = 'col-sm-9 text-secondary'>{lastName}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Рід занять:</h3>
                    <span className = 'col-sm-9 text-secondary'>{occupation}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Вподобання в сусідах:</h3>
                    <span className = 'col-sm-9 text-secondary'>{roomatesPreferences}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Цінові вподобання:</h3>
                    <span className = 'col-sm-9 text-secondary'>{priceRange}</span>
                </div>
                <div className = 'full-info-row'>
                    <h3>Вік:</h3>
                    <span className = 'col-sm-9 text-secondary'>{getAge(dateOfBirth)}</span>
                </div>
            </div>
        </div>
    );
}

export default FullInfo;