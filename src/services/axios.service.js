import axios from "axios";

import {baseURL} from "../consts/constants";


const axiosInstance = axios.create({baseURL})

export {axiosInstance}