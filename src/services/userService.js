import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const userService = {
    getAll:()=>apiService.get(urls.base),
    create: (data)=>apiService.post(urls.base, data)
 }

 export {userService}