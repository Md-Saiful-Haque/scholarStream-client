import React from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../Container';
import logo from '../../assets/logo.png'


const Navbar = () => {
    const links = <>
        <li className='text-white'><NavLink>Home</NavLink></li>
        <li className='text-white'><NavLink>All Scholarships</NavLink></li>
    </>
    return (
        <div className='bg-[#324354]'>
        <Container>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                <img className='w-20 h-20' src={logo} alt="" />
                <h2 className='text-white font-bold text-2xl'>ScholarStream</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <Link><button className='bg-[#04264e] text-white px-5 py-2 rounded-md'>Login</button></Link>
                <Link><button className='bg-[#04264e] text-white px-5 py-2 rounded-md'>Register</button></Link>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Navbar;