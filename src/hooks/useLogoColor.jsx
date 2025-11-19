import {useEffect } from "react"
import { useThemeContext } from "../context/ThemeContext"
import { useInView } from "framer-motion"

export const useLogoColor = (ref, color) => {
   const {setLogoColor} = useThemeContext()
   const isInView = useInView(ref, {
    threshold: 0.5,
   })

   useEffect(()=>{
          if(isInView){
            setLogoColor(color)
          }else{
            setLogoColor("")
          }

          return ()=>{
            setLogoColor("");
          }
   },[isInView])
}

export default useLogoColor
