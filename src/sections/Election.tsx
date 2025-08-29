import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Election = () => {
    return (
        <div className="border-lr w-[75%] mx-auto p-1 font-light font-xs leading-6">

            <hr className="mt-5 mb-1 w-[90%] text-gray-300 mx-auto" />
            <hr className=" mb-1 w-[90%] text-gray-300 mx-auto" />

            <div className="flex justify-between p-2 m-2">
                <h1 className="font-bold text-red-700">चुनाव</h1>
                <Link to={""} className="flex justify-center items-center gap-1 hover-links"><span>और देखें</span> <FaChevronRight /></Link>
            </div>


            <div className="p-3 m-4">
                <div className="flex gap-2">
                    <div className=" ml-5 w-[40%]">
                        <img src="/Election.png" className=" w-[100%]" />
                    </div>
                    <div className=" w-[60%] space-y-5">
                        <h1 className="font-semibold text-2xl">

                            Photos showing Greater Noida woman Nikki Bhatishe with her husband Vipin Bhati
                            'Cylinder Blast':
                        </h1>

                        <p className="font-light">
                            A hospital memo claims Greater Noida woman Nikki Bhati suffered
                            severe burns in a gas cylinder blast, while her family has accused
                            husband Vipin Bhati of setting her ablaze.

                        </p>
                    </div>
                </div>
                <hr className="line" />
                <div className="flex mt-2">
                    <Link className=" w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                    Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="line-verticle h-45 mx-5" />

                    <Link className=" w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                    Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="line-verticle h-45 mx-5" />

                    <Link className=" w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                    Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="line-verticle h-45 mx-5" />

                    <Link className=" w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                    Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>


                </div>
            </div>

        </div>
    )
}

export default Election