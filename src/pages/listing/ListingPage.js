import Layout from "../../components/Layout";
import { useState } from "react";
import FormInput from "../../components/form/ListingForm";
import style from "./ListingPage.module.css";
import common from "../../styles/common.module.css";
import Radio from "../../components/radio/HideShowForm";
import {db} from "../../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";


// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
// };


const ListingPage = () => {
  const [values, setValues] = useState({
    product_name: "",
    product_status: "",
    product_image: ""
  });

  const pushProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, "listing"), {
        product_name: values.product_name,
        product_status: values.product_status,
        product_image: values.product_image
      });
      console.log("Your review has been submitted!", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [fileUrl, setFileUrl] = useState(null);
  const [listing, setUsers] = useState([]);


  const inputs = [
    {
      id: 1,
      name: "product_name",
      type: "text",
      placeholder: "Please enter the product’s name",
      errorMessage:
        "Product name should be 3-16 characters and shouldn't include any special character!",
      label: "Product name*",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "product_status",
      type: "textarea",
      placeholder: "Please describe product's status, and what users will receive more than 15 characters",
      errorMessage: "It should be a meaningful description of your products!",
      label: "Product status*",
      pattern: "^.{15,}$",
      required: true
    },
    {
      id: 3,
      name: "product_image",
      type: "file",
      placeholder: "Enter the selling price for the product",
      label: "Upload the product's image*",
      errorMessage: "Please input your product's image'",
      required: true
    }
  ];


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <Layout header footer>
      <div className={[style["app"], common["flex"]].join(" ")}>
        <form  className={style["listing-form"]}>
          <h1 className={style["listing-title"]}>SELLER LISTING</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />))}
          <Radio
            name="radio"
            value={values.radio}
            onChange={onChange}
          />
        </form>
        <div className={style["listing-btn-container"]}>
          <button className={style["listing-btn"]} onClick={()=> pushProduct()}>SUBMIT</button>
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;