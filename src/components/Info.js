import React from "react";
import Me from "../assets/me.jpeg"
import Pdf from "../assets/hasancankivrakcv.pdf"
import { useTranslation } from "react-i18next";
const Info = () => {
    const { t } = useTranslation();
    return (
        <div className="lg:w-[1920px] lg:h-[1200px] bg-[#1D1C1C] lg:flex lg:flex-row sm:h-auto sm:w-auto sm:flex sm:flex-col">
            {/*Head*/}
            <div className="flex flox-row ml-[10px] mt-[120px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2500">
                <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px] lg:ml-[100px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:mr-[5px]">
                </div>
                <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mr-[30px] sm:text-[30px]">{t('head')}</div>
                <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px]  lg:mr-[120px] lg:mt-[40px] sm:w-[90px] sm:mt-[20px] sm:ml-[5px]"></div>
            </div>
            {/*End of Head*/}
            {/*Content div*/}
            <div className="lg:speace-x-[200px] lg:flex lg:flex-row sm:flex sm:flex-col">
                {/*First Div*/}
                <div className="bg-[#464242] lg:h-[250px] lg:w-[833px] lg:mt-[350px] lg:ml-[-1650px] rounded-[35px] sm:h-auto sm:w-auto" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2500">
                    <p className="text-[30px] mt-[10px] ml-[10px] ">{t('content')}</p><br/>
                </div>
                {/*End Of First Div*/}
            </div>
            {/*Second Div*/}
             <img src={Me} alt="Me" className="rounded-full lg:w-[300px] lg:h-[300px] lg:mt-[310px] lg:ml-[-600px] sm:h-[200px] sm:w-[200px] sm:mt-[50px] sm:ml-[90px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2500" />
             <a href={Pdf}>
             <button className="bg-[#912C2C] lg:h-[40px] lg:w-[320px] lg:mt-[650px] lg:ml-[-300px] rounded-[25px] text-white hover:bg-white hover:text-[#912C2C] sm:w-auto sm:h-auto sm:text-[15px] sm:ml-[50px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2500">
                {t('cv')}
                </button></a>
            {/*End Of Second Div*/}
            {/*End Of Content div*/}
        </div>
    )
}
export default Info;