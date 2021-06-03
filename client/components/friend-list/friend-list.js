import React, { Component } from 'react';

export default class FriendList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { userId, friendList } = this.props;
		return (
			<div className="profile-page-friend-list">
				<div className="profile-page-friend-list-menu">
					<h2>Друзі</h2>
					<a href={'profile/' + userId + '/friends'}>Переглянути всіх</a>
				</div>
				<div className="profile-page-friend-list-container">
					{friendList.map((profile) => (
						<div key={profile.id} className="profile-page-friend">
							<a href={'profile/' + profile.id}>
								<img src={'/images/' + profile.avatar}></img>
							</a>
							<h4>{profile.userName}</h4>
						</div>
					))}
				</div>
			</div>
		);
	}
}
