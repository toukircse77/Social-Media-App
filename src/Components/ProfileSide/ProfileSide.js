import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './Profile.css'

const ProfileSide = () => {
    return (
        <div>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <FollowersCard></FollowersCard>
        </div>
    );
};

export default ProfileSide;