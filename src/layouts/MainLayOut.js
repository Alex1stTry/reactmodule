import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};