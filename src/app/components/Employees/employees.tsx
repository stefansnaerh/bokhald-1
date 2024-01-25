import Container from "../Container/container";
import { FadeIn } from "../Fade/fade";

import STM1 from "../../images/BokhaldStm1.jpg";
import STM2 from "../../images/BokhaldStm2.jpg";
import STM3 from "../../images/BokhaldStm3.jpg";
import STM4 from "../../images/BokhaldStm4.jpg";
import Image from "next/image";

export default function Employees() {
  return (
    <Container>
      <section className="flex flex-col w-fill text-fontBlue gap-fluid-56 md:gap-fluid-96">
        <FadeIn>
          <h2 className="text-h2 font-semiBold font-headline border-b-[3px] pb-4 border-y-green w-fit">
            Teymið okkar
          </h2>
        </FadeIn>

        <div className="flex overflow-hidden flex-col w-fill gap-fluid-48 md:gap-fluid-56  sm:flex-row sm:flex-wrap sm:justify-center">
          <FadeIn className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] ">
            <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
              <div className="relative pb-[100%] ">
                <Image
                  src={STM1}
                  className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                  priority
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-regular w-fit self-center">
              Embla Sigurðardóttir
            </h3>
            <h4 className="text-md  font-regular w-fit self-center">
              Framkvæmdarstjóri
            </h4>
          </FadeIn>
          <FadeIn className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] ">
            <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
              <div className="relative pb-[100%] ">
                <Image
                  src={STM2}
                  className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                  priority
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-regular w-fit self-center">
              Magni Sigurðsson
            </h3>
            <h4 className="text-md  font-regular w-fit self-center">Bókhald</h4>
          </FadeIn>
          <FadeIn className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] ">
            <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
              <div className="relative pb-[100%] ">
                <Image
                  src={STM3}
                  className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300"
                  priority
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-regular w-fit self-center">
              María Jónsdóttir
            </h3>
            <h4 className="text-md  font-regular w-fit self-center">Bókhald</h4>
          </FadeIn>
          <FadeIn className="flex flex-col font-body align-middle content-center gap-fluid-12 sm:w-[45%] md:w-[30%] xl:w-[22%] ">
            <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
              <div className="relative pb-[100%] ">
                <Image
                  src={STM4}
                  className="object-cover z-0 rounded-8 group-hover:scale-105 transform duration-300"
                  priority
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-regular w-fit self-center">
              Elísa Sigurðardótir
            </h3>
            <h4 className="text-md  font-regular w-fit self-center">
              Löggildur endurskoðandi
            </h4>
          </FadeIn>
        </div>
      </section>
    </Container>
  );
}
