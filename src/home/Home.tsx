import Bottom from "../components/Bottom";
import Tranding from "../sections/Tranding";
import Entertainment from "../sections/Entertainment";
import Sports from "../sections/Sports";
import Election from "../sections/Election";
import AsideHome from "../components/AsideHome";



const Home = () => {
  return (
    <>
      <main className="border-trl w-[75%] mx-auto flex gap-5 no-bottom-shadow mt-15">
        {/* left */}
        <div>
          <div className=" flex justify-center text-center gap-2 mt-5">
            <div className=" flex flex-col gap-5 p-2  w-[30%] mt-3 h-fit">
              <h1 className="font-semibold text-2xl">भारत</h1>
              <h2 className="font-medium" >आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</h2>
              <p className="font-extralight text-xs">इंडिया टुडे ने सी-वोटर के साथ 'मूड ऑफ द नेशन' सर्वे किया है.
                देश के सभी राज्यों और लोकसभा क्षेत्रों में 1 जुलाई से 14 अगस्त 2025
                के बीच ये सर्वे किया गया. इस सर्वे का मकसद था देश का मूड भांपना. सर्वे में...</p>
              <span>10 hours ago</span>

            </div>
            <div className=" h-fit">
              <img src="/india.png" width={500} height={400} />
            </div>

          </div>

          <hr className="border-b border-gray-200 w-185 mx-auto mt-5 border-[0.1px]" />


          {/* main attachment */}
          <div>
            <div className=" flex mt-2 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex mt-2 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex mt-2 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b w-185 text-gray-200 my-2 mx-auto" />

            <div className=" flex mt-2 ml-2 gap-5">
              <div className=" space-y-2">
                <h1 className="text-red-700">भारत</h1>
                <p className="">आज आम चुनाव हों तो NDA जीतेगा 324 सीटें मगर अपने दम पर बहुमत से पीछे रहेगी BJP: सर्वे</p>
              </div>

              <div>
                <img src="/pic3.png" />
              </div>
            </div>

            <hr className="border-b w-185 text-gray-200 my-2 mx-auto" />


          </div>

          <Bottom />

        </div>




        <hr className="line-verticle h-190 mt-5" />

        <AsideHome />


      </main>


         <Tranding />
         <Entertainment/>
         <Sports/>
         <Election/>
          <Election/>
          <Sports/>
         <Entertainment/>



     
    </>


  )
}

export default Home