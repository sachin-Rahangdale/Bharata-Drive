import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import News from "../Component/News";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<News/>
            }
        ]
    }
])
export default router;