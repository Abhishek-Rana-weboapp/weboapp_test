
import Hero from "./sections/Hero";
import Industry from "./sections/Industry";
import Services from "./sections/Services";
import LandingPage from "./sections/LandingPage";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";
import OurValues from "./sections/OurValues";
import Insights from "./sections/Insights";
import About from "./sections/About";
import { FormContextProvider } from "../../context/FormContext";

const Home = () => {
  
  return (
    <FormContextProvider>
      {/* <Hero /> */}
      <LandingPage />
      <Services />
      <Industry />
      {/* <Testimonials /> */}
      <WhyUs />
      <OurValues />
      <Insights/>
      <About />
      </FormContextProvider>
  );
};

export default Home;
