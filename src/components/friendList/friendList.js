import React from 'react';


const FriendList = ({userId, friendList}) => {
    return (
        <div className = 'friend-list'>
            <div className = 'friend-list-menu'>
                <h2>Друзі</h2>
                <a href = {'profile/' + userId + '/friends'}>Переглянути всіх</a>
            </div>
            <div className = 'friend-list-container'>
               {friendList.map((profile) => 
                    <div key = {profile.id} className = 'friend'>
                        <a href = {'profile/' + profile.id}>
                            <img src = {'/images/' + profile.avatar}></img>
                        </a>
                        <h4>{profile.userName}</h4>
                    </div>
               )}
            </div>
        </div>
    );
}

export default FriendList;