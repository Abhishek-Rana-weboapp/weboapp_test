import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";;
import { ArrowUpToLine, CircleDashed, Wrench } from "lucide-react";

const Streamline = () => {
  const points = [
    {
      title: "Innovative WorkSpaces",
      icon:<Wrench size={25} />,
    },
    {
      title: "Cutting-Edge Technologies",
      icon: <ArrowUpToLine size={25} />,
    },
    {
      title: "Work-Life Balance",
      icon: <CircleDashed size={25} />,
    },
  ];
  return (
    <div className="bg-[#F7F9FF] py-10">
      <Wrapper>
        <div className="flex flex-col gap-2 bg-[#F7F9FF] md:flex-row">
          <div className="basis-1/2 content-center">
            <img
              src="/career/3.png"
              className="mx-auto max-h-[500px] w-full max-w-[600px] rounded-3xl object-cover"
              alt=""
            />
          </div>
          <div className="basis-1/2 content-center space-y-10">
            <h3 className={"my-2 text-start text-3xl font-bold text-primary-800"}>
              Streamline, Prioritize and Elevate Your Career
            </h3>
            <p className={"my-2 text-start text-gray-600"}>
              Discover opportunities where your skills drive innovation. At
              Webappdiscovery, we empower your growth and inspire creativity in
              a collaborative and dynamic environment.
            </p>
            <div className="flex flex-col gap-4">
              {points.map((point, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-2 rounded-xl border bg-white p-3 shadow md:text-lg"
                  >
                    {point.icon && point.icon}
                    {point.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Streamline;
