import React, { useState } from "react";
import Input from "../../Component/Input/Index";
import { AiFillEye } from "react-icons/ai";
import Button from "../../Component/Button/Button";
import styles from "./Index.module.css";

const initState = {
    username: "",
    email: "",
    password: "",
};

const LogIn = () => {
    const [userDatails, setUserDatails] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
    };

    const handleClick = () => {};

    return (
        <div className={styles.main}>
            <div>
                <div className={styles.form_wrapper}>
                    <div>
                        <h1>Login</h1>
                        <p>Enter your details below to continue</p>
                    </div>
                    <Input
                        handleChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                        icon={<AiFillEye />}
                    />
                    <Input
                        handleChange={handleChange}
                        type="text"
                        name="username"
                        placeholder="username"
                        regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                        icon={<AiFillEye />}
                    />
                    <div className={styles.buttons}>
                        <Button name={"Login"} handleClick={handleClick} />
                    </div>
                    <p>Dont have and account? <span style = {{color: "rgb(204, 181, 53)"}}>Sign up here</span></p>
                </div>
            </div>
            <div>
                <img src="http://htc-wallpaper.com/wp-content/uploads/2015/06/Star-Wars-Logo.jpg" alt="logo"/>
            </div>
        </div>
    );
};

export default LogIn;
