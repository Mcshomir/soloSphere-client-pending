import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const JobDetails = () => {
    const getData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const { job_title, category, description, deadline, buyer_email, max_price, min_price } = getData;
    console.log("jobDetails", getData)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // if (user?.email === "buyer_email") return alert("action not permited !")

        const form = event.target;
        const email = user?.email;
        const price = parseFloat(form.price.value);
        if (price < min_price) return alert("Offer more at least minimum to equal price !")
        else if (price > max_price) return alert("offer less at maximum ")
        const status = 'pending';

        const pushData = {
            email,
            buyer_email,
            price,
            category,
            job_title,
            deadline: startDate,
            status,
            max_price,
            min_price,

        };



        try {

            const { data } = await axios.post(`http://localhost:8000/bids`, pushData)
            console.log(data)
            alert(
                "data push successfully "
            )

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex flex-row-2 mt-2" >
            {/* Job Details Section */}
            <section className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">

                <div class="w-full max-w-sm px-4 py-3  dark:bg-gray-800">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-light text-gray-800 dark:text-gray-400">Deadline: {new Date(deadline).toLocaleDateString()}</span>
                        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
                    </div>

                    <div>
                        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{job_title}</h1>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
                    </div>

                    <div>
                        <span>Name: {user?.displayName}</span> <br />
                        <span>Email: {user?.email}</span>


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
                </div>
            </section>

            {/* Form Section */}
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Place a Bid</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
                            <input
                                id="price"
                                name="price"
                                type="text"
                                placeholder="Enter price"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="deadline">Deadline</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy-MM-dd"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none">Place Bid </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default JobDetails;
