import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/Index";
import styles from "./Index.module.css";
import Input from "../../Component/Input/Index";
import Button from "../../Component/Button/Index";

// initial state for form
const initState = {
    username:"",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [userDetails, setUserDetails] = useState(initState);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const { handleUserData } = useContext(UserContext)

    // handling user form 
    const handleChange = (e) => {
        const { name, value } = e;
        setUserDetails({...userDetails, [name]: value})
    };

    // checkin if passwords matches if yes then redirection to login page when user click on signup buttton
    const handleClick = () => {
        if(userDetails.password !== userDetails.confirmPassword){
            setPasswordError(true)
        } else{
            handleUserData(userDetails)
            history.push("./login")
        }
    };

    // redirecting to login page when user click on login button
    const handleSignIn = () => {
        history.push("/login");
    }

    // toggling password visibility when user clicks on button inside password input
    const togglePasswordType = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className={styles.main}>
            <div>
                <div className={styles.form_wrapper}>
                    <div>
                        <h1>SignUp</h1>
                        <p>Enter your details below to continue</p>
                    </div>
                    <Input
                        handleChange={handleChange}
                        type="text"
                        name="username"
                        placeholder="username"
                        errorMessege = "username length must be minimum 8 letters"
                        regex="^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])"
                    />
                    <Input
                        handleChange={handleChange}
                        type="email"
                        name="email"
                        errorMessege = "not a valid email"
                        placeholder="Email"
                        regex="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    />
                    <Input
                        handleChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="password"
                        errorMessege =  "Must contain Alphanumeric and special character"
                        showStrengthMeter = {true}
                        regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                        icon={<AiFillEye />}
                        showPassword = {showPassword}
                        handleInputButton = {togglePasswordType}
                    />
                    <Input
                        handleChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        placeholder="re-enter password"
                    />
                    { passwordError && <span>password does not match</span>}
                    <div className={styles.buttons}>
                        <Button
                            name={"Signup"}
                            handleClick={handleClick}
                            color={"#417d73"}
                        />
                    </div>
                    <p>
                        Already have an account?{" "}
                        <span
                            onClick={handleSignIn}
                            style={{ color: "#417d73", cursor: "pointer" }}
                        >
                            Sign in here
                        </span>
                    </p>
                </div>
            </div>
            <div className={styles.poster_div}>
                <img
                    src="https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800"
                    alt="star wars"
                />
            </div>
        </div>
    );
};

export default SignUp;
