import React from 'react';
import AboutProfileLeft from '../../Components/AboutProfileLeft/AboutProfileLeft';
import PostSide from '../../Components/PostSide/PostSide';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import RideSite from '../../Components/RightSide/RideSite';
import './About.css'

const About = () => {
    return (
        <div className='Profile'>
           <AboutProfileLeft></AboutProfileLeft>
           <div className='Profile-center'>
            <ProfileCard></ProfileCard>
            <PostSide></PostSide>
           </div>
           <RideSite></RideSite>
        </div>
    );
};

export default About;