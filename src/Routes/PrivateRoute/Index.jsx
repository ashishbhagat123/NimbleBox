import React from "react";
import { Redirect } from "react-router";
import Layout from "../../Component/Layout/Index";

const PrivateRoute = ({ isAuthenticated }) => {
    return (
        <div>
            {isAuthenticated ? (
                <Layout pageName="dashboard" header = {true} sidebar = {true}/>
            ) : (
                <Redirect to="./login"></Redirect>
            )}
        </div>
    );
};

export default PrivateRoute;
