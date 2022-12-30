import React, { useContext, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { AuthContext } from "../../contexts/AuthProvider";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          >
          </ProfileModal>
        </div>
      </div>

      <div className="info">
        <span>
          <b>Name :</b>
        </span>
        <span>Aliena france</span>
      </div>

      <div className="info">
        <span>
          <b>Email :</b>
        </span>
        <span>aliena@gmail.com</span>
      </div>

      <div className="info">
        <span>
          <b>University :</b>
        </span>
        <span>Military Institute of Science and Technology</span>
      </div>
      <div className="info">
        <span>
          <b>Address :</b>
        </span>
        <span>newpark city, California</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
