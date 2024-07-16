
import { Link, useLocation } from "react-router-dom";
import SvgLogo from "../svg/SvgLogo";
import SlideButton from "../buttons/SlideButton";

const Header = ({currentRef, homeRef, handleOpenForm})=>{
  const location = useLocation()
  
  return (
    <div className={`py-4 ${location.pathname !== "/career" ? "pl-14 w-[calc(100%-70px)] sm:w-full" : "pl-4 w-full"} pr-4 lg:pl-40 lg:pr-10 bg-transparent flex justify-between fixed  z-10`}>
     <Link to={"/"}><div className="sm:w-40 w-20 h-10"> <SvgLogo ref={{currentRef:currentRef, homeRef:homeRef}}/></div></Link>
     {/* <SlideButton onClick={handleOpenForm}>Contact Us</SlideButton> */}
    </div>
  );
};

export default Header;
