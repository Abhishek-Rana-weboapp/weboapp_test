import React, { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import WhyWorkWithUs from "./sections/WhyWorkWithUs";
import OpenVacancies from "./sections/OpenVacancies";
import HiringProcess from "./sections/HiringProcess";
import ScheduleCallSection from "../../components/buttons/ScheduleCallSection";

const Streamline = lazy(() => import("./sections/Streamline"));

const Career = (props) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <div className="space-y-2">
        <Hero />
        <WhyWorkWithUs />
        <Streamline />
        <div id="vacancies">
          <OpenVacancies />
        </div>
        <HiringProcess />
        <ScheduleCallSection 
        CTALink="/career#vacancies"
          title="Ready to Join Our Team?"
          subtitle="Explore exciting career opportunities and be part of our innovative journey. Let's build something amazing together."
          buttonText="View Open Positions"
        />
      </div>
    </Suspense>
  );
};

export default Career;

