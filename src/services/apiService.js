import axios from "axios";
import {baseURL} from "../consts/urls";

const apiService = axios.create({baseURL})

export {apiService}