export const Hero: React.FC = () => {
    return (
        <>
            <div className="lg:px-32 px-3 md:px-6 md:py-8 lg:py-8 bg-offWhite flex md:flex-row flex-col-reverse gap-5 lg:gap-x-16">

                <div className="md:w-1/2 w-full ">
                    <h1 className="lg:text-7xl text-4xl leading-tight font-bold md:w-full text-darkGray">Discover the Best Lovely Places</h1>
                    <p className="text-lightGray text-base lg:text-lg lg:w-10/12 text-serif">Plan and book your perfect trip with expert advice, travel tips, destination information and inspirations from us.</p>

                    <div className="shadow-lg mt-4 w-full bg-white flex lg:px-10 lg:py-6 md:px-5 md:py-2 px-5 py-3 items-center rounded-xl md:rounded-full">
                        <span className="w-1/2  leading-3 border-r border-solid border-6 border-softGray md:w-full">
                            <p className="text-base md:text-xs lg:text-base text-darkGray font-bold ">Where</p>
                            <p className="flex text-lightGray md:text-xs text-sm lg:text-base font-medium">Center Point, Lo... <img src="" /></p>
                        </span>
                        {/* alt="location icon" */}

                        <span className="w-1/2 md:w-full lg-w-1/2 pl-5 md:pr-0 lg:pl-10 lg:pr-6 leading-3">
                            <p className="text-base md:text-xs lg:text-base text-darkGray font-bold">Date</p>
                            <p className="flex text-lightGray text-sm md:text-xs lg:text-base font-medium">09th March,2021 <img src="" /></p>
                        </span>
                        {/* alt="calendar icon" */}

                            <img src="/assets/Icon.png" alt="search icon" className="shadow-2xl rounded-2xl"/>
                        
                    </div>
                </div>

                <div>
                    <img src="/assets/heroImg.png" className="w-full" alt="hero img" />
                </div>

            </div>
        </>
    )
}