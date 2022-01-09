import React, { memo } from 'react';

// import component
import Avatar from './Avatar';
import Profileinfo from './ProfileInfo';

// import css file
import "./Profile.css";

// import react query
import { useQuery } from 'react-query';

// import api links
import { getUserInfo, getStarsUser } from './../../api/Api';


const Profile = memo(() => {
    
    // const {
    //     data,
    //     isFetched
    // } = useQuery("fetchProfileInfo",  getUserInfo);


    const { 
        data: data_user,
        isFetched: is_fetch_user
    } = useQuery("fetchProfileInfo",  getUserInfo);
    
    const { 
        data: data_stars,
        isFetched: is_fetch_star
    } = useQuery("fetchStars",  getStarsUser);

    // console.log(data_user);
    console.log(data_stars);

    return (
        <div className='profile__section'>
            {
                is_fetch_user && is_fetch_star ?
                <>
                    <Avatar 
                        avatarImage={data_user.avatar_url} 
                        profileName={data_user.name} 
                        bio={data_user.bio}    
                    />
                    <Profileinfo 
                        starsCount={data_stars.length}
                        repoCount={data_user.public_repos}
                        fallowers={data_user.followers}
                    />
                </>
                : null
            }
        </div>
    )
})

export default Profile;
