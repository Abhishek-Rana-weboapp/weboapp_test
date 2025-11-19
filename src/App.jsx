import './App.css';
import { FormContextProvider } from './context/FormContext';
import Header from './components/header/Header';
import ScrollToTop from './components/ScrollToTop';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/Home';
import Career from './pages/career/Career';
import Blog from './pages/blogs/Blog';
import { ThemeContextProvider } from './context/ThemeContext';
import Footer from './components/footer/Footer';
import HealthCare from './pages/services/HealthCare';
import ServiceTemplate from './pages/services/ServiceTemplate';
import NotFound from './pages/notFound/NotFound';
import AboutUs from './pages/about/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import ProjectDetails from './pages/portfolio/ProjectDetails';
import {
  lazy,
  Suspense,
} from 'react';

function App() {
  const location =
    useLocation();
  const Blogs =
    lazy(
      () =>
        import(
          './pages/blogs/Blogs'
        ),
    );
  const Services =
    lazy(
      () =>
        import(
          './pages/services/Services'
        ),
    );
  const Industries =
    lazy(
      () =>
        import(
          './pages/services/Industries'
        ),
    );
  const CreateBlog =
    lazy(
      () =>
        import(
          './pages/blogs/CreateBlog'
        ),
    );
  const Technologies =
    lazy(
      () =>
        import(
          './pages/technologies/Technologies'
        ),
    );
    
  return (
    <FormContextProvider>
      <ThemeContextProvider>
        <Header />
        <main>
            <ScrollToTop />
            <Routes
              location={
                location
              }
              key={
                location.pathname
              }
            >
              <Route
                path="/"
                index
                element={
                  <Home />
                }
              />
              <Route
                path="/services"
                element={
                  <LazyRoute>
                    <Services />
                  </LazyRoute>
                }
              />
              <Route
                path="/services/:service"
                element={
                  <ServiceTemplate />
                }
              />
              <Route
                path="/industries"
                element={
                  <LazyRoute>
                  <Industries />
                  </LazyRoute>
                }
              />
              <Route
                path="/technologies"
                element={
                  <LazyRoute>
                    <Technologies />
                  </LazyRoute>
                }
              />
              <Route
                path="/industries/healthcare"
                element={
                  <LazyRoute>
                    <HealthCare />
                  </LazyRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <LazyRoute>
                    <Blogs />
                  </LazyRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <AboutUs />
                }
              />
              <Route
                path="/career"
                element={
                  <Career />
                }
              />
              <Route
                path="/portfolio"
                element={
                  <LazyRoute>
                    <Portfolio />
                  </LazyRoute>
                }
              />
              <Route
                path="/project/:id"
                element={
                  <LazyRoute>
                    <ProjectDetails />
                  </LazyRoute>
                }
              />
              <Route
                path="/createblog"
                element={
                  <LazyRoute>
                    <CreateBlog />
                  </LazyRoute>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <Blog />
                }
              />
              <Route
                path="*"
                element={
                  <NotFound />
                }
              />
            </Routes>
        </main>
        <Footer />
      </ThemeContextProvider>
    </FormContextProvider>
  );
}

export default App;

const LazyRoute =
  ({
    children,
  }) => {
    return (
      <Suspense
        fallback={
          <>
            Loading...
          </>
        }
      >
        {
          children
        }
      </Suspense>
    );
  };
