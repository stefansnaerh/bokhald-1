import Image from "next/image";
import { FadeIn } from "../Fade/fade";
import Container from "../Container/container";

import AboutBokhald1 from "../../images/bokhaldAbout1.jpg";
import AboutBokhald2 from "../../images/bokhaldAbout2.jpg";
import AboutBokhald3 from "../../images/bokhaldAbout3.jpg";

export default function AboutUs() {
  return (
    <Container className="bg-beigeLighter" lessPadding>
      <section
        id="about"
        className="  flex flex-col md:flex-row gap-fluid-64 md:gap-fluid-144 "
      >
        <FadeIn className="relative flex flex-col gap-fluid-40 md:gap-fluid-56 md:w-[40%]">
          <div className=" border-b-[3px] pb-4 border-y-green w-fit">
            <h2 className="text-h2 font-headline font-semiBold w-fit">
              Um okkur
            </h2>
          </div>

          <p className="text-paragraph font-body font-regular">
            Vefsson bókhaldsþjónusta var stofnað í Janúar 2014. Starfseminn
            hefur vaxið hægt og rólega og í dag þjónustum við fjölmörg
            rekstrarfélög, bæði einstaklinga og stærri fyrirtæki. Við leggjum
            mikið upp úr endurmenntun svo við getum veitt bestu þjónustuna á
            öllum tímum. Við höfum vaxið frá einum starfsmanni upp í 4 og veitum
            við alhliða bókhalds- og ráðgjafarþjónustu fyrir samkeppnishæft
            verð.
          </p>
        </FadeIn>
        <FadeIn className="flex noScrollbar gap-fluid-24 overflow-scroll snap-x snap-mandatory snap-always snap-center sm:overflow-hidden sm:grid sm:grid-cols-5 sm:grid-rows-2 md:w-[60%]">
          <div className="relative snap-center  min-w-[80%] overflow-hidden sm:min-w-[60%] sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
            <div className="relative pb-[110%] sm:pb-[122%] ">
              <Image
                src={AboutBokhald1}
                className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                priority
                fill
                alt={"Skrifstofa"}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

          <div className="relative min-w-[80%]  snap-x snap-mandatory snap-always snap-center overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-1">
            <div className="relative pb-[110%]  sm:pb-[90%]">
              <Image
                src={AboutBokhald2}
                className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                priority
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

          <div className="relative w-fill min-w-[80%]  snap-x snap-mandatory snap-always snap-center overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-4">
            <div className="relative pb-[110%] sm:pb-[90%]">
              <Image
                src={AboutBokhald3}
                className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </Container>
  );
}
