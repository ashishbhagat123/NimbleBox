import React, { useState } from "react";
import styles from "./Index.module.css";
import StrengthMeter from "../PasswordMeter/StrengthMeter";

const Input = ({
    placeholder,
    type,
    handleChange,
    name,
    errorMessege = "Invalid Input",
    showPassowrd = true,
    regex,
    icon,
}) => {
    const [showError, setShowError] = useState(false);

    const handleInput = (e) => {
        let inputRegex = new RegExp(regex);
        if (inputRegex.test(e.target.value)) {
            setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
        <>
            <div className={styles.main}>
                <input
                    style={
                        showError
                            ? { borderColor: "red" }
                            : { borderColor: "blue" }
                    }
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={(e) => handleInput(e)}
                />
                {icon && <div>{icon}</div>}
                <div>{showError && <span>{errorMessege}</span>}</div>
                <div>
                    <StrengthMeter />
                </div>
            </div>
        </>
    );
};

export default Input;
