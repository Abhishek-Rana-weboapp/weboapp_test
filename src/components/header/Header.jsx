import SideBar from "../sidebar/SideBar";
import { Link } from 'react-router-dom';
import SvgLogo from '../svg/SvgLogo';
import { useThemeContext } from "../../context/ThemeContext";
import Button from "../buttons/Button";
import { useFormContext } from "../../context/FormContext";

const Header =
  () => {

      const { logoColor } = useThemeContext();
      const {setIsFormOpen} = useFormContext();
    return (
      <header className="sticky top-0 z-[1000] bg-white/90 shadow-md backdrop-blur-md">
        <div className="mx-auto flex max-w-[1900px] items-center justify-between p-1 md:px-8 px-2">
          <Link to="/">
            <div className="flex h-16 w-20 items-center sm:w-28">
              <SvgLogo fill="#282E56" />
            </div>
          </Link>

          <ul className='flex lg:gap-14 gap-4 items-center max-md:hidden'>
            <li className="font-semibold select-none"><Link to="/services">Solutions</Link></li>
            <li className="font-semibold select-none"><Link to="/industries">Industries</Link></li>
            <li className="font-semibold select-none"><a href="https://portfolio.weboappdiscovery.com/" target="_blank" rel="noopener noreferrer" >Our Work</a></li>
            <li className="font-semibold select-none"><Link to="/about">About</Link></li>
            <li className="font-semibold select-none"><Link to="/blog">Blog</Link></li>
            <li>
              <Button className={"px-6 py-2"} onClick={()=>setIsFormOpen(true)} >Schedule a Call</Button>
            </li>
          </ul>

          <SideBar color={logoColor ? logoColor : "#000"}/>
        </div>
      </header>
    );
  };

export default Header;
