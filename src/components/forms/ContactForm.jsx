import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { contactFormInputs } from "../../static/formData";
import SlideButton from "../buttons/SlideButton";
import { MdClose } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { easeIn, motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../../url/Url";
import InfoModal from "../modal/InfoModal";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ContactForm = ({ handleCloseForm }) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      company_name: "",
      email: "",
      contact_no: "",
      comm_pref: "call",
    },
  });
  const [resultModal, setResultModal] = useState({
    value: false,
    status: "success",
  });

  let validPhoneNumber = false;
  let errorMessage = "";

  const validatePhoneNumber = ({
    inputNumber,
    country,
    isDirty,
    phoneLength,
    state,
  }) => {
    if (isDirty) {
      if (
        inputNumber &&
        inputNumber?.replace(country.dialCode, "")?.trim() === ""
      ) {
        validPhoneNumber = false;
        errorMessage = "Enter a valid phone Number";
        return false;
      } else if (inputNumber.length < phoneLength) {
        validPhoneNumber = false;
        errorMessage = "Enter a valid phone Number";
        return false;
      }
      validPhoneNumber = true;
      errorMessage = "";
      return true;
    }
    validPhoneNumber = false;
    errorMessage = "This field is required";
    return false;
  };

  const onSubmit = async (formData) => {
    await axios
      .post(`${BASE_URL}/contect_us`, formData)
      .then((res) => {
        if (res.status === 200) {
          setResultModal({ value: true, status: "success" });
        }
      })
      .catch((err) => {
        failedModal();
      });
  };

  return (
    <>
      {resultModal.value && (
        <InfoModal>
          <div className="flex w-full flex-col items-center gap-4 rounded-md bg-white p-4 shadow-md sm:w-2/3 md:w-1/3">
            {resultModal.status === "success" ? (
              <IoCheckmarkCircleOutline size={35} color="green" />
            ) : (
              <AiOutlineCloseCircle size={35} color="red" />
            )}
            {resultModal.status === "success"
              ? "Thank you for applying we will get in touch with you shortly"
              : "Something went wrong please try again"}
            <SlideButton
              onClick={() => {
                setResultModal({ ...resultModal, value: false });
                handleCloseForm()
              }}
            >
              Close
            </SlideButton>
          </div>
        </InfoModal>
      )}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: easeIn }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
        className="lg:2/4 w-full rounded-lg border border-purple-500 bg-gray-200 p-4 shadow-md shadow-purple-500 md:w-1/3 xl:w-1/4"
      >
        <div className="flex items-center justify-between px-4">
          <h1 className="text-lg font-semibold text-purple-500 sm:text-3xl">
            Contact Us
          </h1>
          <div className="rounded-full p-2 transition-all duration-100 hover:scale-110 hover:cursor-pointer hover:bg-purple-500 hover:text-white hover:shadow">
            <MdClose size={25} onClick={handleCloseForm} />
          </div>
        </div>
        <form
          className="flex w-full flex-col gap-5 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {contactFormInputs.map((input, index) =>
            input.tag === "input" && input.name !== "contact_no" ? (
              input.type === "text" ? (
                <React.Fragment key={index}>
                  <input
                    className="w-full rounded-md p-2"
                    {...register(input.name, {
                      required: {
                        value: input.required,
                        message: "This field is required",
                      },
                    })}
                    placeholder={input.placeholder}
                  ></input>
                  {errors[input.name] && (
                    <span className="text-start text-xs text-red-500">
                      {errors[input.name].message}
                    </span>
                  )}
                </React.Fragment>
              ) : input.type === "email" ? (
                <React.Fragment key={index}>
                  <input
                    className="w-full rounded-md p-2"
                    {...register(input.name, {
                      required: {
                        value: input.required,
                        message: "This field is required",
                      },
                      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                    })}
                    placeholder={input.placeholder}
                  ></input>
                  {errors[input.name] && (
                    <span className="text-start text-xs text-red-500">
                      {errors[input.name].message}
                    </span>
                  )}
                </React.Fragment>
              ) : (
                <></>
              )
            ) : input.tag === "select" ? (
              <React.Fragment key={index}>
                <select
                  key={index}
                  {...register(input.name, { required: input.required })}
                  className="w-full rounded-md p-2"
                >
                  {input.options.map((option) => (
                    <option value={option.value}>{option.name}</option>
                  ))}
                </select>
                {errors[input.name] && (
                  <span className="text-start text-xs text-red-500">
                    {errors[input.name].message}
                  </span>
                )}
              </React.Fragment>
            ) : input.name === "contact_no" ? (
              <React.Fragment key={index}>
                <Controller
                  key={index}
                  control={control}
                  name={input.name}
                  rules={{
                    required: true,
                    validate: () => validPhoneNumber || errorMessage,
                  }}
                  render={({ field: { value, onChange, ...field } }) => (
                    <PhoneInput
                      isValid={(inputNumber, country, countries) => {
                        const phoneLength = Math.ceil(
                          countries.filter(
                            (value) => value.dialCode === country.dialCode,
                          )[0]?.format.length / 2,
                        );
                        return validatePhoneNumber({
                          inputNumber,
                          country,
                          isDirty,
                          phoneLength,
                        });
                      }}
                      specialLabel=""
                      inputProps={{ required: true }}
                      onChange={(value) => onChange(value)}
                      country="us"
                      inputStyle={{ width: "100%" }}
                    />
                  )}
                />
                {errors[input.name] && (
                  <span className="text-start text-xs text-red-500">
                    {errors[input.name].message}
                  </span>
                )}
              </React.Fragment>
            ) : (
              <></>
            ),
          )}
          <div className="flex justify-center">
            <SlideButton type={"submit"}>Submit</SlideButton>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
