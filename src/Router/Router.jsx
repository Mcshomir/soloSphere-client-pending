import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";
import JobDetails from "../Components/Pages/Home/JobDetails";
import AddJobs from "../Components/Pages/Pages/AddJobs";
import MyPostedJobs from "../Components/Pages/Pages/MyPostedJobs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: async () => {
                    try {
                        const response = await fetch(`http://localhost:8000/jobs`);
                        if (!response.ok) throw new Error("Failed to load jobs");
                        return response.json();
                    } catch (error) {
                        console.error(error);
                        throw error;
                    }
                },



            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:8000/job/${params.id}`)
                }

            },
            {
                path: '/addJobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/myPostedJob',
                element: <MyPostedJobs></MyPostedJobs>
            },

            {
                path: '/login',

                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <h2>Not Found ! 404</h2>
            }

        ]


    }

])