import { FadeIn } from "../Fade/fade";
import Container from "../Container/container";

import Launavinnsla from "../../icons/Launavinnsla.svg";
import AlmennRadgjof from "../../icons/AlmennRadgjof.svg";
import Aaetlanagerd from "../../icons/Aaetlanagerd.svg";
import Bokhaldsvinna from "../../icons/Bokhaldsvinna.svg";
import ErfdafjarSkyrslur from "../../icons/ErfdafjarSkyrslur.svg";
import Fyrirtaekjaradgjof from "../../icons/Fyrirtaekjaradgjof.svg";
import Skattframtal from "../../icons/Skattframtal.svg";
import StofnunFelaga from "../../icons/StofnunFelaga.svg";
import Fjarmalastjornun from "../../icons/Fjarmalastjornun.svg";

export default function Services() {
  return (
    <Container className="" lessPadding>
      <section
        id="services"
        className="text-fontBlue flex flex-col gap-fluid-40 md:gap-fluid-96 overflow-hidden "
      >
        <FadeIn className="flex flex-col gap-fluid-40 md:flex-row md:justify-between lg:px-[4%]">
          <div className=" border-b-[3px] pb-4 border-y-green h-fit w-fit">
            <h2 className="font-headline text-h2 font-semiBold h-fit w-fit">
              Okkar þjónusta
            </h2>
          </div>
        </FadeIn>
        <FadeIn className="flex noScrollbar gap-fluid-24 sm:gap-fluid-32 lg:gap-fluid-48 overflow-scroll snap-x snap-mandatory md:overflow-hidden rounded-12 md:flex-wrap md:justify-center py-20">
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Launavinnsla
              </h3>
              <Launavinnsla className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Vefsson sér um útreikning launa, launaseðla, sendir
                bankaskilagreinar til launagreiðanda og rafrænar skilagreinar
                til skattayfirvalda, lífeyrissjóða og stéttarfélaga. Í byrjun
                nýs árs er sendur launamiði fyrra árs til skattayfirvalda.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Bókhaldsvinna
              </h3>
              <Bokhaldsvinna className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Vefsson sér um daglega bókhaldið og skil á virðisauka skatti.
                Við sendum áminningar á gjalddaga og sjáum um almenn samskipti
                við viðskiptavini.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Fjármálastjórnun
              </h3>
              <Fjarmalastjornun className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Vefsson sér um fjármálastjórnun fyriritækisins. Í langflestum
                tilvikum minnka dráttarvextir og önnur óþarfa gjöld.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Ársreikningur / Skattframtal
              </h3>
              <Skattframtal className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Eftir að ársreikningi er skilað er mikilvægt að fara vel yfir
                hann og sjá hvað mætti betur fara í rekstrinum.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Fyrirtækjaráðgjöf
              </h3>
              <Fyrirtaekjaradgjof className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Við bjóðum upp á ráðgjöf á öllum sviðum fjármála, skipulagningu
                bókhalds og fjárhagslega endurskipulagningu.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Áætlanagerð
              </h3>
              <Aaetlanagerd className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Gerum skilvirka en einfalda áætlanagerð. Þannig er hægt að
                fylgjast vel með rekstrinum og minna um óvæntar uppákomur.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Stofnun félaga
              </h3>
              <StofnunFelaga className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Eftir að ársreikningi er skilað er mikilvægt að fara vel yfir
                hann og sjá hvað mætti betur fara í rekstrinum.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Almenn ráðgjöf
              </h3>
              <AlmennRadgjof className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Við bjóðum upp á ráðgjöf á öllum sviðum fjármála, skipulagningu
                bókhalds og fjárhagslega endurskipulagningu.
              </p>
            </FadeIn>
          </div>
          <div className="flex group flex-col justify-around gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory  snap-always snap-center bg-softWhite hover:scale-105 px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] md:max-w-[45%] lg:min-w-[30%] lg:max-w-[30%]">
            <FadeIn className="flex justify-center align-middle gap-fluid-24">
              <h3 className="text-h3 font-headline font-semiBold self-center">
                Erfðafjárskýrslur
              </h3>
              <ErfdafjarSkyrslur className="h-fit self-center" />
            </FadeIn>
            <FadeIn>
              <p className="text-md font-regular font-body ">
                Gerum skilvirka en einfalda áætlanagerð. Þannig er hægt að
                fylgjast vel með rekstrinum og minna um óvæntar uppákomur.
              </p>
            </FadeIn>
          </div>
        </FadeIn>
      </section>
    </Container>
  );
}
