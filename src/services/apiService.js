import axios from "axios";

import {baseURL} from "../constans/consts";

const apiService = axios.create({baseURL})

export {apiService}