import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { updateCompanyImg } from "../../redux/auth/companyAuthSlice";
import { updateTalentImg } from "../../redux/auth/talentAuthSlice";
const defaultProfileImage = "/images/profile-pic.JPG";

const UploadFoto = () => {
  const dispatch = useDispatch();

  const { user: talentUser } = useSelector((state) => state.talentAuth);
  const { user: companyUser } = useSelector((state) => state.companyAuth);

  const user = talentUser || companyUser;
  //   let user;
  //   if (talentUser) {
  //     let user = talentUser;
  //   } else if (companyUser) {
  //     user = companyUser;
  //   }

  const { register, handleSubmit } = useForm();

  const [image, setImage] = useState(defaultProfileImage);
  const [showForm, setShowForm] = useState(false);
  console.log(image);

  useEffect(() => {
    if (user && user.profileImg) {
      setImage(user.profileImg);

      console.log(image);
    }
    // if (!user.profileImg) {
    //   setImage(defaultProfileImage);
    //   console.log(defaultProfileImage);
    //   console.log(image);
    // }
  }, [user]);

  const submitForm = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("picture", data.picture[0]);
    // formData.append("name", data.name);

    talentUser && dispatch(updateTalentImg(formData));
    companyUser && dispatch(updateCompanyImg(formData));
  };

  return (
    <>
      <div
        className="imageContainer"
        onClick={() => setShowForm((prevShowForm) => !prevShowForm)}
      >
        {(image && (
          <img
            width={400}
            // src={user.profileImg}
            src={image}
            alt="profile"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )) || <p>La imagen no está subida todavía</p>}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit(submitForm)}>
          {/* <input
          {...register("name", { required: "Recipe name is required" })}
          type="text"
          id="name"
        /> */}
          <input
            {...register("picture", { required: "Image is required" })}
            type="file"
            id="picture"
          />

          <input type="submit" />
        </form>
      )}
    </>
  );
};

export default UploadFoto;
