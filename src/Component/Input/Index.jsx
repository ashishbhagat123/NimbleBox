import React, { useState } from "react";
import {debounce } from "lodash";
import styles from "./Index.module.css";
import StrengthMeter from "../PasswordMeter/Index";


const Input = ({
    placeholder,
    type,
    handleChange,
    name,
    errorMessege = "Invalid Input",
    showPassword,
    regex,
    icon,
    showStrengthMeter,
    handleInputButton,
    debounceInput = false,
}) => {
    const [text, setText] = useState("");
    const [showError, setShowError] = useState(false);

    // checking regex for input field if available and handling errors
    const handleInput = (e) => {
        let { value } = e.target;
        setText(value);
        if (regex && value.length) {
            let inputRegex = new RegExp(regex);
            if (inputRegex.test(value)) {
                setShowError(false);
                handleChange(e.target);
            } else {
                setShowError(true);
            }
        } else { 
            handleChange(e.target);
            setShowError(false);
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
                    type={
                        type === "password"
                            ? showPassword
                                ? "text"
                                : "password"
                            :"text"
                    }
                    name={name}
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={debounceInput ? debounce(handleInput, 1000) : handleInput}
                />
                <div onClick={handleInputButton} className={styles.icon}>
                    {icon}
                </div>
                {/* showing error for invalid input */}
                <div>{showError && <span>{errorMessege}</span>}</div>
                {/* showing password strength for password input */}
                <div>
                    {showStrengthMeter && <StrengthMeter password={text} />}
                </div>
            </div>
        </>
    );
};

export default Input;
