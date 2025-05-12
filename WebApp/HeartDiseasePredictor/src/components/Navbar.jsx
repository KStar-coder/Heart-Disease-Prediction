import React from 'react'

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav class="bg-slate-800 w-full fixed top-0 left-0 shadow-md z-50 ">

            <div class="flex flex-wrap items-center justify-between p-4">

                <div class="text-lg font-semibold  text-slate-200 justify-start space-x-6 hidden md:flex">
                    <a className=' rounded-b-md hover:bg-gray-700' href="#">Home</a>
                    <a className=' rounded-b-md hover:bg-gray-700' href="#">About</a>
                    <a className=' rounded-b-md hover:bg-gray-700' href="#">Prices</a>
                </div>

                <div class="text-md font-semibold text-slate-200 hidden md:flex justify-end space-x-6 hover:cursor-pointer">
                    <h1>Login/Signup</h1>
                </div>

                <div class="md:hidden">
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
                    <div className="flex flex-col space-y-4 bg-slate-800 p-6 text-slate-200  ">
                        <a className=' rounded-b-md hover:bg-gray-700' href="#">Home</a>
                        <a className=' rounded-b-md hover:bg-gray-700' href="#">About</a>
                        <a className=' rounded-b-md hover:bg-gray-700' href="#">Prices</a>
                        <h1>Login/Signup</h1>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar