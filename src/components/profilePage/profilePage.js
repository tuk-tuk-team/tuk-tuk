import React, { Component } from 'react';
import './profilePage.css';

import ShortInfo from '../shortInfoProfile/shortInfoProfile.js';
import Social from '../social/social.js';
import FullInfo from '../fullInfoProfile/fullInfoProfile.js';
import Interests from '../profileInterests/profileInterests.js';
import LikedPosts from '../likedPosts/likedPosts.js';
import FriendList from '../friendList/friendList.js';

class Profile extends Component {
	render() {
		return (
			<div className = 'container'>
                <div className = 'firstDiv'>
                    <ShortInfo userName = 'VasylKuro1999' about = 'Файний хлопець'  rating = '9.2' avatar = 'avatar2.png'/>
				    <Social telegram = '@vasyl1999' viber = '+380956791842' whatsApp = '+380956791842' phoneNumber = '+380956791842'/>
                    <FriendList userId = 'aswaxc' friendList = {[{id: 'aasd', userName: 'zirael', avatar: 'avatar2.png'}, {id: 'efgg', userName: 'whoisthere', avatar: 'avatar2.png'}, {id: 'adcaz', userName: 'friendofmine', avatar: 'avatar2.png'}, {id: 'shdv', userName: 'snowball', avatar: 'avatar2.png'}, {id: 'dnfia', userName: 'blackbunny', avatar: 'avatar2.png'},]}/>
                </div>
                <div className = 'secondDiv'>
                    <FullInfo firstName = 'Василь' lastName = 'Куропатко' occupation = 'Студент в КПІ' roomatesPreferences = 'Спокійні, доброзичливі, охайні' priceRange = '3000-5000' dateOfBirth = '1999-02-01'/>
				    <Interests interests = {[{id: 1, value: "Музика"}, {id: 2, value: "Відеоігри"}, {id: 3, value: "Серіали"}, {id: 4, value: "Зелений чай"}]}/>
                    <LikedPosts likedPosts = {[{id: 1, title: "title1"}, {id: 2, title: "title2"}, {id: 3, title: "title3"}, {id: 4, title: "title4"}, {id: 5, title: "title5"}]}/>
                </div>
			</div>
		);
	}
}
export default Profile;