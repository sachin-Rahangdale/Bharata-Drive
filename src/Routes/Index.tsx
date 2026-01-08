import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import News from "../Component/News";
import Home from "../Page/Home";
import NewsDetails from "../Page/NewsDetail";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/news/:id',
                element:<NewsDetails/>
            }
        ]
    }
])
export default router;