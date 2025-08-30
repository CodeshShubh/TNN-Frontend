import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "../links/Links";
import { useEffect, useState } from "react";






const Navbar = () => {
    const [isScrolled, setisScrolled] = useState<boolean>(false)
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setisScrolled(true)
            } else {
                setisScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    console.log(isScrolled)
    console.log(window.scrollY)
    return (

        <>
        {/* small navbar */}
           <nav className={`hidden lg:block bg-[var(--color-primary)] shadow-2xl z-50 p-5 sticky top-0 left-0 w-full transition-all duration-300
                 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>

                    <div className="flex gap-40 items-center px-10">
                        <div className="flex gap-5 items-center">
                            <CiSearch className="size-5" />
                             <Link to={'/'}><h1 className=" text-[var(--color-third)] font-dancing text-xl">< span className="  text-[var(--color-secondary)]">TNN</span>
                            World</h1>
                        </Link>
                        </div>

                        <div className=" flex gap-6">
                            {
                            navItems.links.map((itm, i) => {
                                return (
                                    <Link className="font-bold" to={`${itm.href}`} key={i}>{itm.name}</Link>
                                )
                            })
                        }
                        </div>

                        <div className="flex items-center gap-3">
                            <RxAvatar className=" stroke-[0.2] cursor-pointer" />
                            <Link to={'/login'} className="font-semibold ">Login</Link>

                        </div>
                    </div>


                </nav> 

                {/* Big NavBar */}
                    <nav className={` bg-[var(--color-primary)]  shadow-2xl z-50 absolute top-0 left-0 w-full transition-all duration-300
                      ${isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}>
                        <div className=" flex justify-between items-center p-3 lg:p-4 mx-2 lg:mx-8">
                            <div className="">
                                <CiSearch className="size-5 lg:size-7 stroke-[1] cursor-pointer" />
                            </div>

                            <Link to={'/'}><h1 className=" font-bold text-3xl lg:text-5xl  text-[var(--color-third)] font-dancing ">< span className=" p-1 text-[var(--color-secondary)]">TNN</span>World</h1></Link>
                            <div className=" hidden lg:flex justify-between   items-center gap-3 ">
                                <RxAvatar className="size-6 stroke-[0.2] cursor-pointer" />
                                <Link to={'/login'} className="font-semibold ">Login</Link>

                            </div>
                            <RxHamburgerMenu className="size-5 cursor-pointer block lg:hidden" />
                        </div>

                        <div className="  hidden lg:flex justify-center gap-15 p-3 ">
                            {
                                navItems.links.map((itm, i) => {
                                    return (
                                        <Link className="font-bold" to={`${itm.href}`} key={i}>{itm.name}</Link>
                                    )
                                })
                            }
                        </div>

                    </nav>

        </>
    )
}

export default Navbar