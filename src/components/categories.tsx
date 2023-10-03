import React, { useState } from 'react';

export interface Categories {
    id: number;
    categoryName: string;
    name: string;
    imgUrl: string;
}

const categoryData: Categories[] = [
    {
        id: 1,
        categoryName: 'Beach',
        name: 'Visite',
        imgUrl: '/assets/category1.png',
    },
    {
        id: 2,
        categoryName: 'Desert',
        name: 'Sahara',
        imgUrl: '/assets/category2.png',
    },
    {
        id: 3,
        categoryName: 'Mountain',
        name: 'Mt.Everest',
        imgUrl: '/assets/category3.png',
    },
    {
        id: 4,
        categoryName: 'Temple',
        name: 'Thailand',
        imgUrl: '/assets/category4.png',
    },
    {
        id: 5,
        categoryName: 'Tower',
        name: 'Sans Francisco',
        imgUrl: '/assets/category5.png',
    },
    {
        id: 6,
        categoryName: 'Pyramid',
        name: 'Egypt',
        imgUrl: '/assets/category6.png',
    },
];

export const Category: React.FC = () => {
    const [hover, setHover] = useState<boolean[]>(Array(categoryData.length).fill(false));

    const handleHover = (index: number) => {
        setHover((prev) => {
            const updated = [...prev]; // make a copy of the array
            updated[index] = true; // toggle the value at the given index
            return updated;
        });
    };

    const handleHoverOut = (index: number) => {
        setHover((prev) => {
            const updated = [...prev]; // make a copy of the array
            updated[index] = false; // toggle the value at the given index
            return updated;
        });
    };

    return (
        <>
            <div className="px-3 lg:px-32 md:px-6 bg-offWhite py-12 ">
                <div className="flex justify-between items-center pb-3">
                    <h1 className="font-serif text-3xl lg:text-5xl text-darkGray font-semibold">Categories</h1>
                    <span className="md:flex gap-x-3 md:gap-x-6 hidden items-center">
                        <img className='w-10 lg:w-full' src="/assets/arrowLeft.png" alt="" />
                        <img className='w-10 lg:w-full' src="/assets/arrowRight.png" alt="" />
                    </span>
                </div>
                <span>
                    <p className="lg:w-4/12 md:w-1/2 text-base font-serif font-normal text-lightGray">
                        Here are lots of interesting destinations to visit, but don't be confused-they are already grouped by category.
                    </p>
                </span>

                {categoryData.map((item, index) => {
                    return (
                        <div className=" md:inline-flex flex gap-5 flex-row justify-center" key={item.id}>
                            <div className="lg:w-11/12 md:w-3/4 mt-10">
                                <div onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHoverOut(index)}>

                                    {hover[index] ?
                                        <p key={`hover-${index}`} className="ml-6  text-medium text-lg text-white font-semibold font-serif absolute mt-28">{item.name}</p>
                                        :
                                        null
                                    }
                                    <img src={item.imgUrl} alt="" />
                                </div>

                                <p className='text-center text-darkGray text-xl mt-5'>{item.categoryName}</p>

                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}