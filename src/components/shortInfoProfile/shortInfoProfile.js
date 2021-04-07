import React from 'react';
import { Button } from 'reactstrap';

const ShortInfo = ({userName, about, rating, avatar}) => {
    return (
        <div className = 'short-info d-flex flex-column align-items-center text-center'>
            <img src = {'/images/' + avatar}></img>
            <h2 className = 'username'>{userName}</h2>
            <span className = 'about'>{about}</span>
            <span className = 'rating'>Рейтинг: {rating}</span>
            <Button color = 'primary'>Додати до списку друзів</Button>
            <Button className = 'mt-2' color = 'secondary'>Редагувати профіль</Button>
        </div>
    );
}

export default ShortInfo;