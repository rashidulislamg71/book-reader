
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const navOptions = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Listed Books", path: "/listedBooks" },
    { id: 3, name: "Page To Read ", path: "/pagesToReadBooks" }
];

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = <>

        {
            navOptions.map(link => (
                <li className='hover:text-sky-600' key={link.id}>
                    <NavLink className={({ isActive }) => `${isActive ? "border border-green-300 rounded pb-1 text-green-500" : "text-black "} py-0.5 px-3 `} to={link.path}>{link.name}</NavLink>
                </li>
            ))
        }
    </>

    return (
        <div className='flex justify-between items-center shadow-2xl py-3 px-4 md:px-10'>
            {/* menu icon  */}

            {/* logo  */}
            <div className='flex justify-center items-center gap-2'>
                <span className="cursor-pointer md:hidden flex text-2xl mt-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FiMenu />
                </span>
                <h2 className='text-[#285A48] text-2xl font-bold font-sans'>BookReader</h2>
            </div>
            {/* menu link  */}

            <div className={`absolute top-16 left-0 w-full bg-amber-100 list-none  p-4 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
                <nav >
                    {navLinks}
                </nav>
            </div>
            <div >
                <nav className='md:flex hidden justify-center items-center gap-5 list-none '>
                    {navLinks}
                </nav>
            </div>
            {/* sign in & sign up btn  */}
            <div className='flex gap-2 md:gap-5'>
                <button className='btn text-white bg-blue-500'><Link>Sign In</Link></button>
                <button className='btn bg-green-400 text-white'><Link>Sign Up</Link></button>
            </div>
        </div>
    )
}

export default NavBar