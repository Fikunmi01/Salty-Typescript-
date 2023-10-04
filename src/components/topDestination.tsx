interface TopDestinations {
    id: number,
    imgSrc: string,
    rating: number,
    Address: string,
    city: string
}

export const DestinationArray: TopDestinations[] = [
    {
        id: 1,
        imgSrc: "/assets/Rectangle4389.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worefall"
    },
    {
        id: 2,
        imgSrc: "/assets/Rectangle4390.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worefall"
    },
    {
        id: 3,
        imgSrc: "/assets/Rectangle4391.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worefall"
    },
    {
        id: 4,
        imgSrc: "/assets/Rectangle4392.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worefall"
    },
    {
        id: 5,
        imgSrc: "/assets/Rectangle4394.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worerfall"
    },
    {
        id: 6,
        imgSrc: "/assets/Rectangle4395.png",
        rating: 3.5,
        Address: "Vietnam",
        city: "Worerfall"
    },
]

// export const TopDestination: React.FC<{ destinations: TopDestinations[] }> = ({ destinations }) => {
    export const TopDestination: React.FC = ()=> {
    return (
        <>
            <div className="bg-offWhite lg:px-32 md:px-6 lg:pt-20 lg:py-20 py-2">
                <h1 className="font-serif text-darkGray text-3xl md:text-4xl lg:text-6xl text-center leading-normal font-semibold">Top Destinations</h1>
                <p className="font-serif text-lightGray text-center w-3/4 m-auto md:w-full pb-2 text-base md:text-base">Sost Brilliant reasons Entrada should be your one-stop shop!</p>

                <span className="flex md:justify-center px-3 font-sans gap-5 mb-5 overflow-x-scroll hide-scrollbar">
                    <button className="bg-darkGray px-3 md:px-6 text-sm text-white md:py-1 rounded-3xl">London</button>
                    <button className="bg-offWhite px-3 md:px-6 text-sm text-darkGray border-2 md:py-1 rounded-3xl">Bangkok</button>
                    <button className="bg-offWhite px-3 md:px-6 text-sm text-darkGray border-2 md:py-1 rounded-3xl">England</button>
                    <button className="bg-offWhite px-3 md:px-6 text-sm text-darkGray border-2 md:py-1 rounded-3xl">Singapore</button>
                    <button className="bg-offWhite px-3 md:px-6 text-sm text-darkGray border-2 py-1 md:py-1 rounded-3xl">Italy</button>
                </span>


                <div className="flex mb-5 relative px-2 ">
                    <div className="flex md:gap-3 lg:gap-5 gap-1 mr-1">
                        <span className="w-full flex gap-2 md:gap-5 flex-col">
                            <img src="/assets/Rectangle4389.png" className="w-40 h-full lg:h-full lg:w-full" alt="first png" />

                            <div className="absolute hidden md:flex flex-col lg:gap-28 text-white lg:px-5 md:gap-24 md:left-4 md:top-60 lg:pt-5 lg:mt-10">
                                <p className="md:px-3 px-2 py-1 w-fit font-serif text-sm md:py-1 font-medium text-darkGray bg-white rounded-2xl">3.5</p>

                                <span className="font-serif">
                                    <h3 className="md:text-xl text-base leading-loose ">Vietnam</h3>
                                    <p className="md:text-sm text-base ">Worefall</p>
                                </span>
                            </div>

                            <img src="/assets/Rectangle4390.png" className="w-36 lg:w-full h-full" alt="second png" />
                        </span>

                        <img src="/assets/Rectangle4391.png" alt="third png" className="relative w-3/5 lg:w-full h-full"/>

                        <div className="absolute hidden md:flex flex-col md:gap-20 lg:gap-32 text-white px-5 pt-5">
                            <p className="md:px-3 w-fit font-serif md:text-sm text-base md:py-1 font-medium text-darkGray bg-white rounded-2xl">3.5</p>

                            <span className="font-serif">
                                <h3 className="md:text-xl text-base leading-loose ">Vietnam</h3>
                                <p className="md:text-sm text-base">Worefall</p>
                            </span>
                        </div>

                        <div className="absolute hidden md:flex flex-col lg:gap-96  text-white md:left-40 md:gap-96 lg:left-72 px-5 right-22 pt-5">
                            <p className="px-3 w-fit font-serif text-sm py-1 font-medium text-white bg-darkGray rounded-2xl">3.5</p>

                            <span className="font-serif">
                                <h3 className="md:text-xl text-base leading-loose ">Vietnam</h3>
                                <p className="text-sm ">Worefall</p>
                            </span>
                        </div>
                    </div>

                    <div className=" md:ml-3 flex flex-col gap-1 md:gap-5 relative">
                        <img src="/assets/Rectangle4392.png" alt="fourth png" className="w-96 lg:w-full h-full"/>

                        <div className="absolute hidden md:flex flex-col md:gap-16 lg:gap-28 text-white px-5 pt-5">
                            <p className="md:px-3 w-fit font-serif text-sm px-2 md:py-1 font-medium text-white bg-darkGray rounded-2xl">3.5</p>

                            <span className="font-serif">
                                <h3 className="md:text-xl text-base leading-loose ">Vietnam</h3>
                                <p className="text-sm ">Worefall</p>
                            </span>
                        </div>

                        <span className="inline-flex gap-1 md:gap-2">

                            <img src="/assets/Rectangle4394.png" className="h-fit w-2/4 lg:w-full" alt="fifth png" />

                            <div className="absolute md:flex flex-col lg:gap-32 text-white px-5 pt-5 hidden">
                                <p className="md:px-3 w-fit font-serif text-sm px-2 md:py-1 font-medium text-white bg-darkGray rounded-2xl">3.5</p>

                                <span className="font-serif">
                                    <h3 className="md:text-xl text-base leading-loose ">Vietnam</h3>
                                    <p className="text-sm ">Worefall</p>
                                </span>
                            </div>
                            <img src="/assets/Rectangle4395.png" className="h-full lg:h-fit w-2/4 lg:w-full" alt='sixth png' />


                            <div className="absolute md:flex hidden flex-col lg:gap-32 text-white md:right-12 md:gap-28 lg:right-40 pt-5">
                                <p className="md:px-3 w-fit font-serif text-sm px-2 md:py-1 font-medium text-white bg-darkGray rounded-2xl">3.5</p>

                                <span className="font-serif ">
                                    <h3 className="md:text-xl md:leading-loose ">Vietnam</h3>
                                    <p className="text-sm">Worefall</p>
                                </span>
                            </div>
                        </span>
                    </div>
                </div >
            </div >
        </>
    )
}