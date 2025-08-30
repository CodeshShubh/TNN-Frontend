import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Section1 = () => {
    return (
        <div className="border-lr w-full lg:w-[75%] mx-auto p-1 font-light font-xs leading-6">

            <hr className="mt-5 mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />
            <hr className=" mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />

            <div className="flex justify-between p-2 m-2">
                <h1 className="font-bold text-red-700">चुनाव</h1>
                <Link to={""} className="flex justify-center items-center gap-1 hover-links"><span>और देखें</span> <FaChevronRight /></Link>
            </div>


            <div className=" p-1 lg:p-3 m-1 lg:m-4">
                <div className="flex flex-col lg:flex-row gap-2">
                    <div className=" lg:ml-5 w-full lg:w-[40%]">
                        <img src="/Election.png" className=" w-[100%]" />
                    </div>
                    <div className="w-full lg:w-[60%] text-center lg:text-start space-y-5">
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
                <div className="flex flex-col lg:flex-row mt-2 text-center lg:text-start">
                    <Link className=" lg:w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                        Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="hidden lg:block line-verticle h-45 mx-5" />
                    <hr className="line" />
                    <Link className=" lg:w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                        Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="hidden lg:block line-verticle h-45 mx-5" />
                    <hr className="line" />
                    <Link className=" lg:w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                        Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>
                    <hr className="hidden lg:block line-verticle h-45 mx-5" />
                    <hr className="line" />
                    <Link className=" lg:w-110" to={""}>50% Tariffs: How PM Modi Is Standing Up To Trump And Absorbing Pressure
                        Trump And Absorbing Pressure Trump And Absorbing Pressure</Link>


                </div>
            </div>

        </div>
    )
}

export default Section1