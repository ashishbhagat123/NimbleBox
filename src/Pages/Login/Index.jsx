import React, { useContext, useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext/Index";
import styles from "./Index.module.css";
import Input from "../../Component/Input/Index";
import Button from "../../Component/Button/Index";
import Layout from "../../Component/Layout/Index";

// initial state for login form
const initState = {
    username: "",
    password: "",
};

const LogIn = () => {
    const [userDetails, setUserDetails] = useState(initState);
    const [loginError, setLoginError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { authenticateUser, user, isAuthenticated } = useContext(UserContext);
    const history = useHistory();

    // if user is authenticated then redirecting to dashboard
    useEffect(() => {
        if (isAuthenticated) history.push("/");
    }, [isAuthenticated]);

    // handling input form data
    const handleChange = (e) => {
        const { name, value } = e;
        setUserDetails({ ...userDetails, [name]: value });
    };

    // checking if user details matches with cookie data
    const checkUserCredentials = () => {
        if (user) {
            const { username, email, password } = user;
            if (
                (username === userDetails.username ||
                    email === userDetails.email) &&
                password === userDetails.password
            ) {
                authenticateUser(user);
            } else {
                setLoginError(true);
            }
        }
    };

    // redirecting to signup page when user click on signup
    const handleSignup = () => {
        history.push("./signup");
    };

    // toggling password input visibility
    const togglePasswordType = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Layout
            body={
                <div className={styles.main}>
                    <div>
                        <div className={styles.form_wrapper}>
                            <div>
                                <h1>Login</h1>
                                <p>Enter your details below to continue</p>
                            </div>
                            <Input
                                handleChange={handleChange}
                                type="text"
                                name="username"
                                placeholder="username or email"
                            />
                            <Input
                                handleChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="password"
                                icon={<AiFillEye />}
                                showPassword={showPassword}
                                handleInputButton={togglePasswordType}
                            />
                            <div>
                                {/* showing error when user data doesent matches with cookies */}
                                {loginError && (
                                    <span>
                                        Username password does not match
                                    </span>
                                )}
                            </div>
                            <div className={styles.buttons}>
                                <Button
                                    name={"Login"}
                                    handleClick={checkUserCredentials}
                                />
                            </div>
                            <p>
                                Dont have an account?{" "}
                                <span
                                    onClick={handleSignup}
                                    style={{
                                        color: "rgb(204, 181, 53)",
                                        cursor: "pointer",
                                    }}
                                >
                                    Sign up here
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.poster_div}>
                        <img
                            src="https://external-preview.redd.it/QzYuoTIwrCmM-VSxS0iOvA5WeDkDqXsKa3e2FfOwmVE.jpg?auto=webp&s=8b5bd7ed34d6a5bdd1aa4d40cd461ad3b4bf1022"
                            alt="logo"
                        />
                    </div>
                </div>
            }
        />
    );
};

export default LogIn;
