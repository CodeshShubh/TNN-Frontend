import { Bar, Pie } from "react-chartjs-2"
import { Chart, BarElement, ArcElement, LinearScale, CategoryScale, Tooltip, Title, Legend, type ChartOptions } from "chart.js";

Chart.register(BarElement, ArcElement, LinearScale, CategoryScale, Tooltip, Title, Legend)



const commonOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: false, text: "Total Articles" }
  },
  scales: {
    x: { grid: { display: false } },
    y: { beginAtZero: true }
  }
};
// logic for current month showing
 const allMonths = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const currentMonth = new Date().getMonth();

const labels = allMonths.slice(0, currentMonth+1) // because we got less moth when we use new Date for sept 8+1




const barData = {
  labels,
  datasets: [
    {
      label: "Total Articles",
      data: [10, 20, 30, 40, 50, 70, 12, 15, 90, 100, 106, 200].slice(0,labels.length),
      backgroundColor: [
        "rgba(54, 162, 235, 0.6)"
      ],
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1
    },
    {
      label: "Views Count",
      data: [110, 30, 70, 36, 65, 85, 15, 87, 40, 10, 60, 100],
      backgroundColor: [
        "rgba(255, 105, 180, 0.6)"
      ],
      borderColor: "rgba(255, 105, 180)",
      borderWidth: 1
    }

  ]
}

// Options for Pie chart
const pieOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { text: "Articles Category", display: false },
  },

}

const pieData = {
  labels: ["भारत", "चुनाव", "मनोरंजन", "लाइफस्टाइल", "खेल", "लाइव", "इंटरव्यू", "शॉपिंग"],
  datasets: [
    {
      label: "Article Category",
      data: [10, 50, 90, 100, 20, 40, 80, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 205, 86, 0.6)",
        "rgba(255, 105, 180, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(201, 203, 207, 0.6)",
        "rgba(255, 159, 64, 0.6)"
      ],
      borderColor: "white",
      borderWidth: 1
    }
  ]

}


const CardDashbord2 = () => {
  return (
    <div className=" flex w-full justify-around mt-5">
      {/* barChart */}
      <div className="border border-gray-300 rounded w-[47%] p-5 space-y-4">
        <div>
          <h1 className="font-medium text-sm">Articles by Category</h1>
          <p className="font-light text-xs text-gray-500">Distribution of published articles across different categories</p>
        </div>

        <div>
          <Bar data={barData} options={commonOptions} className="size-80" />
        </div>
      </div>

      {/* pie Chart */}
      <div className="border border-gray-300 rounded w-[47%] p-5 space-y-4">
        <div>
          <h1 className="font-medium text-sm">Category Distribution</h1>
          <p className="font-light text-xs text-gray-500">Percentage breakdown of articles by category</p>
        </div>
        <div>
          <Pie data={pieData} options={pieOptions} className="size-80" />
        </div>
      </div>

    </div>
  )
}

export default CardDashbord2