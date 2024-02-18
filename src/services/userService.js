import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const userService = {
    setUser: (data)=> apiService.post(urls.users, data),
    getAll: ()=> apiService.get(urls.users)
}

export {userService}