import Container from "../Container/container";
import { FadeIn } from "../Fade/fade";

import CompanyMottoSVG from "../../images/CompanyMottoSVG.svg";

export default function CompanyMotto() {
  return (
    <Container lessPadding>
      <section>
        <div className="flex flex-col sm:flex-row sm:h-[50vh] mt-[12%] sm:mt-[4%]">
          <FadeIn className="sm:w-1/2 ">
            <CompanyMottoSVG className="-mt-64 sm:mt-0 h-full w-full" />
          </FadeIn>
          <FadeIn className="flex flex-col  sm:w-1/2 gap-fluid-40 justify-center md:gap-fluid-56 lg2:gap-fluid-72">
            <h2 className="font-headline w-[80%] h-fit text-h1 font-medium text-center self-center">
              “ Við sjáum um bókhaldið svo þú getir einbeitt þér að daglega
              rekstrinum! ”
            </h2>
          </FadeIn>
        </div>
      </section>
    </Container>
  );
}
