import { IoMdPerson } from "react-icons/io";


const ManagementCards = () => {
  return (
       <div className="border border-gray-300 w-[23%] rounded">
          <div className="p-4 space-y-9">
             <div className="flex justify-between items-center">
              <h1 className="font-semibold text-sm">Total Admins</h1>
             <IoMdPerson />
             </div>
             <div>
                <p className="font-semibold text-2xl">5</p>
             </div>
          </div>
       </div>
  )
}

export default ManagementCards