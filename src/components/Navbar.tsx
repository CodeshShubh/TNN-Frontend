import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "./Links";






const Navbar = () => {
    return (

        <nav className=" bg-[var(--color-primary)] sticky top-0 shadow-2xl ">
            <div className=" flex justify-between items-center p-3 lg:p-6 mx-2 lg:mx-8">
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
    )
}

export default Navbar