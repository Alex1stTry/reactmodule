import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts/MainLayOut";
import {ToDosPage} from "./pages/ToDosPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index:true,element:<Navigate to={'todos'}/>}
        ]
    },
    {
        path: 'todos', element: <ToDosPage/>
    }
])

export {router}