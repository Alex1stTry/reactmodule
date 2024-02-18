import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../services/commentsService";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit} = useForm()
    const post = (post) => {
       commentsService.create(post).then(({data})=> setComments(prev=>[...prev,data]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(post)}>
                <input type="text" placeholder={'name'}{...register('name')}/>
                <input type="text" placeholder={'body'}{...register('body')}/>
                <button>post comment</button>
            </form>
        </div>
    );
};

export {CommentForm};