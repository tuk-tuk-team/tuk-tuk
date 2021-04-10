import React, { Component } from 'react';
import './post-page.css';

import PostDetails from '../post-details';


class PostPage extends Component {
	render() {
		return <PostDetails
            type = 'Пошук співмешканця'
            title = 'Шукаю співмешканця в однокімнатну квартиру' 
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            district = 'Печерський'
            location = 'Какая-то улица 26/45'
            ownerPhoneNumber = '+380956832123'
            price = '4000'
            date = '13 березня 2021 р.'
        />
	}
}
export default PostPage;