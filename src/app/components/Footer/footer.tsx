import Logo from "../../icons/BokhaldLogoFooter.svg";

export default function Footer() {
  return (
    <footer className=" font-headline sm:my-32  mx-fluid-12 pt-container-56 flex flex-col gap-16 text-md text-footerFont md:gap-fluid-48 xxs:mx-fluid-16 sm:mx-fluid-40 lg:mx-fluid-56 ">
      <div className="relative flex flex-col w-fill sm:flex-row px-24  md:justify-between lg:justify-around gap-y-16 sm:gap-64 rounded-12 bg-footerBlue py-fluid-40 p-8 xs:p-48 md:py-56 md:pt-56 md:pb-fluid-80">
        <Logo className="h-72 -ml-8 w-[190px]  sm:flex  lg:w-240 lg:h-104 xl:h-[158px] xl:w-[300px]" />

        <div className="flex gap-32">
          <ul
            aria-label={`Vefsson bókhaldsþjónusta`}
            className="flex gap-8 md:min-h-[160px] w-[130px] md:w-fit flex-col font-medium before:content-[attr(aria-label)] before:font-semiBold "
          >
            <li className="hover:text-green hover:cursor-pointer transition-all duration-300 ease-in-out">
              <a
                href={`fylla inn`}
                aria-label={`Opnar leiðbeiningar til fylla inn í google maps`}
              >
                Heimilisfang : Smáralind 1
              </a>
            </li>

            <li>Kennitala : 150514-2200</li>
            <li className="hover:text-green transition-all duration-300 ease-in-out">
              <a
                href={`mailto: fylla inn`}
                aria-label={`Opnar tölvupóst til fylla inn í nýjum glugga`}
                target="_blank"
              >
                Netfang : bokhald@vefsson.is
              </a>
            </li>
            <li className="hover:text-green transition-all duration-300 ease-in-out">
              <a
                href={`tel: fylla inn`}
                aria-label={`Hringja í síma fylla inn`}
              >
                Sími : 554-0822
              </a>
            </li>
          </ul>
        </div>
        <p className="absolute right-16 bottom-16 text-sm">©️ 2024 Vefsson</p>
      </div>
    </footer>
  );
}
