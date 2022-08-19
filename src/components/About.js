import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:flex lg:w-[1920px] lg:h-[916px] bg-[#464242] sm:w-[350px] sm:h-auto sm:mt-[-10px]" id="about">
      {/*Head*/}
      <div className="lg:flex lg:flox-row lg:ml-[10px] lg:mt-[20px] lg:space-x-[50px] sm:flex sm:flex-row sm:mt-[10px] sm:space-x-[30px] sm:ml-[30px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2500">
        <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px] lg:ml-[190px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:ml-[-15px]">
        </div>
        <div className="text-center lg:text-[51px] lg:ml-[50px] lg:mr-[50px] sm:text-[30px]">{t('about_me')}</div>
        <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px]  lg:ml-[190px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px]"></div>
      </div>
      {/*End Of Head*/}
      {/*Content div*/}
      <div className="lg:flex lg:flex-row lg:space-x-[300px] sm:flex sm:flex-col space-y-[10px]">
        {/*First Div*/}
        <div className="lg:w-[638px] lg:h-[459px] lg:ml-[-1500px] lg:mt-[200px] sm:w-[300px] sm:h-auto sm:ml-[35px] sm:mt-[13px] bg-[#1D1C1C] rounded-[25px]"data-aos="fade-right" data-aos-delay="100" data-aos-duration="2500">
          <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">{t('education')}</p><br />
          <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">{t('school1')}</p><br />
          <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">{t('school2')}</p><br />
        </div>
        {/*End Of First Div*/}
      </div><div className="lg:w-[638px] lg:h-[459px] lg:ml-[-610px] lg:mt-[200px] sm:w-[300px] sm:h-auto sm:ml-[35px] sm:mt-[13px] bg-[#1D1C1C] rounded-[25px]"data-aos="fade-left" data-aos-delay="100" data-aos-duration="2500">
          <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">{t('yetkinlik')}</p><br />
          <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">C#</p><br/>
        <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">HTML</p><br/>
        <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">ASP.NET</p><br/>
        <p className="lg:text-[40px] lg:ml-[10px] sm:text-[30px] sm:ml-[5px]">SQL</p><br/>
        </div>
      {/*End Of Content Div*/}
    </div>
  )
}
export default About;