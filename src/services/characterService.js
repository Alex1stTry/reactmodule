import {apiService} from "./apiService";
import {urls} from "../consts/urls";

const characterService = {
    getAll:(id)=> apiService.get(urls.character.getById(id))
}
export {characterService}