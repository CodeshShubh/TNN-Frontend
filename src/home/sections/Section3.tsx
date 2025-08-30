import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Section3 = () => {
    return (
        <div className="border-lr w-full lg:w-[75%] mx-auto p-1 font-light font-xs leading-6">

            <hr className="mt-5 mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />
            <hr className=" mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />

            <div className="flex justify-between p-2 m-2">
                <h1 className="font-bold text-red-700">खेल</h1>
                <Link to={""} className="flex justify-center items-center gap-1 hover-links"><span>और देखें</span> <FaChevronRight /></Link>
            </div>

            {/* content */}
            <div className="w-full flex flex-col lg:flex-row  gap-6 p-2 m-1 ">

                <div className="">
                    <img src="/Enter01.png" width={600} />
                    <Link to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                        अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                </div>

                <div className=" p-1 lg:pr-6  w-full lg:w-[50%]">
                    <div className=" flex gap-1">
                        <Link className="" to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                        <div className="">
                            <img src="/Enter1.png" width={200} height={200} />
                        </div>

                    </div>
                    <hr className="my-2 text-gray-300" />

                    <div className=" flex gap-1">
                        <Link className="" to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                        <div className="">
                            <img src="/Enter1.png" width={200} height={200} />
                        </div>

                    </div>
                    <hr className="my-2 text-gray-300" />

                    <div className=" flex gap-1">
                        <Link className="" to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                        <div className="">
                            <img src="/Enter1.png" width={200} height={200} />
                        </div>

                    </div>
                    <hr className="my-2 text-gray-300" />

                    <div className=" flex gap-1">
                        <Link className="" to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                        <div className="">
                            <img src="/Enter1.png" width={200} height={200} />
                        </div>

                    </div>
                    <hr className="my-2 text-gray-300" />

                    <div className=" flex gap-1">
                        <Link className="" to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                        <div className="">
                            <img src="/Enter1.png" width={200} height={200} />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section3