import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  Building,
  Globe,
  Cpu,
  Network,
  Cloud,
  Server,
  Terminal,
  CircuitBoard,
  Wifi,
  HardDrive
} from 'lucide-react';
import Wrapper from '../../components/Wrapper';
import FadeUpHeading from '../../components/animateComponents/FadeUpHeading';
import FadeUpParagraph from '../../components/animateComponents/FadeUpParagraph';
import Button from '../../components/buttons/Button';

// Enhanced Zod validation schema
const contactSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters and spaces'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(15, 'Phone number must be less than 15 characters')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  service: z.string().optional()
});

// Floating tech elements component
const FloatingElements = () => {
  const elements = [
    { Icon: Cpu, delay: 0, duration: 8 },
    { Icon: Network, delay: 1, duration: 10 },
    { Icon: Cloud, delay: 2, duration: 12 },
    { Icon: Server, delay: 3, duration: 9 },
    { Icon: Terminal, delay: 4, duration: 11 },
    { Icon: CircuitBoard, delay: 5, duration: 7 },
    { Icon: Wifi, delay: 6, duration: 13 },
    { Icon: HardDrive, delay: 7, duration: 6 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360]
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon className="w-8 h-8 text-blue-400/15" />
        </motion.div>
      ))}
    </div>
  );
};

// Contact form component
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Web Development',
    'Mobile Development',
    'AI Development',
    'ERP Solutions',
    'Zoho Development',
    'E-Commerce Development',
    'IT Consulting',
    'Offshore Development Team'
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">Send us a message and we'll respond as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('firstName')}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('lastName')}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Company and Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              {...register('company')}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            </label>
            <select
              {...register('service')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            {...register('subject')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="How can we help you?"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </div>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

// Contact information component
const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@weboapp.com', 'support@weboapp.com'],
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:hello@weboapp.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-green-500 to-emerald-500',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Street', 'San Francisco, CA 94105'],
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-red-500',
      action: null
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
            item.action ? 'cursor-pointer' : ''
          }`}
          onClick={() => item.action && window.open(item.action, '_blank')}
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          {item.details.map((detail, idx) => (
            <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
          ))}
          {item.action && (
            <div className="mt-3 text-blue-500 text-sm font-medium">
              Click to {item.title.toLowerCase()} →
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Main Contact component
const Contact = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-12 px-4 sm:py-16 md:py-20 md:px-8 lg:px-12"
        style={{ y }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_25%_at_50%_0%,_#d4e4ff,_#fff)]" />
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* Tech-themed Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, 60, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-200/20 rounded-full blur-xl"
          />
        </div>
        
        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FadeUpHeading className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </FadeUpHeading>
            <FadeUpParagraph className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your goals with our cutting-edge technology solutions.
            </FadeUpParagraph>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <Wrapper className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the most convenient way to reach us. We're here to help and answer any questions you might have.
          </p>
        </motion.div>
        
        <ContactInfo />
      </Wrapper>

      {/* Contact Form Section */}
      <Wrapper className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have a project in mind? Need technical consultation? Or just want to say hello? 
                We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Response</h3>
                  <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600 text-sm">Free technical consultation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Project Planning</h3>
                  <p className="text-gray-600 text-sm">Detailed project roadmap</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <ContactForm />
        </div>
      </Wrapper>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Let's discuss your requirements and create something amazing together.
            </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                 <Phone className="w-5 h-5 mr-2" />
                 Call Now
               </Button>
               <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                 <Mail className="w-5 h-5 mr-2" />
                 Email Us
               </Button>
             </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
