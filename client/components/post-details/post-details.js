import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './post-details.css';

import PhotosPost from '../post-photos';
import { formatDate } from '../../modules';

const flatView = (props) => {
    const {
        title,
        description,
        district,
        location,
        ownerPhone,
        price,
        originLink,
        date,
        photos
    } = props;

    return (
        <div>
            <div className = 'post-details-info'>
                <div className="flex-wrapper">
                    <div className="user-info">
                        <div className="avatar">
                            <img src="https://via.placeholder.com/500"></img>
                        </div>
                        <Link to="/profile">
                            <span>John Week</span>
                        </Link>
                    </div>
                    <div>{formatDate(date)}</div>
                </div>
                <hr></hr>
                <div className="details">
                    <div className="title">
                        {title}
                    </div>
                    <div className="type">
                        <h4>Тип оголошення</h4>
                        <span>Пошук співмешканця</span>
                    </div>
                    <div className="description">
                        <h4>Опис</h4>
                        <span>{description}</span>
                    </div>
                    <div className = "district">
                        <h4>Район</h4>
                        <span>{district}</span>
                    </div>
                    <div className = "location">
                        <h4>Адреса</h4>
                        <span>{location}</span>
                    </div>
                    <div className = "phone-number">
                        <h4>Номер телефону власника квартири</h4>
                        <span>{ownerPhone}</span>
                    </div>
                    <div className="price">
                        <h4>Ціна</h4>
                        <span>{price} &#8372;</span>
                    </div>
                    {
                        (() => {
                            if (originLink) {
                                return (
                                    <div className="originLink">
                                        <h4>Оригінальне оголошення</h4>
                                        <a href={originLink} target="_blank">{originLink}</a>
                                    </div>
                                )
                            }
                        })()
                    }
                </div>
            </div>
            <PhotosPost photos = {photos}/>
        </div>
    );
}

const groupView = (props) => {

    const {
        title,
        description,
        date,
    } = props;

    return (
        <div>
            <div className="post-details-info">
                <div className="flex-wrapper">
                    <div className="user-info">
                        <div className="avatar">
                            <img src="https://via.placeholder.com/500"></img>
                        </div>
                        <span>John Week</span>
                    </div>
                    <div>{formatDate(date)}</div>
                </div>
                <hr></hr>
                <div className="details">
                    <div className="title">
                        {title}
                    </div>
                    <div className="type">
                        <h4>Тип оголошення</h4>
                        <span>Пошук групи</span>
                    </div>
                    <div className="description">
                        <h4>Опис</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default class PostDetails extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { type } = this.props;
        const view = type === 1 ? flatView(this.props) : groupView(this.props);
        return (
            <div className = 'post-details-container'>
                <h1>Повна інформація</h1>
                {view}
            </div>
        );
    }
}

