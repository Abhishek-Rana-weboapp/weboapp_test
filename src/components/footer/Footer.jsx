import React from "react";
import AnimatedLink from "../animateComponents/AnimatedLink";
import { MapPin } from "lucide-react";
import Wrapper from "../Wrapper";

const Footer = () => {
  const footerData = {
    Services: [
      {
        title: "Web Development",
        link: "/services/webdev",
      },
      {
        title: "Artificial Intelligence",
        link: "/services/ai",
      },
      {
        title: "SaaS",
        link: "/services/saas",
      },
      {
        title: "ERP",
        link: "/services/erp",
      },
    ],
    Industries: [
      {
        title: "Healthcare",
        link: "/industries/healthcare",
      },
      {
        title: "Finance",
        link: "/industries/finance",
      },
      {
        title: "Education",
        link: "/industries/education",
      },
      {
        title: "Healthcare",
        link: "/industries/healthcare",
      },
      {
        title: "Finance",
        link: "/industries/finance",
      },
      {
        title: "Education",
        link: "/industries/education",
      },
    ],

    Company: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "FAQs",
        link: "/faqs",
      },
    ],
  };

  return (
    <footer
      // className="bg-[#F9FAFB]"
      className="bg-primary-950"
    >
      <Wrapper className={"grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 overflow-hidden text-white p-5 py-10"}>

      {/* services */}
      {Object.keys(footerData).map((data, index) => {
        return (
          <div
          className={`${index !== Object.keys(footerData).length ? "sm:border-r" : ""}`}
            key={index}
          >
            <div className="w-max space-y-2 text-start sm:mx-auto">
              <h3 className="text-lg font-semibold uppercase">{data}</h3>
              <ul className="flex flex-col gap-2">
                {footerData[data].map((service, serviceIndex) => {
                  return <AnimatedLink key={serviceIndex} {...service} />;
                })}
              </ul>
            </div>
          </div>
        );
      })}

      {/* Contact */}
      <div>
        <div className="w-full max-w-max space-y-3 text-start sm:mx-auto">
          <h3 className="text-xl font-medium uppercase">Address</h3>
          <div className="flex w-full items-start gap-2">
            <MapPin size={30} />
            <p className="max-w-64 text-wrap">
            Tricity Plaza, Peer Muchalla, Zirakpur, PB. India 160104
            info@webappdiscovery.com
            Mon – Fri: 9:30 am – 6:30pm
            </p>
          </div>
        </div>
      </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
