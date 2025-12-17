import React from 'react';
import Wrapper from '../../components/Wrapper';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import RequestServiceForm from '../../components/forms/RequestServiceForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-8 text-black min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Wrapper className="max-w-7xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <BreadCrumbs />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-widest text-primary-600 bg-primary-100 rounded-full">
              Get In Touch
            </span>
            <h1 className="lg:text-[3.5rem] md:text-[2.5rem] text-3xl tracking-wider font-bold text-primary-700 md:leading-[1.15] mb-6">
              Let's Start Your Digital Journey
            </h1>
            <p className="text-gray-600 font-medium text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? We're here to help you build something extraordinary.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary-600 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">info@weboappdiscovery.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-primary-600 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div variants={fadeInUp}>
            <RequestServiceForm />
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Contact;