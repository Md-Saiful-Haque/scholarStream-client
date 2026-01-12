import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Login = () => {
    const axiosSecure = useAxiosSecure()
    const [show, setShow] = useState(false);
    const { signIn, setUser, setLoading, signWithGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(null);


    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(res => {
                setUser(res.user)
                toast.success('SignIn Successfully')
                setLoading(false)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(res => {

                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state || '/');
                    })

                setUser(res.user)
                toast.success('Login Successfully')
                setLoading(false)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(err => {
                toast(err.message)
            })
    }

    const users = [
        {
            email: "saifulhaque@gmail.com",
            password: "Asdfg!",
            role: "Admin",
        },
        {
            email: "zara@gmail.com",
            password: "Asdfg!",
            role: "Moderator",
        },
        {
            email: "sai@gmail.com",
            password: "Asdfg!",
            role: "Student",
        },
    ];

    const handleAutoFill = (email, password, index) => {
        setLoginEmail(email);
        setLoginPassword(password);
        setSelectedIndex(index);
    };


    return (
        <div className="flex items-center justify-center min-h-screen py-12 px-3 md:px-0">
            <title>scholarStream-Login</title>
            {/* Form Card Container */}
            <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Sign In
                </h2>

                {/* Sign up with Google Button */}
                <button onClick={handleGoogleSignIn} className="w-full flex items-center gap-1.5 justify-center border border-gray-300 rounded-lg py-2.5 text-gray-700 hover:bg-gray-50 transition duration-150 mb-6">
                    <FcGoogle size={24} />
                    <span className="font-semibold text-sm">Sign up with Google</span>
                </button>

                <form onSubmit={handleSignIn} className="space-y-4">

                    {/* Email Field */}
                    <input
                        type="email"
                        name='email'
                        placeholder="Email*"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 transition duration-150 font-medium"
                    />

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            name='password'
                            placeholder="Password*"
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="w-full px-4 py-3 border-b border-gray-300 focus:border-green-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-500 pr-10 transition duration-150 font-medium"
                        />
                        {/* Eye icon */}
                        <span onClick={() => setShow(!show)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-500 cursor-pointer text-xl">
                            {show ? <FaEye size={25} /> : <IoEyeOff size={25} />}
                        </span>
                    </div>
                    <div><a className="link link-hover text-black">Forgot password?</a></div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#04264e] text-white py-3 rounded-lg font-semibold text-lg  focus:outline-none transition duration-150 mt-2 cursor-pointer"
                    >
                        SignIn your account
                    </button>
                    <p className='text-center my-5 dark:text-black'>Don't Have An Account? <Link to={'/auth/register'} className='text-[#F75B5F]'>Register</Link></p>
                </form>

                <div className="relative flex items-center py-5">
                    <div className="grow border-t border-slate-300"></div>
                    <span className="shrink mx-4 text-slate-500 font-medium text-xl">Or</span>
                    <div className="grow border-t border-slate-300"></div>
                </div>

                <div className="mx-auto mt-2.5">
                    <div className="bg-white rounded-xl shadow-md p-4">
                        <table className="w-full border-separate border-spacing-y-2">
                            <thead>
                                <tr className="text-left text-gray-700 font-semibold">
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Password</th>
                                    <th className="px-4 py-2">Role</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => handleAutoFill(user.email, user.password, index)}
                                        className={`rounded-lg cursor-pointer transition
                                        ${selectedIndex === index
                                                ? "bg-blue-200"
                                                : "bg-gray-50"
                                            }
                                          hover:bg-blue-100
                                        `}
                                    >
                                        <td className="px-4 py-3 rounded-l-lg dark:text-black">
                                            {user.email}
                                        </td>
                                        <td className="px-4 py-3 dark:text-black">
                                            {user.password}
                                        </td>
                                        <td className="px-4 py-3 rounded-r-lg font-medium text-blue-600">
                                            {user.role}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;