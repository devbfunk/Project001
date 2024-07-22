"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

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
];

const MobileNav = () => {
    const [open, setOpen] = useState(false); // Initialize open state with false

    const handleMenu = () => {
        setOpen(!open); // Toggle the value of open state
    };

    return (
        <div className='relative'>
            <div onClick={handleMenu} className='flex md:hidden justify-center items-center transition-all duration-600'>
                {open ? (
                    <ImCross size={30} />
                ) : (
                    <GiHamburgerMenu size={40} />
                )}
            </div>
            {open && (
                <div className='absolute top-full right-2 w-[300px] bg-white shadow-lg p-4 mt-2 flex items-center justify-center rounded-md z-10'>
                    <ul className='flex flex-col gap-4 mt-4 text-center'>
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <Link href={item.path} className='text-gray-800 hover:text-blue-600'>{item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
