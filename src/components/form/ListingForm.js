/**
 * Listing form.
 */
import { useState } from "react";
import style from "./ListingForm.module.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className={style["form-input"]}>
            <label className={style["label-listing"]}>{label}</label>
            <input className={style["input-listing"]}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => setFocused(false)}
                focused={focused.toString()}
            />
            <span className={style["error-message"]}>{errorMessage}</span>
        </div>
    );
};

export default FormInput;