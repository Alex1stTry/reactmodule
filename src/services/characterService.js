import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const characterService = {
    getById:(id)=> apiService.get(urls.character.ById(id))
}
export {characterService}