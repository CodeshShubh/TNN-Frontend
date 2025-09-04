import { IoMdAdd, IoMdEye } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";






const AdminArticles = () => {
  return (
    <div className="  w-full p-1 h-screen">
      <div className="p-4 ">
        <div className="  flex justify-between">
          <div>
            <h1 className="font-medium text-xl">Articles Management</h1>
            <p className="text-xs text-gray-500">Manage all articles and their publication status</p>
          </div>
          <div>
            <button className="flex justify-center items-center gap-1 px-2 btn  text-sm "><IoMdAdd className="size-4 text-white" />New Article</button>
          </div>
        </div>

        {/* article list setion */}
        <div className="border border-gray-300 rounded flex flex-col gap-3  mt-5 p-4">
          <div className=" space-y-2">
            <h1 className="font-medium text-sm text-black">All Articles</h1>
            <p className="text-gray-500 text-sm">6 of 6 articles</p>
          </div>

          <div className=" flex items-center gap-4 w-full ">
            <div className="p-1.5 rounded border border-gray-300 bg-gray-300 flex items-center w-[60%] gap-3">
              <IoSearch className="text-gray-600" />
              <input className="outline-none  text-xs w-full" placeholder="Search articles or author" />
            </div>
            <div className=" flex justify-around items-center gap-1 w-[40%] cursor-pointer [&>*]:text-xs [&>*]:text-gray-600 [&>*]:p-1.5">
              <p className=" rounded border border-gray-300 bg-gray-300 w-[40%] flex justify-around items-center gpa-4"><CiFilter />All<FaAngleDown /></p>
              <p className=" rounded border border-gray-300 bg-gray-300 w-[40%] flex items-center justify-around gap-1 cursor-pointer">All<FaAngleDown /></p>
            </div>
          </div>

          <div className=" border border-gray-300 rounded w-full mt-3 p-4 overflow-y-auto overflow-x-auto h-[500px]">
            <table className="w-full border-collapse p-1 table-auto">
              <thead className="border border-gray-300">
                <tr className="[&>*]:text-sm [&>*]:text-left  [&>th]:py-2">
                  <th className="flex  justify-start ml-2">Article</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Published</th>
                  <th className="flex  justify-end mr-2">Actions</th>
                </tr>

              </thead>
              <tbody className="[&>*]:text-sm ">
                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>

                <tr className="border border-gray-300">
                  <td className="flex flex-col ml-2">Breaking: Major Political Development Shakes Nation
                    <p className="text-xs text-gray-400">Last modified: 2024-01-15</p>
                  </td>
                  <td>Politics</td>
                  <td>Sarah Johnson</td>
                  <td>Published</td>
                  <td>12,543</td>
                  <td className="">2024-01-15</td>
                  <td className="flex justify-between  gap-2 p-3 [&>*]:size-4">
                    <IoMdEye />
                  <FiEdit />
                  <RiDeleteBin6Line /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminArticles