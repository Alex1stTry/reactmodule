import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const TodosService = {
    getAll:()=> apiService.get(urls.todos)
}
export {TodosService}