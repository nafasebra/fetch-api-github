import React from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

// import react query
import { useQuery } from 'react-query';

// import api links
import { getUserInfo, getRepoInfo } from './../../api/Api';


const Profile = () => {

    const {
        data,
        isError,
        error
    } = useQuery("fetchProfileInfo",  getUserInfo);

    // const getStarsCount = () => {
        
    // }

    // const getRepoCount = () => {

    // }

    // const getFollowerCount = () => {

    // }

    

    console.log(data)

    if(isError) return <h2>Error</h2>

    return (
        <div className='profile__section'>
            <Avatar 
                // avatarImage={data.data.avatar_url} 
                // profileName={data.data.name} 
                // bio={data.data.bio}    
            />
            <Profileinfo />
        </div>
    );
}

export default Profile;
