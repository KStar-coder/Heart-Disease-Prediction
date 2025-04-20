import React from 'react'

function Navbar() {
    return (
        <nav class="bg-gray-600">
            <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div class="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl p-4 text-lg font-semibold  text-gray-200">

                    <div class="text-lg font-semibold  text-gray-200 flex justify-start space-x-6">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Prices</a>
                    </div>

                    <div>

                    </div>


                </div>
            </div>

        </nav>
    )
}

export default Navbar