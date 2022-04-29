import Layout from "../../components/Layout";
import style from "./Form.module.css";
import React, {useEffect, useRef, useState} from "react";
import { pushData } from "../../api/authentication";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera
} from "@fortawesome/free-solid-svg-icons";
import {auth, db, storage} from "../../config/firebase";
import {addDoc, collection, updateDoc} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { signUp } from "../../api/authentication";


const Form = () => {
  const [isDisplayed, setDisplay] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [avatar, setProfile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = () => {
    const uploadTask = storage.ref(`avatar/${image.name}`).put(image);
    uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
              });
        }
    );
  };

  console.log("image: ", image);

  const onChangePicture = e => {
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
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemValues: [{}]
    });
  };
  let navigate = useNavigate();


  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log("image: ", image);
      handleUpload();
    } else {
      didMount.current = true;
    }
  }, [image]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "fname") {
      setFname(e.target.value);
    } else if (e.target.name === "lname") {
      setLname(e.target.value);
    } else if (e.target.name === "phoneNum") {
      setPhoneNum(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "aboutMe") {
      setAboutMe(e.target.value);
    }
  };

  function onChangeProfilePicture(e) {
    onChangePicture(e);
    handleChange(e);
  }


  return (
    <Layout className={style["register-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]}>
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
                    <FontAwesomeIcon icon={faCamera} className={style["upload-icon-display"]} />
                  </label>
                </div>

              ) : (
                <label htmlFor={"profileImageUpload"}>

                  <FontAwesomeIcon icon={faCamera} className={style["upload-icon"]} />


                </label>
              )}
            </div>

            <label htmlFor={"profileImageUpload"} className={style["label"]}>Upload Profile Picture</label>

            <input
              type="file"
              value={avatar}
              name="profileImageUpload"
              id="profileImageUpload"
              className={style["input"]}
              onChange={onChangeProfilePicture}
            />

          </div>


          <div className={style["name-wrapper"]}>
            <div>
              <label className={style["label"]}>First Name</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={style["input"]}
              />
            </div>
            <div>
              <label className={style["label"]}>Last Name</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={style["input"]}
              />
            </div>
          </div>
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

        <div
          className={style["button-wrapper"]}
          onClick={() => {
            handleUpload();
            pushData(url, fname, lname, phoneNum, address, aboutMe, navigate).then((r) => {
              console.log(r);
            });
          }}
        >
          <button className={style["register-btn"]}>SUBMIT</button>
          <button
            type="submit"
            className={style["clear-btn"]}
            onClick={handleReset}
          >
            CLEAR
          </button>
        </div>
        ;
      </div>
    </Layout>
  )
    ;
};

export default Form;
