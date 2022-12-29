import React, { useEffect, useState } from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import PostSide from '../../Components/PostSide/PostSide';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import RideSite from '../../Components/RightSide/RideSite';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://social-media-server-gamma.vercel.app/Posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
    return (
        <div className=''>
            <div className='Home'>
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <RideSite></RideSite>
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;