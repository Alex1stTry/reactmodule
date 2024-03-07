import {configureStore} from "@reduxjs/toolkit";

import {charReducer, episodesReducer} from "./slices";

const store = configureStore({
    reducer:{
        episodes: episodesReducer,
        characters : charReducer

    }
})
export {store}