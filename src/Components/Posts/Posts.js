import React from 'react';
import './Posts.css'
import { useState } from 'react';
import { useEffect } from 'react';
import PostCard from '../PostCard/PostCard';
import Gallery from '../Gallery/Gallery';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://social-media-server-gamma.vercel.app/Posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
    return (
        <div className='flex flex-col mx-auto'>
          
          {
            posts.map( postdata =>  <PostCard postdata={postdata} key={postdata._id}></PostCard>) 
            
            
          }
        
         
           
        </div>
    );
};

export default Posts;