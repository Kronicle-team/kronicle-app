import Layout from "../../components/Layout"
import {useState} from "react";
import FormInput from "../../components/form/ListingForm";
import style from "./ListingPage.module.css";
import common from "../../styles/common.module.css";


const ListingPage = () => {
    const [values, setValues] = useState({
        productname: "",
        productsatus: "",
        amount: "",
        minamount: "",
    });

    const inputs = [
        {
            id: 1,
            name: "productname",
            type: "text",
            placeholder: "Please enter the product’s name",
            errorMessage:
                "Product name should be 3-16 characters and shouldn't include any special character!",
            label: "Product name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "productsatus",
            type: "textarea",
            placeholder: "Please describe your products, their status, and what users will receive more than 15 words",
            errorMessage: "It should be a meaningful description of your products!",
            label: "Product status",
            pattern: "^[A-Za-z0-9]{15,}$",
            required: true,
        },
        {
            id: 3,
            name: "amount",
            type: "number",
            placeholder: "Enter the selling price for the product",
            label: "Amount",
            errorMessage: "Amount should be a number!",
            pattern: "^[0-9]{1,}$",
            required: true,
        },
        {
            id: 4,
            name: "minamount",
            type: "number",
            placeholder: "Enter the selling price for the product",
            label: "Amount",
            errorMessage: "Amount should be a number!",
            pattern: "^[0-9]{1,}$",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Layout header footer>
            <div className={[style["app"], common["flex"]].join(" ")}>
                <form onSubmit={handleSubmit} className={style["listing-form"]}>
                    <h1 className={style["listing-title"]}>SELLER LISTING</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button className={style["listing-btn"]}>SUBMIT</button>
                </form>
            </div>
        </Layout>
    );
};

export default ListingPage;
