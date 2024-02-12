import {axiosInstance} from "./axios.service";
import {launches} from "../consts/consts";

const spaceXService = {
    getAll: ()=> axiosInstance(launches)
 }

 export {spaceXService}