import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class ShortInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {userName, about, rating, avatar} = this.props;
        return (
            <div className = 'profile-page-short-info d-flex flex-column align-items-center text-center'>
                <img src = {'/images/' + avatar}></img>
                <h2 className = 'profile-page-username'>{userName}</h2>
                <span className = 'profile-page-about'>{about}</span>
                <span className = 'profile-page-rating'>Рейтинг: {rating}</span>
                <Button color = 'primary'>Додати до списку друзів</Button>
                <a href = "/editProfile">
                    <Button className = 'mt-2' color = 'secondary'>Редагувати профіль</Button>
                </a>
            </div>
        );
    }
}