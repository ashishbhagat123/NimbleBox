import React, { useState } from "react";
import Input from "../../Component/Input/Index";
import { AiFillEye } from "react-icons/ai";
import Button from "../../Component/Button/Button";

const initState = {
    username: "",
    email: "",
    password: "",
};

const LogIn = () => {
    const [userDatails, setUserDatails] = useState(initState);

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
    };

    const handleClick = () => {

    }

    return (
        <div>
            <Input
                handleChange={handleChange}
                type= "text"
                name="username"
                placeholder="username"
                regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                icon = {<AiFillEye />}
            />
             <Button name = {"Button"} handleClick = {handleClick}/>
        </div>
       
    );
};

export default LogIn;
