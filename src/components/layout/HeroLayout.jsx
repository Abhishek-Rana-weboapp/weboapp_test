import React, { useRef } from 'react'
import Button from '../buttons/Button'
import { twMerge } from 'tailwind-merge'
import { useMediaQuery } from 'react-responsive'
import { desktopQuery } from '../../utils/axios/helperfunctions'
import useLogoColor from '../../hooks/useLogoColor'
import { CircleArrowOutUpRight } from 'lucide-react'

const HeroLayout = ({imgUrl, buttonLabel, heading, onClick, headingClass, buttonClass, headerColor}) => {

  const heroRef = useRef(null)
  useLogoColor(heroRef, headerColor)
  const isDesktop = useMediaQuery(desktopQuery)
  return (
       <div ref={heroRef} className="relative h-screen content-center">
        <div className='absolute inset-0 -z-10 bg-black/15'></div>
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex max-w-[600px] flex-col justify-start gap-10 p-2 text-start md:ml-40">
          <h1 className={twMerge("text-3xl text-white md:text-5xl" , headingClass)}>
            {heading}
          </h1>
          <div>
            <Button
              size={isDesktop  ? "larger" : "small"}
              variant="transparent"
              className={twMerge("gap-4 px-20", buttonClass)}
              onClick={onClick}
            >
              {buttonLabel} <CircleArrowOutUpRight className="rotate-45"  size={30}/>
            </Button>
          </div>
        </div>
      </div>
  )
}

export default HeroLayout
