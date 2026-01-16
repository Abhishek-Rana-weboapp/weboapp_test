import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Button from './Button';
import Wrapper from '../Wrapper';

const ScheduleCallSection = ({ 
  title = "Ready to Get Started?", 
  subtitle = "Let's discuss your project and bring your vision to life.",
  buttonText = "Schedule a Call",
  className = "",
  CTALink = "/contact"
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-r from-primary-700 to-blue-600 ${className}`}>
      <Wrapper>
        <div 
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <NavLink to={CTALink}>
            <Button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Phone size={20} />
              {buttonText}
              <ArrowRight size={20} />
            </Button>
          </NavLink>
          
          <div className="mt-6 text-blue-200 text-sm">
            <p>Free consultation • No commitment • Quick response</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ScheduleCallSection;
