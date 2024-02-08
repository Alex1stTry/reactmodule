import axios from "axios";

import {baseURL} from "../consts/consts";

const axiosService = axios.create({baseURL})

export {axiosService}
