export const Stories: React.FC = () => {
    return (
        <div className="md:gap-x-10 px-3 py-4 md:px-6 lg:px-32 lg:py-8 items-center flex flex-col md:flex-row md:justify-between bg-offWhite lg:gap-x-24">

            <div className="w-full">
                <img src="/assets/Images.png" alt="" />
            </div>

            <div>
                <h3 className="text-orange font-serif font-semibold pb-3 text-xl">Our Experience</h3>
                <h1 className="text-darkGray text-3xl lg:text-5xl md:w-3/4 font-semibold pb-4 font-serif lg:w-3/4">Our stories Have Adventures</h1>
                <p className="text-lightGray md:text-sm md:w-3/4 pb-12">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>

                <div className="flex md:gap-x-6">
                    <span className="flex justify-center flex-col">
                        <p className="text-center font-semibold m-auto text-orange text-3xl md:text-3xl lg:text-5xl mb-2">12K+</p>
                        <p className="text-center m-auto font-serif w-1/2 text-ash font-normal text-base md:text-sm md:m-auto lg:text-xl">Success Journey</p>
                    </span>

                    <span>
                        <p className="text-center font-semibold m-auto text-orange text-3xl md:text-3xl lg:text-5xl mb-2">16+</p>
                        <p className="text-center m-auto  w-1/2 font-serif text-ash font-normal md:text-sm md:m-auto text-base lg:text-xl">Awards Winning</p>
                    </span>

                    <span>
                        <p className="text-center font-semibold m-auto text-orange text-3xl lg:text-5xl mb-2 font-serif md:text-3xl">20+</p>
                        <p className="text-center m-auto w-1/2 font-serif text-ash font-normal text-base md:text-sm lg:text-xl">Years of Experience</p>
                    </span>

                </div>
            </div>
        </div>
    )
}