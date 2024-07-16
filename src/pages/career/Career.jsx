import React, { forwardRef, useState } from "react";
import FadeInHeading from "../../components/headings/FadeInHeading";
import { motion, stagger } from "framer-motion";
import { fadeInAnimationVariants } from "../../components/animations/animations";
import JobCard from "../../components/cards/JobCard";
import JobForm from "../../components/forms/JobForm";
import Modal from "../../components/modal/Modal";
import Accordian from "../../components/accordian/Accordian";
import useFetchJobs from "../../hooks/useFetchJobs";
import InfoModal from "../../components/modal/InfoModal";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import SlideButton from "../../components/buttons/SlideButton";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../url/Url";
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar";
import Nav from "../../components/header/Nav";

const Career = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null)
  const [statusModal, setStatusModal] = useState({
    value:false,
    status:"success"
  })


  const {jobs, loading, error} = useFetchJobs()

  
  const handleApply = (data) => {
    setSelectedJob(data)
    setModalOpen(true);
  };

  const closeStatusModal = ()=>{
    setStatusModal({
      value:false,
      status:"success"
    })
  }

  const formSubmit = async (data) => {
    const formData = new FormData();
    console.log(Object.keys(data));
    Object.keys(data).forEach((key, index) => {
      formData.append(`${key}`, data[key]);
    });

   await axios.post(`${BASE_URL}/jobsapplication`, formData)
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
    setModalOpen(false)
   })

  };


  return (
    <>
    <Nav/>
    {statusModal.value && <InfoModal>
       <div className="bg-white sm:w-2/3 md:w-1/3 w-full flex flex-col p-4 items-center gap-4 rounded-md shadow-md">
        {statusModal.status === "success" ? <IoCheckmarkCircleOutline size={35} color="green"/> : <AiOutlineCloseCircle size={35} color="red" />}
        {statusModal.status === "success" ? "Thank you for applying we will get in touch with you shortly" : "Something went wrong please try again"}
        <SlideButton onClick={closeStatusModal}>Close</SlideButton >
        </div>
    </InfoModal>}
      <Modal isOpen={modalOpen}>
        <JobForm
        submit={formSubmit}
        jobData={selectedJob}
        setModalOpen = {setModalOpen}
        setStatusModal = {setStatusModal}
        />
      </Modal>
      <div ref={ref} className="w-full min-h-screen p-4 overflow-hidden">
        <Header/>
        <div className="mt-20">
          <FadeInHeading>
            {" "}
            We are <span className="text-purple-500">Hiring!</span>
          </FadeInHeading>
          <section className="sm:w-3/4 p-5 mx-auto text-left text-sm sm:text-base leading-6 mt-3">
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Weboapp Discovery, we are on the lookout for passionate,
              driven, and innovative individuals who are eager to make a
              difference. We value team players who thrive in a collaborative
              environment, possess a strong work ethic, and are committed to
              continuous learning and improvement. Whether you're a seasoned
              professional or a recent graduate, if you bring a positive
              attitude, fresh perspectives, and a dedication to excellence, we
              want you to join our team. Our ideal candidates are not only
              skilled and knowledgeable in their respective fields but also
              align with our core values of integrity, creativity, and community
              engagement. If you're ready to take on new challenges and grow
              with a forward-thinking company, we encourage you to apply.
            </motion.p>
          </section>

          <section>
            <motion.h3
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold my-6"
            >
              Job Openings
            </motion.h3>
            {/* {isMobile ? ( */}
              <div className="flex p-4 md:w-3/4  mx-auto w-full gap-2 flex-wrap md:flex-nowrap">
                {jobs?.map((job, index) => {
                  return (
                    <Accordian  key={index} title={job.job_title}>
                    <JobCard
                      data={job}
                      index={index}
                      onClick={handleApply}
                      />
                      </Accordian>
                  );
                })}
              </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default Career;
