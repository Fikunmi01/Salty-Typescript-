interface Footer {
    id: number,
    heading: string,
    linkOne: string,
    linkTwo: string,
    linkThree: string,
    linkFour: string,
}

const footerArray: Footer[] = [
    {
        id: 1,
        heading: "Resources",
        linkOne: "Download",
        linkTwo: "Help Center",
        linkThree: "Guide Book",
        linkFour: "App Directory",
    },
    {
        id: 2,
        heading: "Travellers",
        linkOne: "Why Travellers",
        linkTwo: "Enterprise",
        linkThree: "Customer Stories",
        linkFour: "Instagram post",
    },
    {
        id: 3,
        heading: "Company",
        linkOne: "Travelling",
        linkTwo: "About Location",
        linkThree: "Success",
        linkFour: "Information",
    },
    {
        id: 4,
        heading: "Get App",
        linkOne: "App Store",
        linkTwo: "Google Play Store",
        linkThree: "",
        linkFour: "",
    },
]

export const Footer: React.FC = () => {
    return (
        <>
            <div className="bg-offWhite relative pb-20">
                <div className="lg:mx-32 mx-5 lg:py-10 rounded-2xl bg-cream h-80 mb-40 relative">
                    <img src="/assets/Intersect.png" alt="" className="absolute md:top-0 md:h-96 h-full w-fit" />
                    <h1 className="text-center font-sans text-3xl w-4/5 m-auto lg:text-4xl leading-normal text-darkGray lg:leading-loose pt-10 font-semibold">Sign up to our newsletter</h1>
                    <p className="text-center pb-7 text-lightGray font-serif text-base w-4/5 lg:w-5/12 font-normal m-auto">Receive latest news, update, and many other things every week.</p>

                    <span className="flex justify-center flex-row relative">
                        <input type="text" className="md:w-96 h-14 p-5 rounded-2xl text-sm font-sans text-lightGray outline-none" placeholder="Enter your email address" />
                        <img src="" alt="" />
                    </span>
                </div>

                <div className="md:px-10 lg:px-32 px-3 flex flex-col md:flex md:flex-col lg:flex-row md:gap-10 lg:gap-60 ">
                    <div>
                        <span className="flex items-center gap-2 mb-4">
                            <img src="/assets/Logo.png" alt="" />
                            <h3 className="font-sen font-bold text-darkGray text-xl">Salty</h3>
                        </span>

                        <p className="font-serif text-lightGray w-36 text-base mb-5 md:mb-10">Enjoy the touring with Salty</p>

                        <span className="inline-flex">
                            <img className="pr-3" src="/assets/fbIcon.png" alt="" />
                            <img className="pr-3" src="/assets/igIcon.png" alt="" />
                            <img src="/assets/twitterIcon.png" alt="" />
                        </span>
                    </div>

                    <div className="md:inline-flex gap-12">

                        {footerArray.map((footer) => {
                            return (
                                <div key={footer.id}>
                                    <h3 className="text-lg text-darkGray font-serif font-bold mb-4">{footer.heading}</h3>

                                    <p className="test-sm font-serif text-lightGray leading-8 w-36">{footer.linkOne}</p>
                                    <p className="test-sm font-serif text-lightGray leading-8 w-36">{footer.linkTwo}</p>
                                    <p className="test-sm font-serif text-lightGray leading-8 w-36">{footer.linkThree}</p>
                                    <p className="test-sm font-serif text-lightGray leading-8 w-36">{footer.linkFour}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}