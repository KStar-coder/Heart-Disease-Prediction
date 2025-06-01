import React from 'react'

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-600 lg:backdrop:to-blue-950 w-full fixed top-0 left-0 shadow-md z-50 mb-10">

            <div className="flex flex-wrap items-center justify-between p-4">

                <div className="text-lg font-semibold  text-slate-200 justify-start space-x-6 hidden md:flex">
                    <a className=' rounded-b-md hover:scale-110 transform transition duration-300 ease-in-out' href="#">Home</a>
                    <a className=' rounded-b-md hover:scale-110 transform transition duration-300 ease-in-out' href="#">About</a>
                    <a className=' rounded-b-md hover:scale-110 transform transition duration-300 ease-in-out' href="#">Prices</a>
                </div>

                <div className="text-md font-semibold text-slate-200 hidden md:flex justify-end space-x-6 hover:cursor-pointer">
                    <h1>Login/Signup</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none hover:cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='md:hidden px-4 '>
                {isMobileMenuOpen && (
                    <div className="flex flex-col space-y-4 bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-600 p-6 text-slate-200  ">
                        <a className=' rounded-b-md hover:scale-130 transform transition duration-300 ease-in-out' href="#">Home</a>
                        <a className=' rounded-b-md hover:scale-130 transform transition duration-300 ease-in-out' href="#">About</a>
                        <a className=' rounded-b-md hover:scale-130 transform transition duration-300 ease-in-out' href="#">Prices</a>
                        <h1>Login/Signup</h1>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar