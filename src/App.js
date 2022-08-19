import{HashRouter as Router,Link,Route,Routes} from "react-router-dom";
import Aos from "aos"
import "aos/dist/aos.css"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','tr'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection:{
      order: ['cookie', 'htmlTag', 'localStorage',  'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false}
  });
 
const App=()=> {
  Aos.init();
  const {t}=useTranslation();
  return (
    <>
    <title>{t('app_title')}</title>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Projects" element={<Projects authed={true}/>}></Route>
        <Route path="/Contact" element={<Contact authed={true}/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
