
import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const episodesService = {
    getAll:(page)=> apiService.get(urls.episodes, {params:{page}})
}
export {episodesService}