"use client";

import { ReactNode } from "react";

interface ScrollToSectionProps {
  sectionID: string;
  buttonText: string;
  classname?: string;
  ariaLabel: string;
  icon?: ReactNode;
  onClick?: React.MouseEvent<HTMLElement>;
  setShowMobileNav?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const ScrollToSection = (props: ScrollToSectionProps) => {
  const {
    sectionID,
    buttonText,
    ariaLabel,
    setShowMobileNav,
    classname,
    icon,
  } = props;

  const handleScroll = () => {
    const element = document.getElementById(`${sectionID}`);

    if (!element) return;
    if (setShowMobileNav) setShowMobileNav(false);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label={ariaLabel}
      onClick={() => handleScroll()}
      className={` text-fontBlue flex justify-center gap-8  text-md font-headline  transition-all duration-300 ease-in-out font-medium self-center ${classname}`}
    >
      {icon ? <>{icon}</> : ""} {buttonText}
    </button>
  );
};

export default ScrollToSection;
