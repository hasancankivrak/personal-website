import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import TwLogo from "../assets/twlogo.png"
import FbLogo from "../assets/fblogo.png"
import IgLogo from "../assets/iglogo.png"
import LnLogo from "../assets/lnlogo.png"
import GhubLogo from "../assets/githublogo.png"
import DropDown from "../components/DropDown"
import { useTranslation } from "react-i18next"
import { HiArrowCircleDown } from "react-icons/hi"
import { HiArrowCircleUp } from "react-icons/hi"
function Nav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#F2F2F2] rounded-b-[50px] sm:rounded-none z-[99] absolute w-full flex" data-aos="fade-down" data-aos-delay="100" data-aos-duration="2500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:h-[104px] sm:h-[70px]">
            <div className="flex lg:space-x-[800px]">
              <div className="flex-shrink-0 lg:ml-[-890px] lg:mt-[-20px]">
              </div>
              <div className="hidden md:block">
                <div className="ml-[10px] flex items-baseline space-x-[200px] mt-[20px]">
                  <Link to="/">
                    <p
                      className="text-gray-700 text-[20px] font-bold hover:underline hover:text-black"
                    >
                      {t('home')}
                    </p></Link>
                  <ScrollLink to="about">
                    <p
                      href="#"
                      className="text-gray-700 text-[20px] font-bold hover:underline hover:text-black"
                    >
                      {t('about')}
                    </p></ScrollLink>
                  <Link to="/Projects">
                    <p
                      href="#"
                      className="text-gray-700 text-[20px] font-bold hover:underline hover:text-black"
                    >
                      {t('projects')}
                    </p></Link>
                  <Link to="/Contact" >
                    <button
                      className="bg-[#912C2C] text-white hover:text-black font-bold py-2 px-4 rounded-full"
                    >
                      {t('contact')}
                    </button></Link>
                  <DropDown />
                </div>
                <div className="flex flex-row h-[29px] w-[151px] mt-[-40px] ml-[1450px]">
                  <img src={FbLogo} alt="Twitter"></img>
                  <img src={TwLogo} alt="Instagram"></img>
                  <img src={IgLogo} alt="Facebook"></img>
                  <img src={LnLogo} alt="Linkedin"></img>
                  <a href="https://github.com/hasancankivrak"><img src={GhubLogo} className="h-[32px] w-[32px] mt-[-2px]" alt="Github"></img></a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="
                  bg-[#F2F2F2] inline-flex items-center 
                  justify-center p-2 rounded-md text-gray-400  
                  ml-[-170px]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="34.215" height="24.987" viewBox="0 0 34.215 24.987">
                    <g id="Group_421" data-name="Group 421" transform="translate(-7.595 -13.399)">
                      <line id="Line_8" data-name="Line 8" x2="31.215" transform="translate(9.095 25.893)" fill="none" stroke="#912c2c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_9" data-name="Line 9" x2="14.924" transform="translate(9.095 14.899)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_10" data-name="Line 10" x2="14.924" transform="translate(25.386 36.886)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                    </g>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="34.215" height="24.987" viewBox="0 0 34.215 24.987">
                    <g id="Group_421" data-name="Group 421" transform="translate(-7.595 -13.399)">
                      <line id="Line_8" data-name="Line 8" x2="31.215" transform="translate(9.095 25.893)" fill="none" stroke="#912c2c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_9" data-name="Line 9" x2="14.924" transform="translate(9.095 14.899)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                      <line id="Line_10" data-name="Line 10" x2="14.924" transform="translate(25.386 36.886)" fill="none" stroke="#333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" />
                    </g>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          
        >
          {(ref) => (
            <div className="md:hidden text-left items-center mt-[50px]" id="mobile-menu">
              <div ref={ref} className="ml-[-350px] px-2 pt-2 pb-3 space-y-[15px] sm:px-3">
                <Link to="/">
                  <p
                    className="text-gray-700 text-[15px] mt-[10px] font-bold hover:underline hover:text-black"
                  >
                    {t('home')}
                  </p></Link>
                <ScrollLink to="aboutus">
                  <p
                    href="#"
                    className="text-gray-700 text-[15px] mt-[10px] font-bold hover:underline hover:text-black"
                  >
                    {t('about')}
                  </p></ScrollLink>
                <Link to="/Projects">
                  <p
                    href="#"
                    className="text-gray-700 text-[15px] mt-[10px] font-bold hover:underline hover:text-black"
                  >
                    {t('projects')}
                  </p></Link>
                <Link to="/Contact" >
                  <button
                    className="bg-[#912C2C] text-white text-[15px] mt-[10px] ml-[-10px] hover:text-black font-bold py-2 px-4 rounded-full"
                  >
                    {t('contact')}
                  </button></Link>

                <div className="flex flex-row">
                  <img src={TwLogo} alt="Twitter"></img>
                  <img src={IgLogo} alt="Instagram"></img>
                  <img src={FbLogo} alt="Facebook"></img>
                  <img src={LnLogo} alt="Linkedin"></img>
                  <a href="https://github.com/hasancankivrak"><img src={GhubLogo} className="h-[32px] w-[32px] mt-[-2px]" alt="Github"></img></a>
                </div>
                <DropDown />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;