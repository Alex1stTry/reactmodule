import {apiService} from "./apiService";
import {urls} from "../constans/consts";

const userService = {
    saveUser: (data)=> apiService.post(urls.users, data)
}

export {userService}