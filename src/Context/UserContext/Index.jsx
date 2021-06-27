import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const UserContext = createContext();

const UserContextWrapper = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const cookies = new Cookies();
    let user = cookies.get("user");


    // checking if user data is available in cookie if yes then redirecting user to dasboard
    useEffect(() => {
        if (user?.isAuth && user?.username) setIsAuth(true);
        if (user && !userDetails) {
            const payload = {
                username: user.username,
                email: user.email,
                password: user.password,
            };
            setUserDetails(payload);
        }
    }, [userDetails]);

    // saving user data in cookie when user fill signup form
    const handleUserData = (e) => {
        cookies.set("user", JSON.stringify(e), {maxAge: 1 * 60 * 60 });
        setUserDetails(user)
    };

    // authenticating user if user data matches with cokkie data when user fills the login form
    const authenticateUser = (user) => {
        cookies.set("user", JSON.stringify({ ...user, isAuth: true }), {maxAge: 1 * 60 * 60 });
        setIsAuth(true)
    };

    const value = {
        isAuthenticated: isAuth,
        user: userDetails,
        authenticateUser: authenticateUser,
        handleUserData: handleUserData,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default UserContextWrapper;
