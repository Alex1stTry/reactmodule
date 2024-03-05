import axios from "axios";
import {baseURL} from "../const";

const apiService = axios.create({baseURL})

export {apiService}