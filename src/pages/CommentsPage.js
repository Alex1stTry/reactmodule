import React from 'react';

import  css from './Comments.module.css'
import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";



const CommentsPage = () => {
    return (
        <div className={css.Comments}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};