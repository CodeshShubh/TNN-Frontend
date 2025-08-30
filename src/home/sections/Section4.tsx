import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className="border-lr w-[75%] mx-auto p-1">
      <hr className="mt-5 mb-1 w-[90%] text-gray-300 mx-auto" />
      <hr className=" mb-1 w-[90%] text-gray-300 mx-auto" />


      <div>
        <div className="flex justify-between p-2 m-2">
          <h1 className="font-bold text-red-700">ट्रेंडिंग वीडियो</h1>
          <Link to={''} className="flex justify-center items-center gap-1 hover-links"><span>ट्रेंडिंग वीडियो</span> <FaChevronRight /></Link>
        </div>


        <div className="m-5 flex gap-4">


          <div className="w-60 text-center flex flex-col justify-center items-center">
            <div>
              <img src="/pic1.png" />
            </div>
            <p>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
              अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
          </div>

                    <div className="w-60 text-center flex flex-col justify-center items-center">
            <div>
              <img src="/pic1.png" />
            </div>
            <p>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
              अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
          </div>

                    <div className="w-60 text-center flex flex-col justify-center items-center">
            <div>
              <img src="/pic1.png" />
            </div>
            <p>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
              अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
          </div>

                    <div className="w-60 text-center flex flex-col justify-center items-center">
            <div>
              <img src="/pic1.png" />
            </div>
            <p>आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर
              अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
          </div>

  
 

        </div>


      </div>

    </div>
  )
}

export default Section4