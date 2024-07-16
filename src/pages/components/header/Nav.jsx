import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { ImInfo } from "react-icons/im";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdOutlineDesignServices, MdOutlinePeopleAlt } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate()
  
  const links = [
      {
          label: "Home",
          //   ref: homeRef,
          icon: <HiOutlineHome size={25} className="text-primary" />,
          type: "scroll",
      },
      {
          label: "Services",
          //   ref: servicesRef,
          icon: <MdOutlineDesignServices size={25} className="text-primary" />,
          type: "scroll",
      },
      {
          label: "Clients",
          //   ref: clientsRef,
          icon: <MdOutlinePeopleAlt size={25} className="text-primary" />,
          type: "scroll",
      },
      {
          label: "About",
          //   ref: aboutRef,
          icon: <ImInfo size={25} className="text-primary" />,
          type: "scroll",
      },
  ];
  
  const isDesktop = useMediaQuery({ query: "(min-width : 992px)" });
  const [navOpen, setNavOpen] = useState(isDesktop ? true : false);
  
  const handleLink = (key)=>{
 
      navigate("/", {state : {key : key}})
  }
  
  useEffect(() => {
      if (isDesktop) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    }, [isDesktop]);
  
  return (
    <>
    {!navOpen ? (
       <div
         className="left-3 top-3 z-50 rounded-full w-max bg-white p-2 hover:cursor-pointer lg:hidden"
         style={{borderRadius : "50%"}}
         onClick={() => setNavOpen(!navOpen)}
         >
         <IoMdMenu size={25} className='text-primary' />
       </div>
   ) : (
     <div>
       <div
         className="fixed left-3 top-3 z-20 rounded-full bg-white p-2 hover:cursor-pointer lg:hidden"
         onClick={() => setNavOpen(!navOpen)}
         >
         <IoMdClose size={25} className='text-primary' />
       </div>
     </div>
   )}
  <div
    className={` bg-white h-screen fixed left-0 top-0 z-20 w-full flex flex-col justify-center rounded-lg lg:bg-transparent lg:shadow-none shadow-lg p-4 transition-all duration-300 origin-left ${
      navOpen
      ? "w-3/5 sm:w-2/6 md:w-2/6 lg:w-max min-w-max opacity-100"
      : "w-0 opacity-0"
    }`}
    >
    <ul className={`flex flex-col gap-3 overflow-hidden lg:gap-10 lg:pt-10`}>
      {links.map((link, index) => {
        
        return (
          <li onClick={()=>handleLink(link.label)}  className="flex w-max items-center justify-start gap-2 p-3 text-sm transition-all duration-300 hover:scale-105 hover:cursor-pointer lg:mx-0">
              <span  className='after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:content-[""] hover:after:w-full origin-left after:rounded-md after:transition-all after:duration-300 relative hover:scale-105 after:bg-secondarybg hover:cursor-pointer'>
              {link.label}
              </span>
          </li>
          );
          
        })}
    </ul>
  </div>
</>
  )
};

export default Nav;


{
  /* <ul className={`flex flex-col gap-3 overflow-hidden lg:gap-10`}>
  {
    links.map((link, index)=>{
      return <li className='hover:cursor-pointer' onClick={()=>handleLink(link.label)}>
      {link.label}
      </li>
      })
      }
     </ul> */
}
