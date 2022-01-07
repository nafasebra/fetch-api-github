import React from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

// import react query
import {
	useQuery,
	useMutation,
	useQueryClient,
} from 'react-query';

// import api links
import APILinks from './../../api/Api';


const Profile = () => {)


    return (
        <div className='profile__section'>
            <Avatar />
            <Profileinfo />
        </div>
    );
}

export default Profile;
