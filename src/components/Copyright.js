import { useTranslation } from "react-i18next"

const Copyright=()=>{
    const {t}=useTranslation();
return(
    <div className="lg:w-[1920px] lg:h-[179px] bg-[#464242] sm:w-auto sm:h-auto sm:mt-[-20px]">
        <div style={{ borderTop: "6px solid #912C2C ", }} className="lg:w-full lg:mt-[-10px] sm:w-auto sm:mt-[20px] sm:mr-[5px]"/>
     <p className="text-[25px] text-center mt-[10px]">{t('copyright')}<br/>© 2022</p>
    </div>
)
}
export default Copyright