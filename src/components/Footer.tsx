import { FaRegCopyright } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="hidden lg:block mt-2 bg-[var(--color-primary)] p-1 ">
            <div className="w-[80%] mx-auto mt-5">
                <div className="flex justify-around">
                    <div className="">
                        <h1 className="text-[var(--color-third)] font-bold text-4xl">
                            <span className="text-[var(--color-secondary)]">TNN</span>
                            News</h1>
                        <p className="font-extralight text-xs">Stay tuned For all the Updates.</p>
                    </div>
                    <div>
                        <Link to={""}>
                            <img src="/playstore.png" />
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-light ">Get the latest news in your inbox</p>
                        <input className="border-b w-[90%] focus:outline-0 p-1" type="text" placeholder="Enter Your Email" />
                        <button className="block btn">Subscribe To Our Newslatter</button>
                    </div>
                </div>



                <div className="flex justify-between text-center my-9">
                    <div>
                        <h1 className="font-bold">News</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">Business</span>
                            <span>Politics</span>
                            <span>World</span>
                            <span>India</span>
                            <span>Delhi</span>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold">Opinion</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">Acadimia</span>
                            <span>Comentary</span>
                            <span>Insight</span>
                            <span>Analysis</span>
                            <span>Interview</span>
                        </div>
                    </div>

                     <div>
                        <h1 className="font-bold">Travel</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">News</span>
                            <span>Destinations</span>
                            <span>TNN Post Guide</span>
                        </div>
                    </div>

                     <div>
                        <h1 className="font-bold">Mutimedia</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">Video</span>
                            <span>Photo</span>
                            <span>Deep Dive</span>
                            <span>Podcast</span>
                        </div>
                    </div>

                     <div>
                        <h1 className="font-bold">Culture</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">LifeStyle</span>
                            <span>Entertainment</span>
                            <span>Art & Culture</span>
                            <span>Technology</span>
                            <span>People</span>
                            <span>Health</span>
                            <span>Parents</span>
                            <span>Books</span>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold">More</h1>
                        <div className="flex flex-col gap-1 items-center text-gray-800 text-sm ">
                            <span className="">Today's Paper</span>
                            <span>Jobs</span>
                            <span>Images</span>
                            <span>Community</span>
                            <span>Youth</span>
                        </div>
                    </div>
                </div>


<div>
     <hr className="my-5 text-gray-500"/>
       <div className="flex gap-5 justify-center items-center [&>*]:text-gray-700 [&>*]:cursor-pointer">
          <span>Masthead</span>
          <span>Cyber Media Guidlines</span>
          <span>Contact</span>
          <span>Advertise</span>
          <span>Paper Subscription</span>
          <span>Privacy Policy</span>
          <span>Discussion Guidline</span>
          <span>Term of Use</span>
       </div>
     <hr className="my-5 text-gray-500"/>

      <div className="flex justify-center items-center text-sm text-gray-700">
         <p><FaRegCopyright /></p>
          <span>2019-2025 TNN News Developed By Shubhanshu Saadhiyaan</span>
         </div>
</div>

            </div>
        </footer>
    )
}

export default Footer;