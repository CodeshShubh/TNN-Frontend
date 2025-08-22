import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import type { NavItems } from "../types/navbarTypes";



const navItems: NavItems = {
    logo: 'TNN WORLD',
    links: [
        { name: 'होम', href: '/' },
        { name: 'भारत', href: '/india' },
        { name: 'चुनाव', href: '/elelction' },
        { name: 'मनोरंजन', href: '/entertainment' },
        { name: 'लाइफस्टाइल', href: '/lifestyle' },
        { name: 'खेल', href: '/sports' },
        { name: 'लाइव', href: '/live' },
    ]
}


const Navbar = () => {
    return (

        <nav className="bg-black text-white">
            <div>
                <CiSearch />
                <Link to={'/'}><h1>{navItems.logo}</h1></Link>
                <div>
                    <RxAvatar />
                    <p>Login</p>
                </div>
            </div>
            {
                navItems.links.map((itm, i) => {
                    return (
                        <div key={i}>
                            <Link to={`${itm.href}`}>{itm.name}</Link>
                        </div>
                    )
                })
            }

        </nav>
    )
}

export default Navbar