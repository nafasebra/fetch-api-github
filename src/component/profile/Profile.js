import React from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

// import react query
import { useQuery } from 'react-query';

// import axios
import axios from 'axios';

// import api links
import APILinks from './../../api/Api';


const Profile = () => {

    const {data} = useQuery("fetchProfileInfo", () => 
        axios(APILinks.profile)
    );

    console.log(data);

    return (
        <div className='profile__section'>
            <Avatar 
                avatarImage={data.data.avatar_url} 
                profileName={data.data.name} 
                bio={data.data.bio}    
            />
            <Profileinfo />
        </div>
    );
}

export default Profile;
