import React, { Component } from 'react';

import ShortInfo from '../shortInfo/shortInfo.js';
import Social from '../social/social.js';
import FullInfo from '../fullInfo/fullInfo.js';
import Interests from '../interests/interests.js';

class Profile extends Component {
	render() {
		return (
			<div className = 'container'>
                <div className = 'firstDiv'>
                    <ShortInfo userName = 'VasylKuro1999' about = 'Файний хлопець'  rating = '9.2' avatar = 'avatar2.png'/>
				    <Social telegram = '@vasyl1999' viber = '+380956791842' whatsApp = '+380956791842' phoneNumber = '+380956791842'/>
                </div>
                <div className = 'secondDiv'>
                    <FullInfo firstName = 'Василь' lastName = 'Куропатко' occupation = 'Студент в КПІ' roomatesPreferences = 'Спокійні, доброзичливі, охайні' priceRange = '3000-5000' dateOfBirth = '1999-02-01'/>
				    <Interests interests = {[{id: 1, value: "Музика"}, {id: 2, value: "Відеоігри"}, {id: 3, value: "Серіали"}, {id: 4, value: "Зелений чай"}]}/>
                </div>
			</div>
		);
	}
}
export default Profile;