import { Outlet } from "react-router-dom"
import AsideDashboard from "./dashboard/dash_comp/AsideDashboard"

const DashboardLayout = () => {
  return (

    <div className="w-full h-screen flex ">
      {/* aside */}
      <aside className=" w-[18%] h-screen">
        <AsideDashboard />
      </aside>

      {/* main */}
      <main className=" w-[82%] overflow-y-auto bg-white">
        <Outlet />
      </main>

    </div>

  )
}

export default DashboardLayout