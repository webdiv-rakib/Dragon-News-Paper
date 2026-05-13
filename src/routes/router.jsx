import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                }
            ]
        },
        {
            path: '/auth',
            element: <h2>Login Layout</h2>
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '*',
            element: <h2>Error Layout</h2>
        },
    ]
);
export default router;
