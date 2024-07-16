import React, { useEffect, useRef, useState } from 'react'
import Home from './home/Home'
import Services from './services/Services'
import Clients from './clients/Clients'
import About from './about/About'
import SideBar from "../components/sidebar/SideBar"
import Footer from '../components/footer/Footer'
import Header from "../components/header/Header"
import Modal from '../components/modal/Modal'
import ContactForm from '../components/forms/ContactForm'
import { useLocation, useNavigate } from 'react-router-dom'

const Container = () => {
    const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const clientsRef = useRef(null)

  const [currentRef, setCurrentRef] = useState(homeRef)
  const [contactForm, setContactForm] = useState(false)
  const location = useLocation()



  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentRef(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 })

  useEffect(() => {
    observer.observe(homeRef.current)
    observer.observe(servicesRef.current)
    observer.observe(aboutRef.current)
    observer.observe(clientsRef.current)
    if(location.state){
      refObject[location.state.key]?.current?.scrollIntoView({
        behavior: 'smooth',
      })
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  const onClick = (ref, location)=>{
    ref?.current?.scrollIntoView({  
        behavior:"smooth"
    })
  }

  const refObject = {
    "Home":homeRef,
    "Services":servicesRef,
    "About":aboutRef,
    "Clients":clientsRef
  }

  const slideToRef = (key)=>{
    setCurrentRef(refObject[key])
    refObject[key].current?.scrollIntoView({  
      behavior:"smooth"
  })
  }


  const bgColorPrimary = "#ffffff" 

  const bgColor = `bg-[${bgColorPrimary}]`

  return (
   <div className={`check ${bgColor}`}>
    <Modal isOpen={contactForm}>
        <ContactForm handleCloseForm={()=>setContactForm(false)}/>
      </Modal>
    <Header currentRef={currentRef} homeRef={homeRef} handleOpenForm={()=>setContactForm(true)}/>
    <SideBar currentRef={currentRef} onClick={onClick} homeRef={homeRef} servicesRef={servicesRef} aboutRef={aboutRef} clientsRef={clientsRef} />
    <Home  slideToRef={slideToRef} ref={homeRef}/>
    <Services ref={servicesRef}/>
    <Clients ref={clientsRef} />
    <About ref={aboutRef}/>
    <Footer/> 
   </div>
  )
}

export default Container
