
import { Outlet } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Header from './components/header/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <ThemeContextProvider>
      <Header/>
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
