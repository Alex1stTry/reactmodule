import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const PostsService ={
    getPostByCommentId:(id)=> apiService.get(urls.posts.byId(id))
}
export {PostsService}