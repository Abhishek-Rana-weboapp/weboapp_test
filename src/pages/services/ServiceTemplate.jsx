'use client'

import React, { useState, useEffect, } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs"
import { useParams } from 'react-router-dom'
import RequestServiceForm from '../../components/forms/RequestServiceForm'
import { servicesData } from '../../data/servicesData'


// Move animations to a separate object for reuse
const animations = {
    fadeUp: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    },
    fadeLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
    },
    fadeRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
    }
}

// Move reusable styles to constants
const sectionClasses = {
    wrapper: "py-20 px-4 md:px-8",
    container: "max-w-7xl mx-auto",
    heading: "text-3xl md:text-4xl font-bold text-center mb-16"
}

const ServiceTemplate = () => {
    const { service } = useParams()
    const serviceData = servicesData[service]
    
    if (!serviceData) return <div>Service not found</div>

    const { hero, features, newsGrid, carousel, bottom } = serviceData

    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    // Combine slide functions
    const handleSlide = (dir) => {
        setDirection(dir)
        setCurrentIndex((prev) => 
            dir > 0 ? (prev + 1) % carousel.items.length 
                   : (prev - 1 + carousel.items.length) % carousel.items.length
        )
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleSlide(1)
            else if (e.key === 'ArrowLeft') handleSlide(-1)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) handleSlide(1)
        else if (info.offset.x > 50) handleSlide(-1)
    }

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        }),
    }

    // Create a reusable motion card component
    const MotionCard = ({ delay = 0, className, children }) => (
        <motion.div 
            className={`bg-white p-8 rounded-lg shadow-sm ${className}`}
            {...animations.fadeUp}
            viewport={{ once: true }}
            transition={{ ...animations.fadeUp.transition, delay }}
        >
            {children}
        </motion.div>
    )

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${hero.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-4">
                    <div className="flex flex-col max-w-4xl md:ml-20">
                        <BreadCrumbs items={hero.breadcrumbs} />
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold w-max text-white text-center overflow-hidden"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }}
                        >
                            {hero.heading.split(' ').map((word, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block mr-2"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className={`${sectionClasses.wrapper} bg-white`}>
                <div className={sectionClasses.container}>
                    <motion.h2 className={sectionClasses.heading}>
                        {features.title}
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold">
                                {features.mainContent.heading}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {features.mainContent.description}
                            </p>
                            <ul className="space-y-3">
                                {features.mainContent.bulletPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-blue-600">✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="relative h-[400px] rounded-lg overflow-hidden"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img 
                                src={features.image} 
                                alt="Service illustration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* News Grid Section */}
            <section className={`${sectionClasses.wrapper} bg-gray-50`}>
                <div className={sectionClasses.container}>
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <motion.h2 
                                className="text-4xl font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {bottom.mainContent.title}
                            </motion.h2>
                            <motion.p 
                                className="text-gray-600 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {bottom.mainContent.description}
                            </motion.p>
                            <motion.button 
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {bottom.mainContent.ctaText}
                            </motion.button>
                        </div>
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {bottom.services.title}
                            </h3>
                            <ul className="space-y-4">
                                {bottom.services.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {bottom.cards.map((card, index) => (
                            <MotionCard key={index}>
                                <div className="mb-4">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {card.description}
                                </p>
                                <button className="text-blue-600 hover:underline">
                                    {card.ctaText}
                                </button>
                            </MotionCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className={`${sectionClasses.wrapper} bg-white`}>
                <div className={sectionClasses.container}>
                    <motion.h2 className={sectionClasses.heading}>
                        {carousel.title}
                    </motion.h2>
                    <div className="relative w-full md:h-[500px] h-[700px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { 
                                        type: 'spring', 
                                        stiffness: 200,
                                        damping: 25,
                                        mass: 0.5
                                    },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.7}
                                onDragEnd={handleDragEnd}
                                className="absolute w-full h-full flex items-center justify-center"
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex max-w-4xl w-full flex-col-reverse sm:flex-row">
                                    <div className="sm:w-1/2 p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {carousel.items[currentIndex].title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {carousel.items[currentIndex].description}
                                        </p>
                                    </div>

                                    <div className="sm:w-1/2 relative">
                                        <img 
                                            src={carousel.items[currentIndex].image} 
                                            alt={carousel.items[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={() => handleSlide(-1)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 transition-all"
                            aria-label="Previous slide"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => handleSlide(1)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 transition-all"
                            aria-label="Next slide"
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            

            <div className='max-w-6xl mx-auto'>
                <RequestServiceForm/>
            </div>
        </div>
    )
}

export default ServiceTemplate
