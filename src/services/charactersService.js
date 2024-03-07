import {apiService} from "./apiService";

import {urls} from "../consts";

const charactersService ={
    getById :(id) => apiService.get(urls.characters.byId(id))
}
export {charactersService}