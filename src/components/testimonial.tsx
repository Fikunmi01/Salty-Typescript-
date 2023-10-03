
export const Testimonial: React.FC = () => {
    return (
        <>
            <div className="flex md:px-6 py-10 flex-col lg:flex lg:px-32 px-3 bg-offWhite md:flex-row md:justify-between md:gap-1 lg:gap-48 lg:pb-20">
                <div className="w-full justify-center flex">
                    <img className="md:w-full" src="/assets/imageTestimonial.png" alt="" />
                </div>

                <div>
                    <div className="md:left-10 relative">
                        <div className="mt-4 py-1 w-16 md:mb-3 rounded-lg bg-cream"></div>
                        <h1 className="font-serif font-semibold text-4xl lg:text-5xl md:text-4xl md:w-3/4 w-full leading-snug mb-5">A Customer Said About Us:</h1>

                    </div>
                    <div className="w-11/12 lg:px-8 m-auto p-5 md:p-3 lg:py-7 rounded-xl bg-white md:w-9/12 lg:w-full">
                        <p className="font-serif text-lg text-lightGray font-normal md:text-base pb-10">
                            Salty helped me a lot finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place, its history as well as its best features.
                        </p>

                        <span className="inline-flex">
                            <img src="/assets/starIcon.png" alt="rating png" />
                            <img src="/assets/starIcon.png" alt="rating png" />
                            <img src="/assets/starIcon.png" alt="rating png" />
                            <img src="/assets/starIcon.png" alt="rating png" />
                            <img src="/assets/starIcon.png" alt="rating png" />
                        </span>

                        <div className="flex justify-between items-center">

                            <span>
                                <p>Andrew Sarma</p>
                                <p>Entrepeneur</p>

                            </span>

                            <span className="flex gap-3 md:gap-5">
                                <img src="/assets/arrowLeft.png" className="w-10 md:w-full" alt="arrow left" />
                                <img src="/assets/arrowRight.png" className="w-10 md:w-full" alt="arrow right" />

                            </span>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}