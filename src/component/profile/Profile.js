import React from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

// import react query
import { useQuery } from 'react-query';

// import api links
import { getUserInfo } from './../../api/Api';


const Profile = () => {

    const {
        data,
        isFetched
    } = useQuery("fetchProfileInfo",  getUserInfo);

    // const getStarsCount = () => {
        
    // }

    // const getRepoCount = () => {

    // }

    // const getFollowerCount = () => {

    // }

    

    console.log(data)

    return (
        <div className='profile__section'>
            {
                isFetched ?
                <>
                    <Avatar 
                        avatarImage={data.avatar_url} 
                        profileName={data.name} 
                        bio={data.bio}    
                    />
                    <Profileinfo />
                </>
                : null
            }
        </div>
    )
}

export default Profile;
