import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../Container';
import logo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import avatarImg from '../../assets/user.jpg'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const {user, logOut} = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const links = <>
        <li className='text-lg'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-lg'><NavLink to={'/all-scholarships'}>All Scholarships</NavLink></li>
    </>
    return (
        <div className='bg-[#324354] relative z-50'>
        <Container>
        <div className="navbar ">
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
                <div className='flex items-center gap-1'>
                <Link to={'/'}><img className='w-20 h-20' src={logo} alt="" /></Link>
                <Link to={'/'}><h2 className='text-[#c4e5f2] font-bold text-2xl'>ScholarStream</h2></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end flex gap-4">
                {user ? <Link onClick={handleSignOut}><button className='bg-[#04264e] text-white text-lg px-5 py-2 rounded-md'>Logout</button></Link> : <>
                <Link to={'/auth/login'}><button className='bg-[#04264e] text-white text-lg px-5 py-2 rounded-md'>Login</button></Link>
                <Link to={'/auth/register'}><button className='bg-[#04264e] text-white text-lg px-5 py-2 rounded-md'>Register</button></Link>
                </> }
            </div> */}

            {/* Dropdown Menu */}
            <div className='relative navbar-end'>
              <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu color='white' />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to='/dashboard'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={handleSignOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                        
                      </>
                    ) : (
                      <>
                        <Link
                          to='/auth/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/auth/register'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

        </div>
        </Container>
        </div>
    );
};

export default Navbar;