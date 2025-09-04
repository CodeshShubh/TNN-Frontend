
import { IoMdAdd } from "react-icons/io";
import ManagementCards from "./ManagementCards";
import { FaCrown } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";



const AdminManagement = () => {
  return (
    <div className="p-5 mt-2">

      <div className="flex  justify-between">
        <div>
          <h1 className="font-medium text-sm">Admin Management</h1>
          <p className="font-light text-sm text-gray-400">Manage admin users and their permissions</p>
        </div>
        <div className="flex items-center text-sm btn cursor-pointer hover:opacity-90  ">
          <IoMdAdd className="size-4 text-white" />
          <button>Add Admin</button>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <ManagementCards />
        <ManagementCards />
        <ManagementCards />
        <ManagementCards />
      </div>


      <div className="border border-gray-300 mt-5 p-5 rounded">

        <div >
          <h1 className="font-medium text-sm">All Admins</h1>
          <p className="font-light text-sm text-gray-400">Manage admin accounts and permissions</p>
        </div>

        <div className=" w-full mt-2">
          <table className="w-full border-collapse table-auto ">
            <thead className="border border-gray-300">
              <tr className="font-medium text-sm text-left [&>*]:py-2">
                <th className="flex ml-2">Admin</th>
                <th>Role</th>
                <th>Status</th>
                <th>Articles</th>
                <th>Last Login</th>
                <th>Joined</th>
                <th className="flex justify-end mr-2">Actions</th>
              </tr>
            </thead>
            <tbody className="[&>*]:text-sm">
  

              <tr className="border border-gray-300 ">
                <td className="flex items-center p-2 gap-1">
                  <p className="w-[30px] h-[30px] border rounded-full items-center"></p>
                  <div >
                    <h1 className="font-medium text-xs">John Doe</h1>
                    <p className="font-light text-xs text-gray-400">john@newshub.com</p>
                  </div>
                </td>
                <td>
                  <div className="bg-violet-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <FaCrown className="inline-block size-3" />
                    <p className="inline-block text-xs text-violet-800">Super Admin</p>
                  </div>
                </td>
                <td>
                   <div className="bg-green-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <p className="text-xs">Active</p>
                   </div>
                </td>  {/* Inactive */}
                <td>45</td>
                <td>2024-01-15 09:30</td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex justify-between items-center">
                    <TiEdit className="cursor-pointer size-4" />
                    <Link to={""} className=" ">Activate</Link> {/* OR <button>Deactivate</button> */}
                    <MdDeleteOutline className="cursor-pointer size-4 mr-1.5" />
                  </div>
                </td>
              </tr>

              <tr className="border border-gray-300 ">
                <td className="flex items-center p-2 gap-1">
                  <p className="w-[30px] h-[30px] border rounded-full items-center"></p>
                  <div >
                    <h1 className="font-medium text-xs">John Doe</h1>
                    <p className="font-light text-xs text-gray-400">john@newshub.com</p>
                  </div>
                </td>
                <td>
                  <div className="bg-violet-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <FaCrown className="inline-block size-3" />
                    <p className="inline-block text-xs text-violet-800">Super Admin</p>
                  </div>
                </td>
                <td>
                   <div className="bg-green-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <p className="text-xs">Active</p>
                   </div>
                </td>  {/* Inactive */}
                <td>45</td>
                <td>2024-01-15 09:30</td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex justify-between items-center">
                    <TiEdit className="cursor-pointer size-4" />
                    <Link to={""} className=" ">Activate</Link> {/* OR <button>Deactivate</button> */}
                    <MdDeleteOutline className="cursor-pointer size-4 mr-1.5" />
                  </div>
                </td>
              </tr>

              <tr className="border border-gray-300 ">
                <td className="flex items-center p-2 gap-1">
                  <p className="w-[30px] h-[30px] border rounded-full items-center"></p>
                  <div >
                    <h1 className="font-medium text-xs">John Doe</h1>
                    <p className="font-light text-xs text-gray-400">john@newshub.com</p>
                  </div>
                </td>
                <td>
                  <div className="bg-violet-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <FaCrown className="inline-block size-3" />
                    <p className="inline-block text-xs text-violet-800">Super Admin</p>
                  </div>
                </td>
                <td>
                   <div className="bg-green-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <p className="text-xs">Active</p>
                   </div>
                </td>  {/* Inactive */}
                <td>45</td>
                <td>2024-01-15 09:30</td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex justify-between items-center">
                    <TiEdit className="cursor-pointer size-4" />
                    <Link to={""} className=" ">Activate</Link> {/* OR <button>Deactivate</button> */}
                    <MdDeleteOutline className="cursor-pointer size-4 mr-1.5" />
                  </div>
                </td>
              </tr>

              <tr className="border border-gray-300 ">
                <td className="flex items-center p-2 gap-1">
                  <p className="w-[30px] h-[30px] border rounded-full items-center"></p>
                  <div >
                    <h1 className="font-medium text-xs">John Doe</h1>
                    <p className="font-light text-xs text-gray-400">john@newshub.com</p>
                  </div>
                </td>
                <td>
                  <div className="bg-violet-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <FaCrown className="inline-block size-3" />
                    <p className="inline-block text-xs text-violet-800">Super Admin</p>
                  </div>
                </td>
                <td>
                   <div className="bg-green-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <p className="text-xs">Active</p>
                   </div>
                </td>  {/* Inactive */}
                <td>45</td>
                <td>2024-01-15 09:30</td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex justify-between items-center">
                    <TiEdit className="cursor-pointer size-4" />
                    <Link to={""} className=" ">Activate</Link> {/* OR <button>Deactivate</button> */}
                    <MdDeleteOutline className="cursor-pointer size-4 mr-1.5" />
                  </div>
                </td>
              </tr>

              <tr className="border border-gray-300 ">
                <td className="flex items-center p-2 gap-1">
                  <p className="w-[30px] h-[30px] border rounded-full items-center"></p>
                  <div >
                    <h1 className="font-medium text-xs">John Doe</h1>
                    <p className="font-light text-xs text-gray-400">john@newshub.com</p>
                  </div>
                </td>
                <td>
                  <div className="bg-violet-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <FaCrown className="inline-block size-3" />
                    <p className="inline-block text-xs text-violet-800">Super Admin</p>
                  </div>
                </td>
                <td>
                   <div className="bg-green-200 w-[110px] rounded-xl py-0.5 flex justify-around items-center">
                    <p className="text-xs">Active</p>
                   </div>
                </td>  {/* Inactive */}
                <td>45</td>
                <td>2024-01-15 09:30</td>
                <td>2023-01-15</td>
                <td>
                  <div className="flex justify-between items-center">
                    <TiEdit className="cursor-pointer size-4" />
                    <Link to={""} className=" ">Activate</Link> {/* OR <button>Deactivate</button> */}
                    <MdDeleteOutline className="cursor-pointer size-4 mr-1.5" />
                  </div>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default AdminManagement