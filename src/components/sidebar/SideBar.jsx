import  { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  easeInOut,
  motion,
  MotionConfig,
} from "framer-motion";
import Button from "../buttons/Button";

const links = [
  {
    label: "solutions",
    to: "/services",
  },
  {
    label: "industries",
    to: "/industries",
  },
  {
    label: "portfolio",
    to: "/portfolio",
  },
  {
    label: "about",
    to: "/about",
  },
  {
    label: "blog",
    to: "/blog",
  },
  {
    label: "career",
    to: "/career",
  },
  {
    label: "contact",
    to: "/contact",
  },
];

const SideBar = ({ color }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-max md:hidden">
      <AnimatedBurgerButton
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        color={color}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: navOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="fixed right-0 top-0 h-screen w-full max-w-[300px] pt-20 space-y-2 bg-white-900 rounded-md bg-white bg-clip-padding backdrop-filter backdrop-blur text-black/70"
      >
        <Links navOpen={navOpen} setNavOpen={setNavOpen} />
        <Button onClick={()=>navigate("/contact")} className={"px-6 py-2"}>Schedule a Call</Button>
      </motion.div>
    </div>
  );
};

export default SideBar;

const Links = ({ navOpen, setNavOpen }) => {
  const location = useLocation();

  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={() => {
            setNavOpen(false);
          }}
          className={"group block p-1 md:text-xl"}
        >
          <span className="relative">
            {link.label}
            <span
              className={`max-sm:hidden  absolute bottom-0 left-0 h-1 w-full origin-left bg-black transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${location.pathname === link.to ? "scale-x-100" : "scale-x-0"}`}
            ></span>
          </span>
        </NavLink>
      ))}
    </>
  );
};

const AnimatedBurgerButton = ({ navOpen, setNavOpen, color }) => {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: easeInOut }}>
      <motion.button
        onClick={() => setNavOpen(!navOpen)}
        className="relative z-50 h-12 w-12 gap-1 rounded-full hover:cursor-pointer hover:shadow-md"
        animate={navOpen ? "open" : "close"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-35%",
            background: color ? color : "#222",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          className={`absolute h-[2px] w-5`}
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            background: color ? color : "#222",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["50%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "50%"],
            },
          }}
          className={`absolute h-[2px] w-5`}
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-10%",
            y: "35%",
            background: color ? color : "#222",
            width: "0.64rem",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
              width: "1.25rem",
              x: "-50%",
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
          className={`absolute h-[2px] w-2.5`}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
};
