import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";


const Admin_management = () => {
  return (
    <div className="border h-screen">
      <div>
        <div>
          <div>
            <h1>Articles Management</h1>
            <p>Manage all articles and their publication status</p>
          </div>
          <div>
            <button><IoMdAdd />New Article</button>
          </div>
        </div>

        {/* article list setion */}
        <div>
              <div>
                 <h1>All Articles</h1>
                 <p>6 of 6 articles</p>
              </div>

              <div>
                   <div><IoSearch /><input placeholder="Search articles or author"/></div>
                   <div>
                     <CiFilter />All<FaAngleDown />
                   </div>
                   <div>All<FaAngleDown /></div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_management