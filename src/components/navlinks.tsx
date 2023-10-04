import React, { useState } from "react";

export const Navlinks: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="flex md:hidden">
        <div></div>
        <div className="lg:hidden" onClick={handleClick}>
          {open ? (
            <i className="uil uil-multiply text-3xl lg:hidden"></i>
          ) : (
            <i className="uil uil-bars text-3xl lg:hidden"></i>
          )}

          {open && (
            <div className="absolute top-0 left-0 w-full h-full bg-white">
              <ul className="flex flex-col items-center justify-center h-full">
                <li>Home</li>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Tours</li>
                <li>Blog</li>
                <li>
                  <button className="flex items-center gap-x-2 border-2 border-orange border-solid rounded-3xl px-5 py-2 text-base relative font-medium">
                    Book Now
                    <img src="/assets/bookIcon.png" alt="book icon" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
