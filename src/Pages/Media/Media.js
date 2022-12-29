import React, { useState } from 'react';
import { useEffect } from 'react';
import MediaCard from './MediaCard';

const Media = () => {
    const [mediadatas, setMediadatas] = useState([]);

    useEffect(()=>{
        fetch('https://social-media-server-gamma.vercel.app/allPosts')
        .then(res => res.json())
        .then(data => setMediadatas(data))
    },[])
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                mediadatas.map(mediaData => <MediaCard mediaData={mediaData} key={mediaData._id}></MediaCard>)
            }
            
        </div>
    );
};

export default Media;