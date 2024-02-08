import {axiosInstance} from "./axios.service";
import {posts} from "../consts/constants";

const postService =  {
    getAll:()=> axiosInstance(posts)
}

export {postService}