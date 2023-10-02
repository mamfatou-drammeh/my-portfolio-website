import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-5 flex justify-between items-center">
            <div className="flex items-center">
                <a href="#" className="font-medium text-lg">My Portfolio</a>
            </div>
            <div className="flex items-center  grid-cols-3 gap-4">
            <a href="#" className="px-2">SERVICES</a>
                <a href="#" className="px-2">ABOUT ME</a>
                <a href="#" className="px-2">PROJECTS</a>
                <a href="#" className="px-2">CONTACTS</a>
            </div>
        </nav>
    )
}


export default Navbar;
