import { useState } from "react";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";

const WhyWorkWithUs = () => {
  const points = [
    {
      title: "Collaborative Culture",
      description:
        "At Weboappdiscovery, we believe in teamwork, inclusivity, and open communication. Join a community where diverse ideas thrive, and every voice matters.We encourage open communication across all levels, empowering employees to learn from one another and achieve shared goals. By working with us, you'll be part of a dynamic team that values creativity, supports growth, and celebrates collective accomplishments. Together, we build solutions, solve challenges, and succeed as one cohesive unit. Join us to experience a workplace where collaboration fuels progress and your contributions make a meaningful impact.",
      src: "/landing/ourValues/3.png",
    },
    {
      title: "Growth Opportunities",
      description:
        "At Weboappdiscovery, your growth is our priority. We are committed to providing an environment where you can continuously learn, improve, and advance in your career. With regular training programs, mentorship opportunities, and a culture that encourages innovation, we ensure you stay ahead in your professional journey. You'll have the chance to take on challenging projects, collaborate with skilled professionals, and expand your expertise across diverse areas. Whether it's enhancing your technical skills, taking on leadership roles, or exploring new domains, we support your ambitions and celebrate your achievements. Join us and grow with a company that invests in your success.",
      src: "/landing/ourValues/3.png",
    },
    {
      title: "Comprehensive Benefits",
      description:
        "At Weboappdiscovery, we believe in teamwork, inclusivity, and open communication. Join a community where diverse ideas thrive, and every voice matters.",
      src: "/landing/ourValues/3.png",
    },
  ];

  const [activePoint, setActivePoint] = useState(0);

  return (
    <div className="mx-auto flex max-w-[1500px] mt-10 flex-col gap-6 p-3 md:p-4">
      <div className="flex flex-col gap-4 md:flex-row justify-between">

        <div className="flex flex-col gap-10 max-w-[800px] justify-center">
      <h2 className={"text-start text-3xl font-bold text-primary-800"}>Why Work With Us</h2>
          <div className="flex max-sm:gap-1">
            {points.map((point, index) => {
              return (
                <div
                  className={`group flex h-max justify-start border-b-2 hover:cursor-pointer`}
                  onClick={() => setActivePoint(index)}
                  key={index}
                >
                  <span
                    className={`${activePoint === index ? "before:bg-blue-400" : "text-black/70"} relative pr-2 text-start transition-colors duration-200 before:absolute before:-bottom-[2px] before:h-[2px] before:w-full before:transition-colors before:duration-300 before:content-[''] before:group-hover:bg-blue-400 `}
                  >
                    {point.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <p className="max-w-[700px] text-start text-gray-600">
              {points[activePoint].description}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            key={activePoint}
            src="/landing/ourValues/3.png"
            className="mx-auto rounded-3xl object-cover max-md:max-w-[250px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
