// import Layout from "../../components/Layout";
// import style from "./RegisterPage.module.css";
// import FormInput from "../../components/register/RegisterForm";
// import { useState } from "react";
//
//
// const RegisterPage = () => {
//     const [checkedFirst, setCheckedFirst] = useState(false);
//     const [checkedSecond, setCheckedSecond] = useState(false);
//
//     const handleChangeFirst = () => {
//         setCheckedFirst(!checkedFirst);
//     };
//
//     const handleChangeSecond = () => {
//         setCheckedSecond(!checkedSecond);
//     };
//
//     const [values, setValues] = useState({
//         emailOrPhoneNumber: "",
//         fullName: "",
//         password: "",
//         verifyPassword: "",
//     });
//
//     const inputs = [
//         {
//             id: 1,
//             name: "emailOrPhoneNumber",
//             type: "text",
//             placeholder: "mail@gmail.com",
//             errorMessage:
//                 "Username should be 3-16 characters and shouldn't include any special character!",
//             label: "Email or Phone number*",
//             pattern: "^[A-Za-z0-9]{3,16}$",
//             required: true,
//         },
//         {
//             id: 2,
//             name: "fullName",
//             type: "text",
//             placeholder: "Enter your name",
//             errorMessage: "It should be a valid email address!",
//             label: "Email*",
//             required: true,
//         },
//         {
//             id: 3,
//             name: "password",
//             type: "password",
//             placeholder: "Enter your password",
//             errorMessage:
//                 "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//             label: "Password*",
//             pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//             required: true,
//         },
//         {
//             id: 4,
//             name: "verifyPassword",
//             type: "password",
//             placeholder: "Re-enter your Password",
//             errorMessage: "Passwords don't match!",
//             label: "Verify Password",
//             pattern: values.password,
//             required: true,
//         },
//     ];
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };
//
//     const onChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//     };
//
//     const Checkbox = ({ label, value, onChange }) => {
//         return (
//           <label>
//             <input type="checkbox" checked={value} onChange={onChange} />
//             {label}
//           </label>
//         );
//     };
//
//     return (
//         <Layout className={style["container"]} header footer>
//             <form className={style["form"]} onSubmit={handleSubmit}>
//                 <h1>REGISTER</h1>
//                 <p>Already a member? <a href="#">Sign in.</a></p>
//                 {inputs.map((input) => (
//                     <FormInput
//                         key={input.id}
//                         {...input}
//                         value={values[input.name]}
//                         onChange={onChange}
//                     />
//                 ))}
//                 <div>
//                     <Checkbox
//                         label={<label>I agree to the &nbsp;<a href="#">terms and conditions.</a></label>}
//                         value={checkedFirst}
//                         onChange={handleChangeFirst}
//                     />
//                     <Checkbox
//                         label={<label>Send me the latest deal.</label>}
//                         value={checkedSecond}
//                         onChange={handleChangeSecond}
//                     />
//                 </div>
//
//                 <button>REGISTER</button>
//                 <button>CLEAR</button>
//
//
//             </form>
//         </Layout>
//     );
// };
//
// export default RegisterPage;
import RegisterForm from "../../components/auth/RegisterForm";

const Registration = () => {
    return <RegisterForm />;
};

export default Registration;