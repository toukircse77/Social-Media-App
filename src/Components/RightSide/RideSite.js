import React, { useState } from 'react';
import './RightSide.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';
import { UilScenery } from "@iconscout/react-unicons";


const RideSite = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="RightSide">
        <div className="navIcons">
          <Link to='/home'><img className='w-6 h-6 flex flex-col items-center justify-center' src={Home} alt="" /> </Link>
          
          <Link className='bg-orange-500 w-6 h-6 text-white' to='media'><span><UilScenery/></span></Link> 
          <Link className=' w-6 h-6 text-white' to='about' >
          <svg
                        className='w-6 h-6 mx-1 text-orange-400'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                          fill='currentColor'
                        ></path>
                      </svg>
          </Link>
          <img src={Comment} alt="" />
        </div>
  
        <TrendCard />
  
        <button className="button r-button" onClick={() => setModalOpened(true)}>
          <ShareModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}

          >
          </ShareModal>
          Share
        </button>
        
      </div>
    );
};

export default RideSite;