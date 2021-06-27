import React, { useContext } from "react";
import { Route, Switch } from "react-router";
import { UserContext } from "../Context/UserContext/Index";
import LogIn from "../Pages/Login/Index";
import SignUp from "../Pages/SignUp/Index";
import PrivateRoute from "./PrivateRoute/Index";

const Routes = () => {
    const {isAuthenticated } = useContext(UserContext)

    return (
        <div>
            <Switch>
                {/* if user is authenticated then redirecting user to dashboard */}
                <PrivateRoute isAuthenticated = {isAuthenticated} path="/" exact />
                <Route exact path="/login">
                    <LogIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
