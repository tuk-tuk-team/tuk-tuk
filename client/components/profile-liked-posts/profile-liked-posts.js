import React, {Component} from 'react';

const LikedPosts = ({likedPosts}) => {
    return (
        <div className = 'profile-page-liked-posts'>
            <h2>Останні пости, що лайкнув користувач</h2>
            <div className = 'profile-page-liked-posts-container'>
               {likedPosts.map((post) => 
                    <div key = {post.id} className = 'profile-page-post'>
                        <h4>{post.title}</h4>
                        <a href = {'post/' + post.id.toString()}>Переглянути повну інформацію</a>
                    </div>
               )}
            </div>
        </div>
    );
}

export default LikedPosts;

