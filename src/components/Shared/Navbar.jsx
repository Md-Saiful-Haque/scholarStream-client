import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
//import Container from '../Container';
import logo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import avatarImg from '../../assets/user.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiMoon } from 'react-icons/fi';
import useRole from '../../hooks/useRole';


const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
  const {role} = useRole()

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out')
      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleTheme = (checked) => {
    setTheme(checked ? "light" : "dark")
  }

  const links = <>
    <li className='text-lg'><NavLink to={'/'} style={({ isActive }) => ({ color: isActive && '#c4e5f2' })}>Home</NavLink></li>
    <li className='text-lg'><NavLink to={'/all-scholarships'} style={({ isActive }) => ({ color: isActive && '#c4e5f2' })}>All Scholarships</NavLink></li>
    <li className='text-lg'><NavLink to={'/about'} style={({ isActive }) => ({ color: isActive && '#c4e5f2' })}>About Us</NavLink></li>
    <li className='text-lg'><NavLink to={'/blog'} style={({ isActive }) => ({ color: isActive && '#c4e5f2' })}>Blog</NavLink></li>
    <li className='text-lg'><NavLink to={'/service'} style={({ isActive }) => ({ color: isActive && '#c4e5f2' })}>Our Service</NavLink></li>
  </>
  return (
    <div className='bg-[#324354] dark:bg-[#000000] relative z-50'>

      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content shadow bg-base-100  rounded-box z-1 mt-3 w-52 p-2">
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


        {/* Dropdown Menu */}
        <div className='flex gap-5 relative navbar-end'>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" className="theme-controller" value="synthwave" />

            {/* sun icon */}
            {
              theme === "light" ? <FiMoon className='h-10 w-10 text-white' /> :

                <svg
                  className="swap-off h-10 w-10 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

            }



          </label>

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
                      to={
                        role === 'Admin' && '/dashboard/analytics' || role === 'Moderator' && '/dashboard/manage-application' || role === 'Student' && '/dashboard/my-applications'
                      }
                      className='px-4 py-3 dark:text-black hover:bg-neutral-100 transition font-semibold'
                    >
                      Dashboard
                    </Link>
                    <div
                      onClick={handleSignOut}
                      className='px-4 py-3 dark:text-black hover:bg-neutral-100 transition font-semibold cursor-pointer'
                    >
                      Logout
                    </div>

                  </>
                ) : (
                  <>
                    <Link
                      to='/auth/login'
                      className='px-4 py-3 dark:text-black hover:bg-neutral-100 transition font-semibold'
                    >
                      Login
                    </Link>
                    <Link
                      to='/auth/register'
                      className='px-4 py-3 dark:text-black hover:bg-neutral-100 transition font-semibold'
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
    </div>
  );
};

export default Navbar;