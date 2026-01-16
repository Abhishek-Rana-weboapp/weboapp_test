import React from 'react'
import FadeUpHeading from '../../../components/animateComponents/FadeUpHeading'
import FadeUpParagraph from '../../../components/animateComponents/FadeUpParagraph'
import Wrapper from '../../../components/Wrapper'
import { FileText, Users, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'

const HiringProcess = () => {
  const steps = [
    {
      title: "Application",
      description: "Submit your resume and cover letter through our portal or email.",
      icon: <FileText size={30} />,
    },
    {
      title: "Screening",
      description: "Our team reviews your application and qualifications.",
      icon: <Users size={30} />,
    },
    {
      title: "Interview",
      description: "Meet with our team to discuss your experience and fit.",
      icon: <MessageSquare size={30} />,
    },
    {
      title: "Offer",
      description: "Receive an offer and join our amazing team!",
      icon: <CheckCircle size={30} />,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-zinc-50 py-16">
      <Wrapper>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-primary-800">Our Hiring Process</h3>
            <p className="max-w-2xl mx-auto text-gray-600">
              We've streamlined our hiring process to make it simple and transparent. 
              Here's what you can expect when you apply.
            </p>
          </div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Step number circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center my-2">
                        <ArrowRight className="text-primary-400" size={24} />
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-primary-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              We typically respond to applications within 3-5 business days. 
              If you have any questions about the process, feel free to reach out to us.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default HiringProcess
