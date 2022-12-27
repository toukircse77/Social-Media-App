import React from 'react';
import PostSide from '../../Components/PostSide/PostSide';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import RideSite from '../../Components/RightSide/RideSite';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <RideSite></RideSite>
        </div>
    );
};

export default Home;