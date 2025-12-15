import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FadeUpHeading from "../../components/animateComponents/FadeUpHeading";
import { fadeUp } from "../../utils/axios/animations/animations";
import { 
  Globe, 
  ShoppingCart, 
  Database, 
  Users, 
  Smartphone, 
  Brain, 
  Code, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Cpu,
  Network,
  Cloud,
  Server,
  Terminal,
  CircuitBoard,
  Wifi,
  HardDrive
} from "lucide-react";
import ScheduleCallSection from "../../components/buttons/ScheduleCallSection";

const services = [
  {
    id: 1,
    title: "Zoho Development",
    description: "Custom Zoho CRM, Creator, and Suite applications tailored to your business needs. Streamline operations with powerful automation and integrations.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: ["CRM Customization", "Workflow Automation", "Third-party Integrations", "Data Migration"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, responsive websites that deliver exceptional user experiences. From simple landing pages to complex web applications.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
  },
  {
    id: 3,
    title: "E-Commerce Development",
    description: "Complete e-commerce solutions that drive sales and growth. Custom online stores with advanced features and seamless user experience.",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Mobile Commerce"]
  },
  {
    id: 4,
    title: "ERP Solutions",
    description: "Enterprise Resource Planning systems that integrate all business processes. Improve efficiency and decision-making with comprehensive data management.",
    icon: Database,
    color: "from-orange-500 to-red-500",
    features: ["Process Integration", "Real-time Analytics", "Scalable Architecture", "Custom Modules"]
  },
  {
    id: 5,
    title: "IT Consulting Services",
    description: "Strategic technology consulting to help you make informed decisions. Digital transformation and technology roadmap planning.",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    features: ["Technology Assessment", "Digital Strategy", "System Architecture", "Risk Management"]
  },
  {
    id: 6,
    title: "Offshore Development Team",
    description: "Dedicated development teams working as your extended workforce. Cost-effective solutions with world-class expertise.",
    icon: Users,
    color: "from-teal-500 to-cyan-500",
    features: ["Dedicated Teams", "Agile Methodology", "24/7 Support", "Cost Effective"]
  },
  {
    id: 7,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. Engaging user experiences that drive engagement and retention.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
  },
  {
    id: 8,
    title: "AI Development",
    description: "Artificial Intelligence solutions that automate processes and provide intelligent insights. Machine learning models and AI-powered applications.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  }
];

// Floating tech visual elements
const FloatingElements = () => {
  const floatingIcons = [
    { Icon: Cpu, className: "text-blue-400/15 w-8 h-8 top-20 left-10", delay: 0 },
    { Icon: Network, className: "text-purple-400/15 w-6 h-6 top-40 right-16", delay: 1 },
    { Icon: Cloud, className: "text-cyan-400/15 w-10 h-10 bottom-40 left-20", delay: 2 },
    { Icon: Server, className: "text-green-400/15 w-7 h-7 top-60 left-1/3", delay: 0.5 },
    { Icon: Terminal, className: "text-orange-400/15 w-9 h-9 bottom-60 right-1/4", delay: 1.5 },
    { Icon: CircuitBoard, className: "text-indigo-400/15 w-8 h-8 top-80 right-10", delay: 2.5 },
    { Icon: Wifi, className: "text-blue-500/15 w-6 h-6 top-30 right-1/3", delay: 3 },
    { Icon: HardDrive, className: "text-gray-400/15 w-7 h-7 bottom-30 left-1/4", delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ Icon, className, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className}`}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  // Map service titles to URL slugs
  const getServiceSlug = (title) => {
    const slugMap = {
      "Zoho Development": "zoho-development",
      "Web Development": "web-development",
      "E-Commerce Development": "e-commerce-development",
      "ERP Solutions": "erp-solutions",
      "IT Consulting Services": "it-consulting-services",
      "Offshore Development Team": "offshore-development-team",
      "Mobile Development": "mobile-development",
      "AI Development": "ai-development",
    };
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleClick = () => {
    navigate(`/services/${getServiceSlug(service.title)}`);
  };

  return (
    <motion.div
      ref={ref}
      whileHover={{y:-5, scale: 1.01 }}
      transition={{type: "spring", duration: 0.2}}
      onClick={handleClick}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-100 hover:shadow-2xl sm:p-8 cursor-pointer"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-200 group-hover:opacity-5`} />
      
      {/* Icon */}
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg sm:h-16 sm:w-16`}>
        <service.icon size={24} className="sm:w-8 sm:h-8" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
        {service.title}
      </h3>
      
      <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 sm:space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-xs text-gray-600 sm:text-sm">
            <CheckCircle size={14} className="mr-2 mt-0.5 flex-shrink-0 text-green-500 sm:mt-0" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover Arrow */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
      >
        <ArrowRight className="h-5 w-5 text-gray-400 sm:h-6 sm:w-6" />
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Create refs for each step
  const stepRefs = useRef([]);
  
  // Process steps data
  const processStepsData = [
    {
      id: 1,
      title: "Dreaming Up the Idea",
      description: "We brainstorm and conceptualize innovative solutions tailored to your vision and market needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Planning the Journey",
      description: "We create detailed roadmaps, timelines, and strategies to guide your project to success.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Bringing the Vision to Life",
      description: "We transform concepts into tangible designs, wireframes, and prototypes that bring your idea to life.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Building the Product",
      description: "Our expert developers code your solution using cutting-edge technology and industry best practices.",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Testing, Tweaking, and Perfecting",
      description: "We rigorously test every feature, fix bugs, and optimize performance to ensure flawless functionality.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Getting Ready to Launch",
      description: "We prepare your product for deployment, set up hosting, and ensure everything is ready for the big day.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 7,
      title: "The Big Day – Launch!",
      description: "We deploy your solution to production and celebrate the successful launch of your digital product.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Growing and Evolving",
      description: "We provide ongoing support, updates, and enhancements to help your product grow and evolve with your business.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  // Process steps with dynamic properties
  const processSteps = processStepsData.map((step, index) => ({
    ...step,
    isLeft: index % 2 === 0, // Even index = left, odd index = right
    delay: (index + 1) * 0.1 // Dynamic delay based on index
  }));
  
  // Custom hook to detect when step is in center and track if it has been passed
  const useStepInCenter = (stepRef, stepIndex) => {
    const [isInCenter, setIsInCenter] = useState(false);
    const [hasBeenPassed, setHasBeenPassed] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (stepRef.current) {
          const rect = stepRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const centerY = windowHeight / 2;
          const stepCenterY = rect.top + rect.height / 2;
          
          // Check if step is within 100px of center
          const currentlyInCenter = Math.abs(stepCenterY - centerY) < 100;
          setIsInCenter(currentlyInCenter);
          
          // If step has been in center, mark it as passed
          if (currentlyInCenter && !hasBeenPassed) {
            setHasBeenPassed(true);
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, [stepRef, hasBeenPassed]);
    
    return { isInCenter, hasBeenPassed };
  };

  // Step component with center detection
  const TimelineStep = ({ stepNumber, title, description, color, isLeft, delay, stepIndex }) => {
    const stepRef = useRef(null);
    const { isInCenter, hasBeenPassed } = useStepInCenter(stepRef, stepIndex);
    
    // Convert color class to rgba for background
    const getBackgroundColor = (colorClass) => {
      const colorMap = {
        'from-blue-500 to-cyan-500': 'rgba(59, 130, 246, 0.1)',
        'from-purple-500 to-pink-500': 'rgba(168, 85, 247, 0.1)',
        'from-green-500 to-emerald-500': 'rgba(34, 197, 94, 0.1)',
        'from-orange-500 to-red-500': 'rgba(249, 115, 22, 0.1)',
        'from-indigo-500 to-purple-500': 'rgba(99, 102, 241, 0.1)',
        'from-teal-500 to-cyan-500': 'rgba(20, 184, 166, 0.1)',
        'from-pink-500 to-rose-500': 'rgba(236, 72, 153, 0.1)',
        'from-violet-500 to-purple-500': 'rgba(139, 92, 246, 0.1)',
      };
      return colorMap[colorClass] || 'rgba(59, 130, 246, 0.1)';
    };

    // Convert color class to gradient colors with opacity
    const getGradientColors = (colorClass, opacity = 1) => {
      const colorMap = {
        'from-blue-500 to-cyan-500': `rgba(59, 130, 246, ${opacity}), rgba(6, 182, 212, ${opacity})`,
        'from-purple-500 to-pink-500': `rgba(168, 85, 247, ${opacity}), rgba(236, 72, 153, ${opacity})`,
        'from-green-500 to-emerald-500': `rgba(34, 197, 94, ${opacity}), rgba(16, 185, 129, ${opacity})`,
        'from-orange-500 to-red-500': `rgba(249, 115, 22, ${opacity}), rgba(239, 68, 68, ${opacity})`,
        'from-indigo-500 to-purple-500': `rgba(99, 102, 241, ${opacity}), rgba(168, 85, 247, ${opacity})`,
        'from-teal-500 to-cyan-500': `rgba(20, 184, 166, ${opacity}), rgba(6, 182, 212, ${opacity})`,
        'from-pink-500 to-rose-500': `rgba(236, 72, 153, ${opacity}), rgba(244, 63, 94, ${opacity})`,
        'from-violet-500 to-purple-500': `rgba(139, 92, 246, ${opacity}), rgba(168, 85, 247, ${opacity})`,
      };
      return colorMap[colorClass] || `rgba(59, 130, 246, ${opacity}), rgba(6, 182, 212, ${opacity})`;
    };
    
    return (
      <motion.div
        ref={stepRef}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay }}
        className="relative flex items-center min-h-[160px]"
      >
        {/* Left side content */}
        <div className={`w-1/2 pr-8 ${isLeft ? 'text-right' : 'text-left'}`}>
          {isLeft && (
            <motion.div
              animate={(isInCenter || hasBeenPassed) ? { 
                scale: 1.05, 
                backgroundColor: getBackgroundColor(color)
              } : { 
                scale: 1, 
                backgroundColor: "transparent" 
              }}
              transition={{ duration: 0.3 }}
              className="inline-block p-6 rounded-lg transition-all duration-300"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          )}
        </div>
        
         {/* Step Number on Center Line - Fixed positioning */}
         <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-max">
           <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-12 h-12 rounded-full shadow-lg border-4 border-white flex items-center justify-center"
             animate={(isInCenter || hasBeenPassed) ? {
               background: `linear-gradient(135deg, ${getGradientColors(color, 1)})`,
               boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
             } : {
               background: `linear-gradient(135deg, ${getGradientColors(color, 0.3)})`,
               boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
             }}
           >
             <span className="text-xl font-bold text-white">{stepNumber}</span>
           </motion.div>
         </div>
        
        {/* Right side content */}
        <div className={`w-1/2 pl-8 ${!isLeft ? 'text-left' : 'text-right'}`}>
          {!isLeft && (
            <motion.div
              animate={(isInCenter || hasBeenPassed) ? { 
                scale: 1.05, 
                backgroundColor: getBackgroundColor(color)
              } : { 
                scale: 1, 
                backgroundColor: "transparent" 
              }}
              transition={{ duration: 0.2 }}
              className="inline-block p-6 rounded-lg transition-all duration-300"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-12 px-4 sm:py-16 md:py-20 md:px-8 lg:px-12"
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
          <h1 className="mb-4 text-4xl font-bold sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl text-primary-700">
            Our Services
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl"
          >
            Empowering businesses with cutting-edge technology solutions. 
            From web development to AI integration, we deliver innovative 
            solutions that drive growth and success.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-12 px-4 sm:py-16 md:py-20 md:px-8 lg:px-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        
        {/* Tech-themed Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-3 text-2xl font-bold text-primary-700 sm:mb-4 sm:text-3xl md:text-4xl">
              What We Offer
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Simple Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 px-4 sm:py-16 md:py-20 md:px-8 lg:px-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
        
        {/* Floating Tech Elements for Process */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 text-blue-400/20"
          >
            <Code size={28} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-20 text-purple-400/20"
          >
            <Database size={24} />
          </motion.div>
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <FadeUpHeading className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Our
              <span className="bg-gradient-to-r from-[#0098f4] via-[#1b3f8f] to-[#00d4ff] bg-clip-text text-transparent">
                {" "}Process
              </span>
            </FadeUpHeading>
            <p className="text-base text-gray-600 sm:text-lg">
              A simple, proven approach to delivering exceptional results
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto" ref={timelineRef}>
            {/* Center Timeline Line with Progress */}
            <div className="absolute left-1/2 top-16 bottom-16 w-1 bg-gray-300 transform -translate-x-1/2" />
            <motion.div 
              className="absolute left-1/2 top-16 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 origin-top"
              style={{ height: progressHeight }}
            />
            
            {/* Timeline Steps */}
            <div className="space-y-20 pt-8 pb-8">
              {processSteps.map((step, index) => (
                <TimelineStep
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  isLeft={step.isLeft}
                  delay={step.delay}
                  stepIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 px-4 sm:py-16 md:py-20 md:px-8 lg:px-12"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-16 h-16 border-2 border-blue-300/30 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-10 right-10 w-12 h-12 border-2 border-purple-300/30 rounded-full"
          />
        </div>
        
        {/* <div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-[#0098f4] to-[#1b3f8f] p-8 text-center text-white sm:p-12 overflow-hidden"> */}
          {/* Animated background pattern */}
          {/* <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            </motion.div>
          </div>
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-6 text-base opacity-90 sm:mb-8 sm:text-lg">
              Let's discuss how our services can help you achieve your goals. 
              Get a free consultation and project estimate today.
            </p>
            <motion.button
            onClick={()=>navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#1b3f8f] shadow-lg transition-all duration-300 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </div> */}
      </motion.section>
          <ScheduleCallSection />
    </div>
  );
}

