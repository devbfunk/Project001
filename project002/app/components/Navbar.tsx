import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'


const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Portfolio",
        path: "/portfolio",
    },
    {
        id: 4,
        name: "Contact",
        path: "/contact",
    },
]


const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex justify-between mt-6 items-center mb-8">
                <div>
                    <h2 className='text-4xl font-extrabold tracking-tighter'>RunCMDCreate</h2>
                </div>
                <div>
                    <ul className='hidden md:flex gap-8'>
                        {navLinks.map((item, id) => (
                            <li key={id}>
                                <Link href={item.path} className='hover:text-gray-300 transition-all duration-500 hover:font-extrabold'>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div></div>
            <MobileNav />
        </div>
    )
}

export default Navbar 