import React from 'react';


const PhotosPost = ({photos}) => {
    return (
        <div className = 'photos'>
            <h2>Фотографії</h2>
            <div className = 'photos-container'>
                {photos.map(item => 
                    <div key = {item.id} className = 'photo'>
                        <img src = {item.path}></img>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PhotosPost;