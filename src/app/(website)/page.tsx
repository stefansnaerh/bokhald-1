import HeroLottie from "../images/HeroLottie.svg";
import ScrollToSection from "../components/ScrollToSection/scrollToSection";
import Calendar from "../icons/Calendar.svg";

import { FadeIn } from "../components/Fade/fade";
import Container from "../components/Container/container";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
import CompanyMotto from "../components/CompanyMotto/companyMotto";
import Employees from "../components/Employees/employees";
import Contact from "../components/Contact/Contact";
import Form from "../components/Form/Form";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 text-fontBlue">
      <div
        id="home"
        className="flex flex-col sm:flex-row sm:h-[50vh] mt-[12%] sm:mt-[4%]"
      >
        <FadeIn className="flex flex-col  sm:w-1/2 gap-fluid-40 justify-center md:gap-fluid-56 lg2:gap-fluid-72">
          <h1 className="font-headline w-[80%] h-fit text-h1 font-medium text-center self-center">
            Bókhaldsþjónusta Vefsson sérhæfir sig í bókhaldsþjónustu og ráðgjöf
            fyrir fyrirtæki og einstaklinga
          </h1>
          <ScrollToSection
            buttonText={"Bókaðu fund með okkur"}
            ariaLabel={`Takki til að fara á form til að bóka fund hjá okkur`}
            classname="bg-green hover:bg-hoverBlue hover:text-white shadow-button py-fluid-16 px-fluid-24 rounded-12"
            sectionID="contact"
            icon={<Calendar className="hover:text-white h-20 w-20 " />}
          />
        </FadeIn>
        <FadeIn className="sm:w-1/2 ">
          <HeroLottie className="-mt-64 sm:mt-0 h-full w-full" />
        </FadeIn>
      </div>
      <Services />
      <AboutUs />
      <CompanyMotto />
      <Employees />
      <Container
        id="contact"
        className="flex flex-col gap-fluid-48 lg:flex-row"
      >
        <Contact />
        {/* <div className="lg:w-[65%] self-start">
              <div
                id="ff-compose"
                className="[&_img]:w-fill [&_img]:h-fill  "
              ></div>
              <Script
                id="form"
                src="https://formfacade.com/include/110808910195665411918/form/1FAIpQLSfRKdf-wyQIzzq362Wo6ZpOmujIDSCBhcc0Gd1fY2UOli8k1w/classic.js?div=ff-compose"
              ></Script>
            </div> */}
        <Form />
      </Container>
    </section>
  );
}
