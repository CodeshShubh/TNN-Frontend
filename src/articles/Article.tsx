import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import AsideArticle from "./article_components/AsideArticle";

const Article = () => {

   return (
      <main className="mt-15 border-trl  w-[80%] mx-auto  flex justify-between">
         {/* left */}
         <div className="border w-[68%]">
            <h1 className="p-3 font-bold text-2xl">भारत और चीन मिलकर कर सकते हैं ये काम', जापान में पीएम
               मोदी के संदेश से ट्रंप को लगेगी मिर्ची</h1>
            <hr className="line" />
            <div className="pl-3 pb-3 font-light text-sm flex justify-between">
               <div>
                  <h1>Edited By: Abhishek Pratap Singh</h1>
                  <p>Updated: Fri, 29 Aug 2025 06:38 PM (IST)</p>
               </div>
               <div className="flex gap-6 mr-10 justify-center items-center">
                  <Link to={""}><SlLike size={"25"} /></Link>
                  <Link to={""}><FaRegCommentAlt size={"25"}/></Link>
                  <Link to={""}><CiShare2 size={"25"}/></Link>

               </div>
            </div>
            <div className="p-3 border text-center bg-gray-200">
               <h2>प्रधानमंत्री नरेंद्र मोदी ने जापान में कहा कि चीन के साथ मजबूत संबंध
                  क्षेत्रीय शांति समृद्धि और वैश्विक अर्थव्यवस्था में स्थिरता के लिए महत्वपूर्ण हैं।
                  उन्होंने राष्ट्रपति शी चिनफिंग के निमंत्रण पर एससीओ शिखर सम्मेलन में भाग
                  लेने की बात कही। मोदी ने भारत और चीन के बीच स्थिर संबंधों के महत्व
                  पर जोर दिया।</h2>
            </div>

            <div className="p-3">
               <img src="/india2.png" />
               <p className="font-light text-sm">जापान में पीएम मोदी ने बताया भारत-चीन मिलकर क्या कर सकते हैं।</p>
            </div>

            <div className="p-3">
               <p className="leading-10">
                  डिजिटल डेस्क, नई दिल्ली। प्रधानमंत्री नरेंद्र मोदी ने शुक्रवार दोपहर जापान में कहा कि
                  चीन के साथ मजबूत संबंध महत्वपूर्ण हैं और इससे क्षेत्रीय शांति और समृद्धि पर सकारात्मक
                  प्रभाव पड़ेगा साथ ही वैश्विक अर्थव्यवस्था में स्थिरता आएगी।
                  पीएम मोदी दिल्ली और टोक्यो के बीच द्विपक्षीय संबंधों को मजबूत करने के लिए
                  जापान की दो दिवसीय यात्रा पर हैं और इस दौरान वे चार कारखानों का दौरा करेंगे,
                  जिनमें से एक ई10 शिंकानसेन बुलेट ट्रेन का प्रोटोटाइप बना रहा है, जिसे भारत खरीदना
                  चाहता है। इसके अलावा वे रक्षा, व्यापार, प्रौद्योगिकी और व्यवसाय से संबंधित समझौता
                  ज्ञापनों पर हस्ताक्षर भी करेंगे।
               </p>
            </div>
         </div>

         <hr className="line-verticle h-100" />
         <div className="border w-[31%]">
            <AsideArticle/>
         </div>

      </main>
   )
}

export default Article