import AsideDashboard from "./dash_comp/AsideDashboard"
import DashboardMain from "./DashboardMain"


const Dashboard = () => {
    return (
        <main className="w-full h-screen flex ">
            {/* aside */}
            <div className=" w-[18%] h-screen">
                <AsideDashboard />
            </div>

            {/* main */}
            <div className="border w-[82%] overflow-y-auto">
                <DashboardMain />
            </div>

        </main>
    )
}

export default Dashboard