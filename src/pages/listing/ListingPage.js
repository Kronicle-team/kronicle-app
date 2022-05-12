/***************************************************************************************
 *    Title: Upload files with Cloud Storage on Web
 *    Author: Firebase
 *    Date: 6 May 2022
 *    Availability: https://firebase.google.com/docs/storage/web/upload-files (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import Layout from "../../components/Layout";
import { useEffect, useRef, useState } from "react";
import FormInput from "../../components/form/ListingForm";
import style from "./ListingPage.module.css";
import common from "../../styles/common.module.css";
import Radio from "../../components/radio/HideShowForm";
import { auth, db } from "../../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
  const [category, setCategory] = useState("album photocard");
  const [product_pricing, setProductPricing] = useState("buy now");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    product_name: "",
    product_status: "",
    product_image: "",
  });

  const required = [values.product_name, values.product_status, category, product_pricing, price, image, url];

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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

  const setCategoryFunction = (category) => {
    setCategory(category);
  };

  const setProductPricingFunction = (product_pricing) => {
    setProductPricing(product_pricing);
  };

  const setPriceFunction = (price) => {
    setPrice(price);
  };

  const didMount = useRef(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        if (didMount.current) {
          console.log("image: ", image);
          handleUpload();
        } else {
          didMount.current = true;
        }
      } else {
        navigate("/");
        alert("Please login to upload a product.");
      }
    });
    unsub();

    return () => unsub();
  }, [image]);

  if (isLoading) {
    return <div />;
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const pushProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, "listing"), {
        product_name: values.product_name,
        product_status: values.product_status,
        product_image: url,
        category: category,
        product_pricing: product_pricing,
        price: parseInt(price),
        availability: "available",
        date_time: Date().toLocaleString(),
        seller_id: auth.currentUser.uid,
      });
      console.log("Your form has been submitted!", docRef.id);
      alert("Your form has been submitted!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const inputs = [
    {
      id: 1,
      name: "product_name",
      type: "text",
      placeholder: "Please enter the product’s name",
      errorMessage: "Product name should be at least 5 characters long",
      label: "Product name*",
      pattern: ".{5,}",
      required: true,
    },
    {
      id: 2,
      name: "product_status",
      type: "textarea",
      placeholder:
        "Please describe product's status, and what users will receive more than 15 characters",
      errorMessage: "It should be a meaningful description of your products!",
      label: "Product status*",
      pattern: ".{15,}",
      required: true,
    },
    {
      id: 3,
      name: "product_image",
      type: "file",
      placeholder: "Enter the selling price for the product",
      label: "Upload the product's image*",
      errorMessage: "Please input your product's image'",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Layout header footer>
      <div className={[style["app"], common["flex"]].join(" ")}>
        <form className={style["listing-form"]}>
          <h1 className={style["listing-title"]}>SELLER LISTING</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              // onChange={onChange}
              onChange={(e) => {
                onChange(e);
                {
                  input.id === 3 ? handleChange(e) : onChange(e);
                }
              }}
            />
          ))}
          <Radio
            setCat={setCategoryFunction}
            setPricing={setProductPricingFunction}
            setPrice={setPriceFunction}
          />
        </form>
        <div className={style["listing-btn-container"]}>
          <button
            className={style["listing-btn"]}
            onClick={() => {
              let allRequiredFieldsFilled = true;
              required.map((field) => {
                if (field === "") {
                  allRequiredFieldsFilled = false;
                }
              });
              if (allRequiredFieldsFilled) {
                handleUpload();
                pushProduct().then((r) => {
                  console.log(r);
                });
              } else {
                alert("Please fill in the required fields!");
              }
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;
