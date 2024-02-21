import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../services/postsService";
import {PostDetails} from "../Components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const {id} = useParams()
    const [postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        postService.byId(id).then(({data}) => setPostDetails(data))
    }, [id]);
    return (
        <div>
            {postDetails && <PostDetails key={postDetails.id} postDetails={postDetails}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};