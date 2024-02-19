import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
            MainLayOut
            <Outlet/>
        </div>
    );
};

export {MainLayOut};