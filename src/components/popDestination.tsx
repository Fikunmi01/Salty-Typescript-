import React from "react";


export const PopularDestination: React.FC = () => {

    interface PopDestination {
        id: number,
        imgSrc: string,
        title: string,
        description: string,
        price: number
    }

    const destinationData: PopDestination[] = [
        {
            id: 1,
            imgSrc: "/assets/image44.png",
            title: "Mountain Hiking Tour",
            description: "Mountain Hiking Tour",
            price: 89,
        },
        {
            id: 2,
            imgSrc: "/assets/image45.png",
            title: "Machu Picchu, Peru",
            description: "Machu Picchu, Peru",
            price: 99,
        },
        {
            id: 3,
            imgSrc: "/assets/image46.png",
            title: "The Grand Canyon, Arizona",
            description: "Mountain Hiking Tour",
            price: 89,
        },
    ];

    return (
        <>
            <div className="px-3 md:px-6 lg:px-32 bg-offWhite pt-8 items-center pb-16">
                <div className=" flex justify-between items-center mb-8">
                    <h1 className="font-serif font-semibold text-darkGray text-3xl lg:text-6xl lg:w-1/2 leading-tight md:text-4xl md:w-1/2 md:leading-tight lg:leading-none">Find Popular Destination</h1>
                    <span className="flex gap-x-3 mr-5 md:gap-x-6">
                        <img src="/assets/arrowLeft.png" className="w-10 md:w-full" alt="arrow icon" />
                        <img src="/assets/arrowRight.png" className="w-10 md:w-full" alt="arrow icon" />
                    </span>
                </div>

                <div className="inline-flex left-10 md:overflow-x-auto overflow-x-scroll hide-scrollbar drop-shadow-xl md:px-3 w-full">
                    <div className="grid grid-cols-3 gap-56 md:gap-80 lg:gap-8 b-20">
                        {destinationData.map((item) => (
                            <div key={item.id} className="w-52 md:w-80 border-white border-2 bg-offWhite p-1 rounded-xl">
                                <img src={item.imgSrc} alt="" className="mb-2" />

                                <h3 className="text-xl w-full h-10 md:text-2xl mb-5 font-serif font-semibold md:ml-3 leading-normal">{item.title}</h3>
                                <p className="font-serif text-lightGray md:ml-3 mb-5">{item.description}</p>

                                <div className="flex items-center justify-between md:mx-3 mb-5">
                                    <p className="font-serif text-lightGray text-sm md:text-base"><span className="w-full text-xl md:text-3xl font-semibold text-darkGray">${item.price}</span> /Person</p>
                                    <button className="border-2 hover:bg-darkGray text-sm py-1 px-2 md:py-2 md:px-5 text-darkGray md:hover:py-2 md:hover:px-5 font-serif font-normal hover:text-white rounded-3xl">Book Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}