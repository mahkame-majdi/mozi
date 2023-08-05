import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import SingleMovie from "./pages/singleMovie";
import AboutUs from "./pages/aboutUs";
import Genres from "./pages/geners";
import SingleGenrePage from "./pages/SingleGenrePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about-us",
        element: <AboutUs/>
    },
    {
        path: "/movie/:id",
        element: <SingleMovie/>
    },
    {
        path: "/genres",
        element: <Genres/>
    },
    {
        path: "/genres/:genreid",
        element:<SingleGenrePage/>,
    },
    {
        path: "*",
        element: <NotFound/>
    },
])
export default function SiteRouter(){
    return(
        <RouterProvider router={router}/>
    )
}