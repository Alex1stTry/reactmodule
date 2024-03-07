import {apiService} from "./apiService";
import {urls} from "../consts";

const episodesService = {
    getAll:(page) => apiService.get(urls.characters.base, page)
}
export {episodesService}