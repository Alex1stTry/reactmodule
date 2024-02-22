import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../services/commentService";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit} = useForm();
    const save = (post) => {
        console.log(post)
        commentService.create(post).then(({data})=>setComments(prev=>[...prev,data]))
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'postId'} {...register('postId',{valueAsNumber:true})}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')} />
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>save post</button>
            </form>
        </div>
    );
};

export {CommentForm};