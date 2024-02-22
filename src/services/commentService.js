import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => apiService.get(urls.base),
    create: (data) => apiService.post(urls.base, data)
}
export {commentService}