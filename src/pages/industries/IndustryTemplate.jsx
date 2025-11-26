import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Wrapper from '../../components/Wrapper';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import ImageComponent from '../../components/image/ImageComponent';
import Button from '../../components/buttons/Button';
import { Phone, Check, ArrowRight } from 'lucide-react';
import { industryData } from '../../static/industryData';
import ScheduleCallSection from '../../components/buttons/ScheduleCallSection';

const IndustryTemplate = () => {
  const { industry } = useParams();
  const navigate = useNavigate();
  
  // Normalize the industry parameter to match our data keys
  const normalizedIndustry = industry?.toLowerCase().replace(/\s+/g, '-');
  const data = industryData[normalizedIndustry];

  if (!data) {
    return (
      <Wrapper className="py-20 text-center">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">Industry Not Found</h1>
        <p className="text-gray-600 mb-8">The industry you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/industries')}>Back to Industries</Button>
      </Wrapper>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-50 to-white">
        <Wrapper className="py-12 md:py-20">
          <div className="mb-6">
            <BreadCrumbs />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center text-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="block w-max text-sm font-semibold uppercase tracking-widest text-primary-700">
                {data.title} Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
                {data.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {data.hero.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact">
                  <Button className="flex items-center gap-2 px-6 py-3 font-semibold">
                    <Phone size={18} /> Schedule a Call
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => navigate('/industries')}
                  className="flex items-center gap-2 px-6 py-3 font-semibold"
                >
                  View All Industries <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <ImageComponent
                src={data.hero.image}
                webpSrc={data.hero.image}
                alt={data.title}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <Wrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              {data.overview.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.overview.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {data.overview.keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <Check className="text-primary-700 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-zinc-100">
        <Wrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our {data.title} Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet the unique needs of your {data.title.toLowerCase()} business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Wrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Benefits for Your Business
              </h2>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-primary-700 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg text-primary-700 font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <Wrapper>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Ready to Transform Your {data.title} Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our {data.title.toLowerCase()} solutions can help you achieve your business goals and drive growth.
              </p>
              <Link to="/contact">
                <Button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold mx-auto">
                  <Phone size={20} /> Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      {/* Request Service Form */}
      <ScheduleCallSection 
        title={`Ready to Transform Your ${data?.title} Business?`}
        subtitle={`Let's discuss how our ${data?.title.toLowerCase()} solutions can help you achieve your business goals and drive growth.`}
      />
    </div>
  );
};

export default IndustryTemplate;

