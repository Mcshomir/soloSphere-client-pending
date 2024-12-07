import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const username = form.username.value;
        const photoURL = form.photoURL.value;

        try {
            const result = await register(email, password, username, photoURL); // Adjusted to include username and photoURL
            console.log(result);
            toast.success("Successfully Registered!");
            navigate('/login');
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Create an Account</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create an account</p>

                    <form onSubmit={handleRegister}>
                        <div className="w-full mt-4">
                            <input
                                name="username"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Username"
                                aria-label="Username"
                                required
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                name="photoURL"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                placeholder="Photo URL"
                                aria-label="Photo URL"
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                name="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                                required
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                name="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forgot Password?</a>
                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Register
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>
                    <Link to="/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
                </div>
            </div>
            <Toaster /> {/* To display toast notifications */}
        </div>
    );
};

export default Register;
