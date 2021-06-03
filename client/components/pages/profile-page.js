import React, { Component } from 'react';
import './profile-page.css';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import ShortInfo from '../profile-short-info';
import Social from '../profile-social';
import FullInfo from '../profile-full-info';
import Interests from '../profile-interests';
import LikedPosts from '../profile-liked-posts';
import FriendList from '../friend-list';

class ProfilePage extends Component {
	render() {
		return (
			<div className="profile-container">
				<ul>
					<Row className="profile-row-container">
						<ShortInfo
							userName="VasylKuro1999"
							about="Файний хлопець"
							rating="9.2"
							avatar="avatar2.png"
						/>
						<FullInfo
							firstName="Василь"
							lastName="Куропатко"
							occupation="Студент в КПІ"
							roomatesPreferences="Спокійні, доброзичливі, охайні"
							priceRange="3000-5000"
							dateOfBirth="1999-02-01"
						/>
					</Row>
					<Row className="profile-row-container">
						<Social
							telegram="@vasyl1999"
							viber="+380956791842"
							whatsApp="+380956791842"
							phoneNumber="+380956791842"
						/>
						<Interests
							interests={[
								{ id: 1, value: 'Музика' },
								{ id: 2, value: 'Відеоігри' },
								{ id: 3, value: 'Серіали' },
								{ id: 4, value: 'Зелений чай' }
							]}
						/>
					</Row>
					<Row className="profile-row-container">
						<FriendList
							userId="aswaxc"
							friendList={[
								{ id: 'aasd', userName: 'zirael', avatar: 'avatar2.png' },
								{ id: 'efgg', userName: 'whoisthere', avatar: 'avatar2.png' },
								{
									id: 'adcaz',
									userName: 'friendofmine',
									avatar: 'avatar2.png'
								},
								{ id: 'shdv', userName: 'snowball', avatar: 'avatar2.png' },
								{ id: 'dnfia', userName: 'blackbunny', avatar: 'avatar2.png' }
							]}
						/>
						<LikedPosts
							likedPosts={[
								{ id: 1, title: 'title1' },
								{ id: 2, title: 'title2' },
								{ id: 3, title: 'title3' },
								{ id: 4, title: 'title4' },
								{ id: 5, title: 'title5' }
							]}
						/>
					</Row>
				</ul>
			</div>
		);
	}
}
export default ProfilePage;
