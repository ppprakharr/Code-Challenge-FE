import Instagram from '../assets/instagram.svg'
import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import YouTube from '../assets/youtube.svg'
const Footer = () => {
    return(
        <div className="bg-white">
        <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:py-12">
            <div className="flex flex-col justify-between items-center">
            <div className="flex gap-2">
                {/* external links todo */}
                <img className="w-6 h-6" src={Instagram} />
                <img className="w-6 h-6" src={LinkedIn} />
                <img className="w-6 h-6" src={GitHub} />
                <img className="w-6 h-6" src={YouTube} />
            </div>
                <p className="mt-4 font-medium text-sm text-gray-600">  
                © 2024 Fudgy Developers Ltd. All rights reserved 🐾
                </p>
                <p className="flex gap-2 items center font-medium text-sm text-gray-600">  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path  inecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                    Developer by Prakhar for test.
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-red-500">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                </p>

            </div>
        </div>
        </div>
    )
}

export default Footer