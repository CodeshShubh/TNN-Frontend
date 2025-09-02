import { FaFileLines } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { HiTrendingUp } from "react-icons/hi";
import { IoPersonCircle, IoSettings, IoLogOutOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const AsideDashboard = () => {
    
       
  return (
    <section className="bg-gray-200 p-1 h-full flex flex-col shadow-xl ">

      {/* header */}
      <div className="p-1 m-2 flex justify-start gap-3 items-center ">
         <div>
           <FaFileLines size={30} className="mb-0.5" />
         </div>
        <div className="leading-4 flex flex-col items-center">
          <h1 className="font-medium">TNN-News Admin</h1>
          <p className="font-light text-xs text-gray-600">Content Management</p>
        </div>
      </div>


      <hr className="line w-full" />


      {/* navigation */}
      <div className="p-1 m-2 mt-3 flex flex-col">
        <h1 className="font-light text-xs text-gray-600">Navigation</h1>
        <div className="flex flex-col gap-4 [&>*]:flex [&>*]:items-center [&>*]:gap-2  mt-5
         [&>*]:font-medium text-sm">
          <Link to={""}><AiOutlineHome className="size-6" />Dashboard</Link>
          <Link to={"admin_management"}><IoIosPeople className="size-6"  />Admin Management</Link>
          <Link to={"articles"}><FaFileLines className="size-6" />Articles</Link>
          <Link to={"write_articles"}><CiCirclePlus className="size-6" />Write Article</Link>
          <Link to={"tranding"}><HiTrendingUp className="size-6" />Trending</Link>
        </div>
      </div>

      {/* account */}
      <div className="p-1 m-2 mt-3 flex flex-col">
        <h1 className="font-light text-xs text-gray-600">Account</h1>
        <div className="flex flex-col gap-4 [&>*]:flex [&>*]:items-center [&>*]:gap-2  mt-5
         [&>*]:font-medium text-sm">
          <Link to={""}><IoPersonCircle className="size-6" />Profile</Link>
          <Link to={""}><IoSettings className="size-6"/>Settings</Link>
        </div>
      </div>

      

      {/*  Logout section */}
      <div className="mt-auto  m-2">
        <hr className="line p-0" />
        <div className="flex p-1 gap-3 items-center">
          <div><RxAvatar className="size-6" /></div>
          <div >
            <h3 className="text-sm font-medium">John Doe</h3>
            <p className="text-xs text-gray-600">Admin</p>
          </div>
        </div>
        <div className=" mt-5">
          <button className="btn_dashboard"><IoLogOutOutline className="size-5" />Logout</button>
        </div>
      </div>
    </section>
  )
}

export default AsideDashboard