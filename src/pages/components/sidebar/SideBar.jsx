import React, { useEffect, useState } from "react";
import { HiArrowDown, HiOutlineHome } from "react-icons/hi2";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import SideListItem from "./SideListItem";
import { MdOutlineDesignServices, MdOutlinePeopleAlt } from "react-icons/md";
import { ImInfo } from "react-icons/im";
import { PiSuitcaseSimple } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const SideBar = ({
  onClick,
  homeRef,
  servicesRef,
  aboutRef,
  currentRef,
  clientsRef,
  careersRef
}) => {
  const isDesktop = useMediaQuery({ query: "(min-width : 992px)" });
  const [navOpen, setNavOpen] = useState(isDesktop ? true : false);

  useEffect(() => {
    if (isDesktop) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  }, [isDesktop]);

  const isCurrentRef =
    currentRef === homeRef.current ? "text-white" : "text-primary";

  const links = [
    {
      label: "Home",
      ref: homeRef,
      icon: <HiOutlineHome size={25} className={`${isCurrentRef}`} />,
    },
    {
      label: "Services",
      ref: servicesRef,
      icon: <MdOutlineDesignServices size={25} className={`${isCurrentRef}`} />,
    },
    {
      label: "Clients",
      ref: clientsRef,
      icon: <MdOutlinePeopleAlt size={25} className={`${isCurrentRef}`} />,
    },
    {
      label: "About",
      ref: aboutRef,
      icon: <ImInfo size={25} className={`${isCurrentRef}`} />,
    },
  ];


  return (
    <>
      {!navOpen ? (
        <div
          className="fixed left-3 top-3 z-50 rounded-full bg-text-primary bg-white backdrop-blur-md p-2 hover:cursor-pointer lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <IoMdMenu size={25} />
        </div>
      ) : (
        <div className="fixed left-3 top-3 z-50 rounded-full bg- text-primary bg-white backdrop-blur-md p-2 hover:cursor-pointer lg:hidden">
          <IoMdClose size={25} onClick={() => setNavOpen(!navOpen)} />
        </div>
      )}
      <div
        className={`fixed left-0 top-0 z-20 h-[100dvh] flex items-center origin-left rounded-lg p-4 shadow-lg backdrop-blur-lg lg:backdrop-blur-0 transition-all duration-300 lg:bg-transparent lg:shadow-none ${
          navOpen
            ? "w-3/5 min-w-max opacity-100 sm:w-2/6 md:w-2/6 lg:w-max"
            : "w-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 overflow-hidden lg:gap-10 lg:pt-10">
          {links.map((link, index) => {
            return (
              <SideListItem
              key={index}
                ref={{
                  currentRef: currentRef,
                  selfRef: link.ref,
                  homeRef: homeRef,
                  servicesRef:servicesRef
                }}
                icon={link.icon}
                onClick={onClick}
                isCurrentRef={isCurrentRef}
              >
                {link.label}
              </SideListItem>
            );
          })}
          <NavLink
            to={"/career"}
            className={
              "flex w-max items-center justify-start gap-2 p-3 text-sm transition-all duration-300 hover:scale-105 hover:cursor-pointer lg:mx-0"
            }
          >
            {/* <PiSuitcaseSimple
              size={25}
              className={
                currentRef === homeRef.current
                  ? "text-white"
                  : "text-primary"
              }
            /> */}
            <span
              className={`${`after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:content-[''] hover:after:w-full ${currentRef === homeRef.current  ? "text-white" : "text-primary"} origin-left after:rounded-md after:transition-all after:duration-300 ${currentRef === homeRef.current ? "after:bg-white" : "after:bg-secondarybg"} relative hover:scale-105`
              }`}
            >
              Careers
            </span>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
