import {apiService} from "./apiService";
import {urls} from "../const";

const carService = {
    getAll:()=> apiService.get(urls.cars.base),
    update:(id,data)=> apiService.put(urls.cars.byId(id),data),
    delete:(id)=>apiService.delete(urls.cars.byId(id)),
    create: (data)=> apiService.post(urls.cars.base,data)
}
export {carService}