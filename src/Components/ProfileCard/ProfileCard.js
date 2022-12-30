import React from 'react';
import './ProfileCard.css'
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    const ProfilePage = false;
    return (
        <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>
  
        <div className="ProfileName">
          <span>Aliana frence</span>
          <span>Junior Mern developer</span>
        </div>
  
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>15</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>6,890</span>
              <span>Followers</span>
            </div>
  
            { ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {ProfilePage ? "" : <span><Link to='/about'>My Profile</Link></span>}
      </div>
    );
};

export default ProfileCard;