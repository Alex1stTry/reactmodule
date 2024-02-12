import axios from "axios";

import {baseURL} from "../consts/consts";

const axiosInstance = axios.create({baseURL})

export {axiosInstance}
