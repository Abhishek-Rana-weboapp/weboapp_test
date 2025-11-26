import React from "react";
import Hero from "./sections/Hero";
import OurMission from "./sections/OurMission";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import WhatSetsUsApart from "./sections/WhatSetsUsApart";
import Testimonials from "../home/sections/Testimonials";
import ScheduleCallSection from "../../components/buttons/ScheduleCallSection"
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
    <ScheduleCallSection 
      title="Ready to Work Together?"
      subtitle="Let's discuss your project and see how our expertise can help bring your vision to life."
    />
    </div>
  );
};

export default AboutUs;
