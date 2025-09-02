
import { Chart,LineElement,Filler,PointElement, LinearScale, CategoryScale,Tooltip,Title,Legend, type ChartOptions,  } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement,PointElement, LinearScale,CategoryScale,Tooltip,Title,Legend,Filler);

const options:ChartOptions<"line"> = {
     responsive:true,
     maintainAspectRatio:false,
     plugins:{
         legend:{display:false},
         title:{display:false},
     },
     scales:{
        x:{grid:{display:false}},
        y:{beginAtZero:true}
     }
}
 const allMonths = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
      const currentMonths = new Date().getMonth();
       const labels = allMonths.splice(0, currentMonths+1)
const lineData = {
        labels,
        datasets:[
            {
                label:"Monthly Performance",
                data:[0,9,20,40,2,8,25,45,5,15,35,55].splice(0,labels.length),
                backgroundColor:"rgba(54, 162, 235, 0.6)",
                borderColor:"rgba(54, 162, 235)",
                // fill:true, // fill under the line
                tension:0.3,
                pointRadius:5,
                pointBackgroundColor:"rgba(54, 162, 235)",
                pointBorderColor:"white"

            }
        ]
}

const LineChart = () => {
  return (
    <div className="border border-gray-300 rounded w-[97%] p-5 space-y-4 mt-5 mx-auto">
         <div className="font-medium text-sm">Monthly Performance</div>
         <div className="font-light text-xs text-gray-500">Article publication and view trends over the past 6 months</div>
         <div>
            <Line data={lineData} options={options} className="size-80"/>
         </div>
    </div>
  )
}

export default LineChart