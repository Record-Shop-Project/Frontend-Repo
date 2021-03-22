import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../context/myContext";
import { updateUserProfile } from "../helpers/apiCall";
import "../css/update.css";
import avatar2 from "../images/avatar2.jpg";
import avatar1 from "../images/avatar1.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";
import avatar6 from "../images/avatar6.jpg";
import avatar7 from "../images/avatar7.jpg";
import avatar8 from "../images/avatar8.jpg";
import avatar9 from "../images/avatar9.jpg";

const UpdateProfile = () => {
  const context = useContext(myContext);
  const { signup } = context;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const updateUser = await updateUserProfile(data, signup._id);

    // console.log("data", data);
  };
  return (
    <div className="profile-wrapper">
      <div className="profile-form-wrapper">
        <div className="profile-form-inner-wrapper">
          <h2>Your profile, N A M E.</h2>
          <h3>Don’t forget to click the save button Before you are gone!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="names"
              type="text"
              name="firstName"
              ref={register({ required: true })}
              placeholder="THE ACTUAL NAME"
            />
            <input
              className="names"
              type="text"
              name="lastName"
              ref={register({ required: true })}
              placeholder="ACTUAL LASTNAME"
            />
            <input
              className="long-inputs"
              type="text"
              name="email"
              ref={register({ required: true })}
              placeholder="USER EMAIL"
            />
            <input
              className="long-inputs"
              type="text"
              name="nickName"
              ref={register({ required: true })}
              placeholder="ACTUAL NICKNAME"
            />

            <button>Save</button>
          </form>
        </div>
      </div>
      <div className="profile-avatar-wrapper">
        <h2>You can also update your supa kewl profile pic.</h2>
        <h3>omg. These are so cool. tenk u Gabriel hollington</h3>
        <div className="profile-img-wrapper">
          <div className="profile-avatar-main-wrapper">
            <img className="avatar-main-img" src={avatar1} alt={avatar1} />
          </div>
          <div className="profile-avatar-rest-wrapper">
            <img className="avatar-img" src={avatar1} alt={avatar1} />
            <img className="avatar-img" src={avatar2} alt={avatar2} />
            <img className="avatar-img" src={avatar3} alt={avatar3} />
            <img className="avatar-img" src={avatar4} alt={avatar4} />
            <img className="avatar-img" src={avatar5} alt={avatar5} />
            <img className="avatar-img" src={avatar6} alt={avatar6} />
            <img className="avatar-img" src={avatar7} alt={avatar7} />
            <img className="avatar-img" src={avatar8} alt={avatar8} />
            <img className="avatar-img" src={avatar9} alt={avatar9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
