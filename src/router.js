import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./Pages/UsersPage";

import {UserDetailsPage} from "./Pages/UserDetailsPage";
import {PostsPage} from "./Pages/PostsPage";
import {PostDetails} from "./Components/PostsContainer/PostDetails";
import {PostDetailsPage} from "./Pages/PostDetailsPage";
import {CommentsPage} from "./Pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'userDetails/:id', element: <UserDetailsPage/>, children:[
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            },
            {
                path:'postDetails/:id', element:<PostDetailsPage/>, children:[
                    {
                        path:'comments',element: <CommentsPage/>

                    }
                ]
            }

        ]
    }
])

export {router}