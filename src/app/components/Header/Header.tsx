"use client";

import { useState, useEffect, useRef } from "react";

import cx from "classnames";

import Logo from "../../icons/Logo.svg";

import MobileNav from "./MobileNav/mobileNav";
import ScrollToSection from "../ScrollToSection/scrollToSection";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerElement = useRef<HTMLHeadElement>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean | undefined>();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      ref={headerElement}
      className={cx(
        "fixed z-50 bg-headerBlue shadow-header left-0 right-0 justify-between flex  h-[90px] xs:h-[100px] md:h-[120px] font-headline  text-md font-semiBold text-softBlack transition-all duration-500 "
      )}
    >
      <a aria-label="hlekkur til að fara heim á forsíðu" href="/" className="">
        <Logo className="h-[90px] xs:h-[100px] md:h-120 lg:w-[200px] w-[180px] pl-24" />
      </a>
      <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />
      <nav className="hidden smmd:flex gap-fluid-40 text-white xl:gap-fluid-72 pr-24 ">
        <div className="flex self-center gap-fluid-64 md:gap-fluid-96 lg:gap-fluid-122 ">
          <div className="group h-fit self-center">
            <ScrollToSection
              buttonText={"Heim"}
              ariaLabel={``}
              sectionID="home"
              classname=""
            />
            <div className=" h-[3px] w-0 group-hover:w-fill group-hover:bg-green transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group h-fit self-center">
            <ScrollToSection
              buttonText={"Þjónusta"}
              ariaLabel={``}
              sectionID="services"
            />
            <div className=" h-[3px] w-0 group-hover:w-fill group-hover:bg-green transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group h-fit self-center">
            <ScrollToSection
              buttonText={"Um okkur"}
              ariaLabel={``}
              sectionID="about"
            />
            <div className=" h-[3px] w-0 group-hover:w-fill group-hover:bg-green transition-all duration-300 ease-in-out"></div>
          </div>
          <ScrollToSection
            buttonText={"Hafa samband"}
            ariaLabel={``}
            classname="bg-green hover:bg-hoverBlue hover:text-white shadow-button py-fluid-16 px-fluid-24 rounded-12 h-fit w-fit "
            sectionID="contact"
          />
        </div>
      </nav>
    </header>
  );
}
