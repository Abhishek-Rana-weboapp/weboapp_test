import React, { forwardRef } from "react";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import ProfessionalTrust from "./sections/ProfessionalTrust";
import ScheduleCallSection from "../../components/buttons/ScheduleCallSection";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div className="space-y-24">
      <Hero/>
      <ProjectsSection/>
      <ProfessionalTrust/>
      <ScheduleCallSection 
        title="Impressed by Our Work?"
        subtitle="Let's create something amazing together. Schedule a consultation to discuss your next project."
      />
    </div>
  );
});

export default Portfolio;


