import {axiosService} from "./axios.service";
import {launches} from "../consts/consts";

const spaceXService = {
    getAll: ()=> axiosService(launches)
 }

 export {spaceXService}