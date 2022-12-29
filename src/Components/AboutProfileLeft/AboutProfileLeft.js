import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import './AboutProfileLeft.css'
import InfoCard from '../InfoCard/InfoCard.jsx'
import FollowersCard from '../FollowersCard/FollowersCard';

const AboutProfileLeft = () => {
    return (
        <div className='ProfileSide'>
            <LogoSearch></LogoSearch>
            <InfoCard></InfoCard>
            <FollowersCard></FollowersCard>
            
        </div>
    );
};

export default AboutProfileLeft;