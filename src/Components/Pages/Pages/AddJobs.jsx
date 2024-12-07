import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    // Initialize the errors state
    const [errors, setErrors] = useState({});

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const job_title = form.jobTitle.value;
        const email = form.email.value;
        const deadline = startDate;
        const category = form.category.value;
        const min_price = parseFloat(form.minPrice.value);
        const max_price = parseFloat(form.maxPrice.value);
        const description = form.description.value;

        const addData = {
            job_title,
            deadline,
            category,
            min_price,
            max_price,
            description,
            buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        };

        try {
            const { data } = await axios.post(`http://localhost:8000/addJobs`, addData);
            console.log(data);
            alert("Data added!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <section className="max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6">Job Submission</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="jobTitle" className="text-gray-700 dark:text-gray-200">Job Title</label>
                            <input
                                id="jobTitle"
                                name="jobTitle"
                                type="text"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.jobTitle ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                            {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</label>
                            <input
                                id="email"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                type="email"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                        </div>

                        <div>
                            <label htmlFor="deadline" className="text-gray-700 dark:text-gray-200">Deadline</label>
                            <input
                                id="deadline"
                                name="deadline"
                                type="date"
                                value={startDate.toISOString().slice(0, 10)}
                                onChange={(e) => setStartDate(new Date(e.target.value))}
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.deadline ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="text-gray-700 dark:text-gray-200">Category</label>
                            <select
                                id="category"
                                name="category"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.category ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            >
                                <option value="">Select a Category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="minPrice" className="text-gray-700 dark:text-gray-200">Minimum Price</label>
                            <input
                                id="minPrice"
                                name="minPrice"
                                type="number"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.minPrice ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                        </div>

                        <div>
                            <label htmlFor="maxPrice" className="text-gray-700 dark:text-gray-200">Maximum Price</label>
                            <input
                                id="maxPrice"
                                name="maxPrice"
                                type="number"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.maxPrice ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="text-gray-700 dark:text-gray-200">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${errors.description ? 'border-red-500' : 'border-gray-200'} rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none`}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddJobs;
