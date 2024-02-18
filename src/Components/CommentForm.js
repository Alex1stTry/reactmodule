import React from 'react';
import {useForm} from "react-hook-form";

const CommentForm = () => {
    const {register, handleSubmit} = useForm()
    const post = (post) => {

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