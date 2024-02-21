import {apiService} from "./apiService";

import {urls} from "../consts/urls";

const userService = {
    getAll:()=> apiService.get(urls.users.base),
    byId: (id) => apiService.get(urls.users.byId(id))
}
export {userService}