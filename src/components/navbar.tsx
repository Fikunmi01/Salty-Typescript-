import React from 'react'


export const Navbar: React.FC = () => {
    return (
        <div>
            <div className="flex px-3 lg:px-32 justify-between md:px-6 md:py-4 sm:pl-2 items-center py-4 text-sans bg-offWhite">
                <div className="flex items-center">
                    <img src="/assets/logo.png" alt="logo" />
                    <h2 className="font-bold text-xl font-sen text-darkGray">Salty</h2>
                </div>

                <div className="hidden md:block">
                    <ul className="text-base font-normal items-center gap-x-5 inline-flex">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Destinations</li>
                        <li>Tours</li>
                        <li>Blog</li>
                    </ul>
                </div>



                <div className="bg-red relative text-orange hidden md:block">
                    <button className="flex items-center gap-x-2 border-2 border-orange border-solid rounded-3xl px-5 py-2 text-base relative font-medium">Book Now
                        <img src="/assets/bookIcon.png" alt="book icon" />
                    </button>
                </div>
            </div>


        </div >
    )
}