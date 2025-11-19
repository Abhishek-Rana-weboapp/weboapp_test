import React, { useState } from "react";
import { motion , stagger} from "framer-motion";
import SlideButton from "../buttons/SlideButton";

const JobCard = ({data, index, onClick}) => {

  const keyValue = [
    {
      name:"Job Title",
      key:"job_title",
      alternate:"Any"
    },
    {
      name:"Location",
      key:"location",
      alternate:"Any"
    },
    {
      name:"Responsibilities",
      key:"responsibilities",
      alternate:"Any"
    },
    {
      name:"Qualification",
      key:"qualifications",
      alternate:"Any"
    },
    {
      name:"Job Description",
      key:"job_description",
      alternate:"Any"
    },
    {
      name:"Employment Type",
      key:"employment_type",
      alternate:"Any"
    },
    {
      name:"Salary",
      key:"salary_range",
      alternate:"Not Disclosed"
    },
    {
      name:"Contact Email",
      key:"contact_email",
      alternate:"hr@weboappdiscovery.com"
    },
  ]


  

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: 100,
        },
        animate:(index)=>({
          opacity: 1,
          x: 0,
        transition:{ duration: 0.5, delay:index*0.2}}
      )
    }}
      initial="initial"
      whileInView={"animate"}
      custom={index}
      className=" w-full sm:text-base text-xs sm:min-w-full mt-3 shadow-md bg-primarybg  p-6 border border-blue-500 rounded-md"
    >
      <div className="h-full text-left flex flex-col justify-between gap-3">
        <h3 className="font-semibold">{data.job_title}</h3>
        <ul className=" list-disc text-left pl-10">
          {
            keyValue?.map((key, index)=>{
              if(Object.keys(data)?.includes(key.key) && data[key.key] !== "" || undefined){
                return <li key={index}>
                  <label className="font-semibold">{key.name} :</label>
                  <p>{data[key.key]}</p>
                  </li>
              }else{
                return <li key={index}>{key.name}:{key.alternate}</li>
              }
            })
            }
        </ul>

        <SlideButton  onClick={()=>onClick(data)}>
          Apply
        </SlideButton>
      </div>
    </motion.div>
  );
};

export default JobCard;
