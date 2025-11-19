import Header from './components/header/Header';
import BackgroundGrid from './components/layout/Background';
import CursorReticle from './components/ui/CursorReticle';
import { ThemeContextProvider } from './context/ThemeContext';
import RouteContainer from './routes.jsx/routes';

const AppLayout =
  () => {
    return (
      <div className="flex min-h-screen flex-col relative">
        {/* <BackgroundGrid /> */}
        <CursorReticle/>
        <ThemeContextProvider>
           <Header />
           <RouteContainer />
        </ThemeContextProvider>
      </div>
    );
  };

export default AppLayout;
