import Nav from "../components/Nav"
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Copyright from "../components/Copyright"
import { useTranslation } from "react-i18next"
const Projects = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <div className="lg:w-[1920px] lg:h-[900px] bg-[#1D1C1C] lg:flex lg:flex-row sm:flex sm:flex-col">
                {/*Head*/}
                <div className="flex flox-row lg:ml-[90px] lg:mt-[120px] sm:mt-[120px] sm:ml-[30px]">
                    <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px] lg:ml-[160px] lg:mt-[40px] sm:w-[90px] sm:mt-[20px] sm:mr-[5px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2500">
                    </div>
                    <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mr-[30px] sm:text-[30px]" data-aos="fade-down" data-aos-delay="100" data-aos-duration="2500">{t('projects_head')}</div>
                    <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px]  lg:mr-[120px] lg:mt-[40px] sm:w-[90px] sm:mt-[20px] sm:ml-[5px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2500"></div>
                </div>
                {/*End of Head*/}
                {/*Content div*/}
                <div className="lg:speace-x-[200px] lg:flex lg:flex-row sm:flex sm:flex-col">
                    {/*First Div*/}
                    <div className="lg:h-[410px] lg:w-[720px] lg:mt-[220px] lg:ml-[-1650px] lg:mb-[99px] bg-[#464242] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[220px] sm:w-[250px] sm:ml-[60px] sm:mt-[50px]">
                        {/*First image text div*/}
                        {/*End of first image text div*/}
                        {/*Image and text div*/}
                        <div className="lg:h-[380px] lg:w-[680px] lg:mt-[15px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[15px] sm:h-[200px]">
                            <img src={Project1} alt="vrımg" className="rounded-[25px] sm:h-[200px] lg:h-[380px]" />
                            <div class=" bg-[#912C2C] lg:h-[100px] lg:w-[680px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                                <div className="">
                                    <a href="https://github.com/hasancankivrak/website-react" target="_blank">
                                        <button
                                            className="bg-black text-white lg:ml-[250px] lg:mt-[20px] sm:ml-[50px] sm:mt-[10px] font-bold py-2 px-4 rounded-full hover:bg-white hover:text-[#912C2C]"
                                            data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2500"
                                        >
                                            {t('source')}
                                        </button></a>
                                </div>
                            </div>
                        </div>
                        {/*End of image and text div*/}
                    </div>
                    {/*End Of First Div*/}
                </div>
                {/*Second Div*/}
                <div className="lg:h-[410px] lg:w-[720px] lg:mt-[220px] lg:ml-[-730px] lg:mb-[99px] bg-[#464242] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[220px] sm:w-[250px] sm:ml-[60px] sm:mt-[50px]">
                    {/*First image text div*/}
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[680px] lg:mt-[15px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[10px] sm:h-[200px]">
                        <img src={Project2} alt="vrımg" className="rounded-[25px] sm:h-[200px] lg:h-[380px]" />
                        <div class=" bg-[#912C2C] lg:h-[100px] lg:w-[680px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                                <a href="https://github.com/hasancankivrak/website-react" target="_blank">
                                    <button
                                        className="bg-black text-white lg:ml-[250px] lg:mt-[20px] sm:ml-[50px] sm:mt-[10px] font-bold py-2 px-4 rounded-full hover:bg-white hover:text-[#912C2C]"
                                        data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2500"
                                    >
                                        {t('source')}
                                    </button></a>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End Of Second Div*/}
                {/*End Of Content div*/}
            </div>
            <Copyright />
        </>
    )
}
export default Projects