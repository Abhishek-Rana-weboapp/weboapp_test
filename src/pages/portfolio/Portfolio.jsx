import React, { forwardRef } from "react";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import ProfessionalTrust from "./sections/ProfessionalTrust";
import RequestServiceForm from "../../components/forms/RequestServiceForm";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div className="space-y-24">
      <Hero/>
      <ProjectsSection/>
      <ProfessionalTrust/>
      <RequestServiceForm/>
    </div>
  );
});

export default Portfolio;


