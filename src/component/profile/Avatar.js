import React from 'react';

// import css file
import "./Avatar.css";

const Avatar = ({ avatarImage, profileName, bio }) => {
    return (
        <div className="avatar">
            <div className='avatar__section'>
                <div className='avatar__image'>
                    <img src={avatarImage} alt="avatar" />
                </div>
                <div className='avatar-name'>
                    {profileName}
                </div>
            </div>
            <div className='avatar-aboutus'>
                {bio}
            </div>
        </div>
    );
}

export default Avatar;
