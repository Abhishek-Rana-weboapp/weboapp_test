import React, { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import WhyWorkWithUs from "./sections/WhyWorkWithUs";
import OpenVacancies from "./sections/OpenVacancies";
import HiringProcess from "./sections/HiringProcess";

const Streamline =lazy(()=>import("./sections/Streamline"))

const Career = (props) => {


  return (
    <Suspense fallback={<>Loading</>}>
      <div className="space-y-20">
        <Hero />
        <WhyWorkWithUs />
        <Streamline/>
        <OpenVacancies />
        {/* <HiringProcess/> */}
      </div>
    </Suspense>
  );
};

export default Career;

