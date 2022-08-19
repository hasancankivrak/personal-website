import Nav from "../components/Nav"
import React,{useRef} from "react"
import emailjs from "@emailjs/browser"
import { SERVICE_KEY,TEMPLATE_KEY,PUBLIC_KEY } from "../config"
import Copyright from "../components/Copyright"
import { useTranslation } from "react-i18next"
const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    const {t}=useTranslation();
return(
    <>
    <Nav/>
    <div className="bg-[#1D1C1C] lg:w-[1920px] lg:h-[982px] sm:w-auto sm:h-auto">
            {/*Header*/}
            <div className="flex flox-row ml-[10px]">
                <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px] lg:ml-[181px] lg:mt-[140px] sm:w-[80px] sm:mt-[120px] sm:mr-[5px]">
                </div>
                <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mt-[100px] lg:mr-[30px] sm:text-[30px] sm:mt-[100px]">{t('contact_head')}</div>
                <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-[581px] lg:mr-[181px] lg:mt-[140px] sm:w-[80px] sm:mt-[120px] sm:ml-[5px]"></div>
            </div>
            {/*End Of Header*/}
            {/*Form div*/}
            <div className="mb-[40px]">
                <form ref={form} onSubmit={sendEmail} className="lg:ml-[293px] flex lg:flex-row lg:space-x-[45px] sm:flex-col sm:ml-[85px] sm:mt-[20px]">
                    {/*name e-mail subject forms div*/}
                    <div className="flex flex-col space-y-[38px]">
                        <input name="u_name" type="text" className="lg:w-[645px] lg:h-[101px] text-[30px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder={t('u_name')}></input>
                        <input name="u_email" type="text" className="lg:w-[645px] lg:h-[101px] text-[30px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder={t('u_email')}></input>
                        <input name="u_subject" type="text" className="lg:w-[645px] lg:h-[101px] text-[30px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder={t('u_subject')}></input>
                    </div>{/*end of name e-mail subject forms div*/}
                    <input name="message" type="textarea" className="lg:w-[637px] lg:h-[377px] text-[30px] text-black rounded-[30px] lg:mt-[205px] sm:h-[300px] sm:w-[300px] sm:mt-[50px] sm:ml-[-40px]" placeholder={t('u_message')}></input>
                    {/*Button div*/}
                    <div>
                        <button type="submit" className="bg-[#912C2C] lg:rounded-[50px] lg:w-[252px] lg:h-[53px] font-bold lg:ml-[-840px] lg:mt-[654px] sm:ml-[10px] sm:mt-[50px] sm:h-[50px] sm:w-[200px] sm:rounded-[40px] hover:bg-white hover:text-[#912C2C]">Send now</button>
                    </div>
                </form>
            </div>
            {/*End of form div*/}
            {/*Line div*/}
            {/*End of line div*/}
            {/*Copyright div*/}
            <Copyright/>
            {/*End of copyright div*/}
        </div>
    </>
)
}
export default Contact