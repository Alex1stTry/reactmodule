import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts/MainLayOut";
import {ToDosPage} from "./pages/ToDosPage";
import {ErrorPage} from "./pages/ErrorPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos', element: <ToDosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {router}