import React from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

const Profile = () => {
    return (
        <div className='profile__section'>
            <Avatar />
            <Profileinfo />
        </div>
    );
}

export default Profile;
