import HomeBottom from "./sections/HomeBottom";
import AsideHome from "./sections/AsideHome";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import HomePhone from "./sections/HomePhone";



const Home = () => {
  return (
    <>
      <main className="border-trl w-[100%] lg:w-[75%] mx-auto lg:flex gap-5 no-bottom-shadow  lg:mt-15">
        {/* left */}
        <div>
          <div className=" hidden lg:flex justify-center text-center gap-2 mt-1 lg:mt-5">
            <div className=" flex flex-col gap-5 p-2  w-[30%] mt-3 h-fit">
              <h1 className="font-semibold text-2xl">भारत</h1>
              <h2 className="font-medium" >आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</h2>
              <p className="font-extralight text-xs">इंडिया टुडे ने सी-वोटर के साथ 'मूड ऑफ द नेशन' सर्वे किया है.
                देश के सभी राज्यों और लोकसभा क्षेत्रों में 1 जुलाई से 14 अगस्त 2025
                के बीच ये सर्वे किया गया. इस सर्वे का मकसद था देश का मूड भांपना. सर्वे में...</p>
              <span>10 hours ago</span>

            </div>
            <div className=" ">
              <img src="/india.png" width={500} height={400} />
            </div>

          </div>

          <div className="block lg:hidden">
             <HomePhone/>
          </div>


          <hr className=" border-b border-gray-200 lg:w-185 mx-auto mt-5 border-[0.1px]" />


          {/* main attachment */}
          <div className=" lg:mt-18 mt-0  p-2 lg:p-0">
            <div className=" flex items-center lg:items-start mt-1 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b lg:w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex items-center lg:items-start mt-1 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b lg:w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex items-center lg:items-start mt-1 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b lg:w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex items-center lg:items-start mt-1 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b lg:w-185 text-gray-200 my-2 mx-auto" />

          </div>
          <HomeBottom />
        </div>

        <hr className="line-verticle lg:h-245 mt-5" />

        <AsideHome />
      </main>


         <Section4 /> {/*  // Tranding */}

        <Section2/> {/*  // Entertainment */}

         <Section3/>

        <Section1/>

            <Section1/>

          <Section3/>

          <Section2/>



     
    </>


  )
}

export default Home