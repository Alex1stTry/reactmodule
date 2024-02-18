import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const commentsService = {
    getAll:()=> apiService.get(urls.comments),
    create:(data)=> apiService.post(urls.comments,data)
 }
  export {commentsService}