
type CardProps = {
    heading: string,
    counts: number,
    percentage: string,
    svg: React.ReactNode
}

const CardDashboard = ({ heading, counts, percentage, svg }: CardProps) => {
    return (
        <div className="space-y-5 border border-gray-300 shadow w-[24%] p-5 m-1 rounded-2xl">
            <div className="flex justify-between items-center ">
                <h1 className="font-medium text-sm">{heading}</h1>
                {svg}
            </div>
            <div className="flex flex-col p-1">
                <h1 className="font-medium text-2xl">{counts}</h1>
                <p className="font-light text-xs text-gray-500">{percentage} from last month</p>
            </div>
        </div>
    )
}

export default CardDashboard