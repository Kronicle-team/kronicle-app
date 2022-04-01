import { useState } from "react";
import FormInput from "../../components/register/RegisterForm.js"
const React = require("react")
require("../../components/register/RegisterForm.js")
require("./RegisterPage.css")


const LoginPage = () => {
    const [checkedFirst, setCheckedFirst] = React.useState(false);
    const [checkedSecond, setCheckedSecond] = React.useState(false);

    const handleChangeFirst = () => {
        setCheckedFirst(!checkedFirst);
    };

    const handleChangeSecond = () => {
        setCheckedSecond(!checkedSecond);
    };

    const [values, setValues] = useState({
        EmailorPhoneNumber: "", 
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "EmailorPhoneNumber",
            type: "text",
            placeholder: "mail@gmail.com",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Email or Phone number*",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password*",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        }, 
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <p>Not a member? <a href="#">Register.</a></p>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
            
                <button>SIGN IN</button>
                <button>CLEAR</button>
            
            
            </form>
        </div>
    );
};

export default LoginPage;
