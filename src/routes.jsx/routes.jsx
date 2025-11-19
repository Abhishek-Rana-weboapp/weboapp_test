import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Services from '../pages/services/Services'
import ServiceTemplate from '../pages/services/ServiceTemplate'
import Industries from '../pages/services/Industries'
import HealthCare from '../pages/services/HealthCare'
import Blogs from '../pages/blogs/Blogs'
import AboutUs from '../pages/about/AboutUs'
import Career from '../pages/career/Career'
import Portfolio from '../pages/portfolio/Portfolio'
import ProjectDetails from '../pages/portfolio/ProjectDetails'
import CreateBlog from '../pages/blogs/CreateBlog'
import Blog from '../pages/blogs/Blog'
import Contact from '../pages/contact/Contact'
import NotFound from '../pages/notFound/NotFound'
import { Suspense } from 'react'

const RouteContainer = () => {
  return (
    <div>
      <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Home />} />
            <Route
              path="/services"
              element={
                <LazyRoute>
                  <Services />
                </LazyRoute>
              }
            />
            <Route path="/services/:service" element={<ServiceTemplate />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/industries/healthcare"
              element={
                <LazyRoute>
                  <HealthCare/>
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/career" element={<Career />} />
            <Route
              path="/contact"
              element={
                <LazyRoute>
                  <Contact />
                </LazyRoute>
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
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  )
}

export default RouteContainer


const LazyRoute = ({ children }) => {
  return <Suspense fallback={<>Loading...</>}>{children}</Suspense>;
};