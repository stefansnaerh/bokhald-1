"use client";
import { useEffect, useState } from "react";

import ScrollToSection from "../../ScrollToSection/scrollToSection";
import cx from "classnames";

export default function MobileNav({
  setIsMobileNavOpen,
}: {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>();

  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav);
    setIsMobileNavOpen((prevShowMobileNav) => !prevShowMobileNav);
  };

  return (
    <>
      <button
        onClick={toggleShowNav}
        aria-label="Takki til að sýna farsíma valmynd"
        className="smmd:hidden flex justify-between flex-col h-[30px] w-56 self-center pr-24 "
      >
        <div
          className={cx(
            "bg-fontBlue h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["rotate-45 translate-y-[13.6px]"]: showMobileNav,
              [""]: !showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            "bg-fontBlue h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["opacity-0"]: showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            "bg-fontBlue h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["-rotate-45 -translate-y-[13.6px]"]: showMobileNav,
              [""]: !showMobileNav,
            }
          )}
        ></div>
      </button>

      <nav
        className={cx(
          " smmd:hidden absolute z-10 flex  flex-col gap-fluid-72 bg-backgroundBlue top-[90px] xs:top-[100px] overflow-y-auto h-fill min-h-[100vh] w-fill px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56  transform duration-500 ease-in-out",
          { ["ml-fill"]: !showMobileNav, ["ml-0"]: showMobileNav }
        )}
      >
        <ul className="text-lg flex flex-col gap-fluid-40 xs:gap-fluid-48 ">
          <li>
            <a
              onClick={() => setShowMobileNav(false)}
              aria-label={`Fara efst á forsíðu`}
              href={"/"}
              className="text-fontBlue "
            >
              Forsíða
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMobileNav(false)}
              aria-label={`fara á`}
              href="/"
              className="text-fontBlue"
            >
              Þjónusta
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMobileNav(false)}
              aria-label={`sjá um okkur`}
              href="/"
              className=" text-fontBlue"
            >
              Um okkur
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
