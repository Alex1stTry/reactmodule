import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const AlbumsService = {
    getAll:()=> apiService.get(urls.albums)
}
export {AlbumsService}