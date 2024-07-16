import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SlideButton from "../buttons/SlideButton";
import { MdClose } from "react-icons/md";
import { JobFormInputs } from "../../static/formData";
import { useFormContext } from "../../context/FormContext";
import axios from "axios";
import { BASE_URL } from "../../url/Url";
import { uploadFile } from "../../utils/axios";

const JobForm = ({jobData,setStatusModal,setModalOpen}) => {
  const { defaultJobForm } = useFormContext();
  const {
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm({
    defaultValues: {...defaultJobForm,job_id : jobData.id },
  });
  const allFields = watch();

  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFile = () => {
    inputRef?.current?.click();
  };

  const handleFileUpload = async(e)=>{
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    if(selectedFile){
      uploadFile(`${BASE_URL}/upload`,e.target.files[0]).then(res=>{
        setValue("resume", res.data.profile_url, {shouldValidate : true})
        clearErrors("resume")
      }).catch(err=>{
        setFile(null)
        setError("resume", {
          type: "manual",
          message: "File upload failed",
        });
      })
    }
  }


  const formSubmit = async (data) => {
    if (!data.resume) {
      setError("resume", {
        type: "manual",
        message: "Resume is required",
      });
      return;
    }

   await axios.post(`${BASE_URL}/jobsapplication`, data)
   .then(res=>{
    if(res.status === 200){
      setStatusModal({
        value:true,
        status:"success"
      })
      setModalOpen(false)
    }
   })
   .catch(err=>{
    setStatusModal({
      value:true,
      status:"failed"
    })
   })

  };



  return (
    <>
    <div className="w-full md:w-2/3 lg:w-1/3 p-4 rounded-lg  max-h-full bg-gray-200 relative overflow-auto border border-purple-500 shadow-md">
      <form
        className=" sm:w-full h-max flex flex-col gap-4 items-start sm:mx-auto p-2 "
        onSubmit={handleSubmit(formSubmit)}
        >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-bold">Apply</h1>
          <div className="rounded-full p-2 hover:shadow hover:bg-purple-500 hover:text-white hover:scale-110 transition-all duration-100 hover:cursor-pointer">
          <MdClose size={25} onClick={()=>setModalOpen(false)} />
        </div>
        </div>
        {JobFormInputs.map((input, index) => (
          <div key={index} className="flex flex-col items-start w-full text-sm sm:text-base">
            {input.tag === "input" ? input.type === "email" ? (
              (<>
                <input
                  className="w-full rounded-md p-2  focus:outline-purple-500"
                  {...register(input.name, {
                    required:  "This field is required",
                    pattern:{
                      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address"
                      }
                      })}
                      placeholder={input.placeholder}
                      ></input>
                {errors[input.name] && (
                  <span className="text-red-500 text-xs text-start">
                    {errors[input.name].message}
                  </span>
                )}
              </> )
            ) : (<>
            <input
              className="w-full rounded-md p-2  focus:outline-purple-500"
              {...register(input.name, {
                required: {
                  value: input.required,
                  message: "This field is required",
                  },
                  })}
                  placeholder={input.placeholder}
                  ></input>
            {errors[input.name] && (
              <span className="text-red-500 text-xs text-start">
                {errors[input.name].message}
              </span>
            )}
          </> ) : input.tag === "select" ? (
            <select
            {...register(input.name, { required: input.required })}
            className="w-full p-2 rounded-md focus:outline-purple-500"
            disabled
            >
                <option value={jobData.id}>{jobData.job_title}</option>
              </select>
            ) : input.tag === "textarea" ? (
              <textarea
              className="w-full rounded-md p-2 focus:outline-purple-500"
              placeholder={input.placeholder}
              rows={5}
              {...register(input.name)}
              ></textarea>
              ) : input.tag === "file" ? (
                <div className="flex flex-col items-start gap-2">
              <label className="font-light">{input.label}:</label>
                <div className="flex gap-1 items-center">
                  <SlideButton style={{ width: "auto" }} onClick={handleFile}>
                    Upload File
                  </SlideButton>
                  <Controller
                  control={control}
                  name={input.name}
                  rules={{ required: "Resume is required" }}
                  render={({ field: { value, onChange, ...field } }) => {
                    return (
                      <input
                      {...field}
                      ref={inputRef}
                      // onChange={(e) => {
                      //   const url = URL.createObjectURL(e.target.files[0])
                      //   setFile(url)
                      //   onChange(e.target.files[0]);
                      //   }}
                      onChange={handleFileUpload}
                        className="hidden"
                        type="file"
                        />
                        );
                        }}
                        />
                {allFields.resume && (
                  <span className="flex gap-3 w-full items-center rounded-md shadow font-light underline underline-offset-2 p-2">
                    <a href={allFields.resume ? allFields.resume : URL.createObjectURL(file)} target="_blank">{file.name}</a>
                  </span>
                )}
                {errors[input.name] && (
              <span className="text-red-500 text-xs text-start">
                {errors[input.name].message}
              </span>
            )}
                </div>
              </div>
            ) : (
              <></>
              )}
          </div>
        ))}
        <div className="flex justify-center w-full">
          <SlideButton type={"submit"}>Submit</SlideButton>
        </div>
      </form>
    </div>
      </>
  );
};

export default JobForm;
