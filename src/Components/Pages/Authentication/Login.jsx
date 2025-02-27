import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const { googleLogin, login } = useContext(AuthContext);

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            toast.success('Successfully logged in!');
            navigate('/');
        } catch (error) {
            console.log("error", error);
            toast.error(error?.message);
        }
    };

    // email login
    const handleEmailLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await login(email, password);
            console.log(result);
            toast.success("Login successfully!");
            navigate('/');
        } catch (error) {
            console.log("Error:", error);
            toast.error(error?.message);
        }
    };

    return (
        <div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form className="mb-5" onSubmit={handleEmailLogin}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" name="email" placeholder="Email Address" aria-label="Email Address" required />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" placeholder="Password" aria-label="Password" required />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>
                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <span onClick={handleGoogleLogin} className="text-sm text-green-600 dark:text-gray-200 cursor-pointer btn-secondary">Sign in with Google!</span>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                    <Link to="/register">
                        <span className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</span>
                    </Link>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;
