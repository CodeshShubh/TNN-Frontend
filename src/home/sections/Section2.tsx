import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"


const Section2 = () => {
    return (
        <div className="border-lr w-full lg:w-[80%] mx-auto p-1 font-light font-xs leading-6">

            <hr className="mt-5 mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />
            <hr className=" mb-1 w-full lg:w-[90%] text-gray-300 mx-auto" />

            <div className="flex justify-between p-2 m-2">
                <h1 className="font-bold text-red-700">मनोरंजन</h1>
                <Link to={""} className="flex justify-center items-center gap-1 hover-links"><span>और देखें</span> <FaChevronRight /></Link>
            </div>

            <div className=" w-full flex flex-col lg:flex-row justify-center gap-4 text-center lg:text-start p-2 ">

                <div className=" w-full lg:w-[50%]">
                    <img src="/Enter01.png" width={600} />
                    <Link to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                        अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                </div>
                     <hr className="line"/>
                <div className=" w-full lg:w-[45%] flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-2 [&>*]:mx-auto ">
                    <div className=" flex flex-row lg:flex-col  gap-1 ">
                        <img src="/Enter1.png" />
                        <Link  to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                    </div>
                    
                    <div className=" flex flex-row lg:flex-col  gap-1">
                        <img src="/Enter2.png" />
                        <Link to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                    </div>
                    <div className=" flex flex-row lg:flex-col  gap-1">
                        <img src="/Enter1.png" />
                        <Link to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                    </div>
                    <div className=" flex flex-row lg:flex-col  gap-1">
                        <img src="/Enter1.png" />
                        <Link to={""}>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
                            अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section2