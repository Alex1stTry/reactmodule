import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const commentsService ={
  getByPostId:(postId)=> apiService.get(urls.comments.base, {params:{postId}})
}
export {commentsService}