import Button from "../buttons/Button";
import Wrapper from "../Wrapper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { countries } from "../../static/data";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Building, Globe, Send, CheckCircle, AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const zodSchema = z.object({
  firstname: z.string().min(3, { message: "Required" }),
  lastname: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Invalid phone number" }),
  country: z.string(),
  company: z.string(),
});

const RequestServiceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "United States",
      company: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 4 seconds
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isSubmitted) {
        setIsSubmitted(false);
      }
    };

    if (isSubmitted) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isSubmitted]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Success Modal - Moved outside main container */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.5
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                y: 20,
                transition: { duration: 0.2 }
              }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Success Content */}
              <div className="text-center">
                {/* Animated Check Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                      delay: 0.2
                    }
                  }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                {/* Success Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3, duration: 0.4 }
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for reaching out! We've received your message and our team will get back to you within 24 hours.
                  </p>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.4 }
                  }}
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-gradient-to-r from-primary-700 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Continue Browsing
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Form Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        {/* <div className="bg-gradient-to-r from-primary-700 to-blue-600 px-8 py-12 text-white">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to transform your business? Share your project details and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div> */}

        {/* Form Section */}
        <div className="p-8 md:p-12">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Fields */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} />
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("firstname")}
                  type="text"
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.firstname ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                {errors.firstname && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-red-500 text-sm"
                  >
                    <AlertCircle size={14} />
                    {errors.firstname.message}
                  </motion.div>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} />
                  Last Name
                </label>
                <input
                  {...register("lastname")}
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Email and Country */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Mail size={16} />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your.email@company.com"
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                {errors.email && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-red-500 text-sm"
                  >
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </motion.div>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Globe size={16} />
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("country")}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                >
                  {countries.map((country, index) => (
                    <option value={country} key={index}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Phone and Company */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone size={16} />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-red-500 text-sm"
                  >
                    <AlertCircle size={14} />
                    {errors.phone.message}
                  </motion.div>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Building size={16} />
                  Company Name
                </label>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-700 to-blue-600 hover:from-primary-800 hover:to-blue-700 transform hover:scale-105 hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </form>

          {/* Footer Note */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              We respect your privacy. Your information will only be used to contact you about your inquiry.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default RequestServiceForm;

