import React from "react";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import { Pin } from "../../../components/buttons/Pin";

const Hero = () => {
  return (
    <div className="mb-8 bg-[#F7F9FF]">
      <div className="mx-auto flex h-full max-w-[1500px] text-start pt-32 p-4 gap-3">
        <div className="sm:basis-1/2 space-y-8 p-4">
          <h1 className={"max-w-[600px] md:text-6xl text-2xl font-bold text-primary-800"}>
            Join Our Community for Successful career
          </h1>
          <p className={"max-w-[600px]  text-gray-600"}>
            Join a team of passionate innovators building cutting-edge solutions. 
            Grow your career with exciting projects, continuous learning, and a 
            supportive environment that values your contribution.
          </p>
          <a 
            href="#vacancies"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('vacancies')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <Pin variant="primary" className={" mt-5"} onClick={()=>navigate('/career#vacancies')}>Check Latest Jobs</Pin>
          </a>
        </div>
        <div className="sm:basis-1/2 hidden sm:block">
          <div className="flex gap-2 items-end justify-end">
            <img className=" w-1/3 object-cover rounded-3xl" src="/career/2.png" alt="" />
            <img className="w-2/3 object-cover rounded-3xl" src="/career/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
