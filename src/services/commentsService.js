import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const commentsService = {
    getAll:()=> apiService.get(urls.comments),
    create:()=> apiService.post(urls.comments)
 }
  export {commentsService}