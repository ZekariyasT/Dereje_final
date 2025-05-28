import About1 from "../Components/About/About1";
import Brand1 from "../Components/Brand/Brand1";
import BreadCumb from "../Components/Common/BreadCumb";
import Process2 from "../Components/Process/Process2";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const AboutPage = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/assets/img/gfd44.jpg"
                Title="About Us"
            ></BreadCumb>            
            <About1
                // img1="/assets/img/6466f4c334a7324e51f6419c_The Importance of Proper Tire Maintenance for Your Commercial Truck.webp"
                // img2="/assets/img/Broken-Semi-Truck-Service-Close-up.jpg"
                // img3="/assets/img/gfd44.jpg"
                expNumber="25"
                expYers="Years"
                expTitle="Experience"
                // number="+(251) 913-657-022"
                subTitle="Our About"
                Title="ደረጀ ቱራ ኢንጂነሪንግ P.L.C"
                Content={"ፕሮፌሽናል በሆነ መንገድ መኪናዎትን በኛ ድርጅት ለማሻሻል፣ ለማሳደስ እንዲሁም ለማስጠገን አስበዋል? \n እንግዲያውስ ምርጫዎትን እኛ ጋር ያድርጉት ከተሟላ አቅርቦት ጋር መኪናዎትን በሚፈልጉት መልክ አሳምረን እናስረክባለን፡፡ \n በስራችን ይኮራሉ! "}
                feature1="የከባድ መኪና አካል ማምረት እና ማሻሻል"
                feature2="የከባድ መኪና ኪራይ እና ሽያጭ"
                listItem={[
                    "ደህነነቱ የተረጋገጠ መኪና ለመንዳት",
                    "አጠቃላይ የመኪናውን ደህንነት ለማወቅ",
                    "የእርሶን መኪና በተሻለ መልኩ ከውስጥም ከውጪ ስለምናውቀው",

                ]}
                avatar="/assets/img/avatar_1.png"
                name="Dereje Tura"
                designation="Founder CEO"
            ></About1>
            <Testimonial2></Testimonial2>
            <Brand1></Brand1>
            <Process2></Process2>
        </div>
    );
};

export default AboutPage;