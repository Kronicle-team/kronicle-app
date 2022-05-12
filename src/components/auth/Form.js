/***************************************************************************************
 *    Title: Upload files with Cloud Storage on Web
 *    Author: Firebase
 *    Date: 4 May 2022
 *    Availability: https://firebase.google.com/docs/storage/web/upload-files (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import Layout from "../../components/Layout";
import style from "./Form.module.css";
import React, { useEffect, useRef, useState } from "react";
import { pushData } from "../../api/authentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { storage } from "../../config/firebase";

const Form = () => {
  const [isDisplayed, setDisplay] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [fname, setFname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profile, setProfile] = useState("");
  const [avatar, setAvatar] = useState("");
  const [url, setUrl] = useState("");
  const required = [avatar, fname, phoneNum, address, aboutMe];

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      // console.log("avatar: ", avatar);
      handleUpload();
    } else {
      didMount.current = true;
    }
  }, [avatar]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`avatar/${avatar.name}`).put(avatar);
    uploadTask.on(
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("avatar")
          .child(avatar.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            // console.log(url);
          });
      }
    );
  };

  // console.log("avatar: ", avatar);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setDisplay(true);
      setProfile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setDisplay(false);
    }
  };

  const handleReset = () => {
    setDisplay(false)
   setFname("");
   setPhoneNum("");
   setAddress("");
   setAboutMe("");
   setProfile("");
   setUrl("");
  };
  let navigate = useNavigate();

  function onChangeProfilePicture(e) {
    onChangePicture(e);
    handleChange(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <Layout className={style["register-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]} onSubmit={() => handleSubmit}>
          <h1 className={[style["h1"], style["extra-info"]].join(" ")}>
            Tell us more about yourself
          </h1>

          <div className={style["imgUpload-section"]}>
            <div className={style["file-input"]}>
              {isDisplayed ? (
                <div className={style["previewImage"]}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img className={style["profileImage"]} src={imageData} />
                  <label htmlFor={"profileImageUpload"}>
                    <FontAwesomeIcon
                      icon={faCamera}
                      className={style["upload-icon-display"]}
                    />
                  </label>
                </div>
              ) : (
                <label htmlFor={"profileImageUpload"}>
                  <FontAwesomeIcon
                    icon={faCamera}
                    className={style["upload-icon"]}
                  />
                </label>
              )}
            </div>

            <label htmlFor={"profileImageUpload"} className={style["label"]}>
              Upload Profile Picture
            </label>

            <input
              type="file"
              name="profileImageUpload"
              id="profileImageUpload"
              className={style["input"]}
              onChange={onChangeProfilePicture}
            />
          </div>

          <label className={style["label"]}>Full Name</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className={style["input"]}
          />

          <label className={style["label"]}>Phone Number</label>
          <input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className={style["input"]}
          />

          <label className={style["label"]}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={style["input"]}
          />
          <label className={style["label"]}>About Me</label>
          <textarea
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            className={[style["input"], style["input-aboutme"]].join(" ")}
            rows={5}
          />
        </form>
        <div className={style["button-wrapper"]}>
          <button
            className={style["register-btn"]}
            onClick={async () => {
              handleUpload();

              let allRequiredFieldsFilled = true;
              required.map((field) => {
                if (field === "") {
                  allRequiredFieldsFilled = false;
                }
              });
              if (allRequiredFieldsFilled)
                await pushData(
                  url,
                  fname,
                  phoneNum,
                  address,
                  aboutMe,
                  navigate
                );
              if (!allRequiredFieldsFilled)
                alert("Please fill in the required fields!");
            }}
          >
            SUBMIT
          </button>
          <button
            type="submit"
            className={style["clear-btn"]}
            onClick={handleReset}
          >
            CLEAR
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
