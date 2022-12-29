import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const PostShare = () => {
 
  const HandlePost = (event) =>{
    event.preventDefault();
    const description = event.target.description.value;
    const image = event.target.myImage.files[0]
    const postImg = image.name;
    const posts = {
      image: postImg,
      description
    }
    fetch('https://social-media-server-gamma.vercel.app/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posts),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('success fully posts set Database')
                    event.target.reset()
                }
            }).catch(error => console.log(error))
  }

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
    return (
      <form 
      onSubmit={HandlePost}
      action="">
      <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" name="description" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
    </form>
    );
};

export default PostShare;