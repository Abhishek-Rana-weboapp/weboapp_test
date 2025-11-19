import React from "react";
import Hero from "./sections/Hero";
import OurMission from "./sections/OurMission";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import WhatSetsUsApart from "./sections/WhatSetsUsApart";
import Testimonials from "../home/sections/Testimonials";
import RequestServiceForm from "../../components/forms/RequestServiceForm"
import OurValue from "./sections/OurValue";

const AboutUs = () => {
  return (
    <div className="space-y-6">
    <Hero />
    <OurMission/>
    <OurValue/>
    <DevelopmentProcess />
    <WhatSetsUsApart />
    <Testimonials />
    <RequestServiceForm />
    </div>
  );
};

export default AboutUs;
