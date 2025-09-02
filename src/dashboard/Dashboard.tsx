import CardDashboard from "./dash_comp/CardDashboard"
import { FaFileLines } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { HiTrendingUp } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import BarPieChart from "./dash_comp/BarPieChart";
import LineChart from "./dash_comp/LineChart";
import TrandingArticlesList from "./dash_comp/TrandingArticlesList";


const Dashboard = () => {
    return (
        <section className="">

            <div className="p-4 m-1">
                <h1 className="font-bold">Dashboard Overview</h1>
                <p className="font-light text-sm text-gray-500">Welcome back! Here's what's happening with your news platform.</p>
            </div>

{/* cards1 */}
            <div className=" w-full flex justify-around items-center">
                <CardDashboard heading={"Total Articles"} counts={810} percentage={"12%"}
                    svg={<FaFileLines className="size-4 text-gray-700" />} />
                <CardDashboard heading={"Total Admins"} counts={8} percentage={"2"}
                    svg={<IoIosPeople className="size-5 text-gray-700" />} />
                <CardDashboard heading={"Total Views"} counts={9450} percentage={"8%"}
                    svg={<HiTrendingUp className="size-5 text-gray-700" />} />
                <CardDashboard heading={"Avg. Views/Article"} counts={12} percentage={"2.5"}
                    svg={<AiOutlineEye className="size-5 text-gray-700" />} />
            </div>

     {/* Cards2 */}
            <div>
              <BarPieChart/>
              <LineChart/>
              <TrandingArticlesList/>
            </div>

        </section>
    )
}

export default Dashboard