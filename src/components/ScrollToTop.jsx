import { useLayoutEffect} from "react";
import { useLocation, useNavigate} from "react-router-dom";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate()

  useLayoutEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"});
  }, [pathname,navigate]);

};

export default ScrollToTop;