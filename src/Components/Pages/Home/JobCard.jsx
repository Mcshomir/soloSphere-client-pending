import React from 'react';
import { Link } from "react-router-dom"
const JobCard = ({ job }) => {
    const { deadline, description, category, _id, buyer_email, min_price, max_price, job_title
    } = job;
    return (


        <Link to={`job/${_id}`} class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-800 dark:text-gray-400">Deadline:  {new Date(deadline).toLocaleDateString()}</span>
                <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
            </div>

            <div>
                <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{job_title}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>

            <div>
                <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                    {/* <span>Visit on:</span>
                    <a class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabindex="0" role="link">edx.org</a>
                    <span>or</span> */}
                    <a class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabindex="0" role="link">BuyerEmail:{buyer_email}</a>
                </div>

                <div class="flex items-center justify-between mt-4">

                    <p>
                        Min_price: ${min_price}
                    </p>
                    <p>
                        Max_Price: ${max_price}
                    </p>

                </div>
            </div>
        </Link>

    );
};

export default JobCard;