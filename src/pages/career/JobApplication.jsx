import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  X,
  Briefcase,
  MapPin,
  ArrowLeft,
  Upload,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Wrapper from "../../components/Wrapper";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import useFetchJobs from "../../hooks/useFetchJobs";
import PageLoader from "../../components/pageLoader/PageLoader";

const zodSchema = z.object({
  fullName: z.string().min(3, { message: "Full name is required (min 3 characters)" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Enter a valid 10-digit phone number" }),
  linkedIn: z.string().url({ message: "Invalid LinkedIn URL" }).optional().or(z.literal("")),
  portfolio: z.string().url({ message: "Invalid URL" }).optional().or(z.literal("")),
  experience: z.string().min(1, { message: "Please select your experience level" }),
  coverLetter: z.string().min(50, { message: "Cover letter should be at least 50 characters" }),
});

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs, loading } = useFetchJobs();
  const [job, setJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");

  console.log(jobs);
  console.log(jobId);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      portfolio: "",
      experience: "",
      coverLetter: "",
    },
  });

  useEffect(() => {
    if (jobs && jobId) {
      const foundJob = jobs.find((j) => parseInt(j.id) === parseInt(jobId));
      setJob(foundJob);
    }
  }, [jobs, jobId]);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        setResumeError("Please upload a PDF or Word document");
        setResumeFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setResumeError("File size should be less than 5MB");
        setResumeFile(null);
        return;
      }
      setResumeError("");
      setResumeFile(file);
    }
  };

  const onSubmit = async (data) => {
    if (!resumeFile) {
      setResumeError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      job_title: job?.job_title || "Unknown Position",
      job_id: jobId,
      applicant_name: data.fullName,
      applicant_email: data.email,
      applicant_phone: data.phone,
      linkedin_url: data.linkedIn || "Not provided",
      portfolio_url: data.portfolio || "Not provided",
      experience_level: data.experience,
      cover_letter: data.coverLetter,
      resume_name: resumeFile.name,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_JOB_TEMPLATEID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      setResumeFile(null);
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (error) {
      console.error("Error sending application:", error);
      setIsSubmitting(false);
    }
  };

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

  const formatEnum = (value) => {
    if (!value) return "";
    return value.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  if (!job) {
    return (
      <Wrapper className="min-h-screen pt-24">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job not found</h2>
          <button
            onClick={() => navigate("/career#vacancies")}
            className="text-primary-600 hover:text-primary-700 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={18} /> Back to Careers
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-8">
      <Wrapper className="max-w-4xl">
        {/* Success Modal */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsSubmitted(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Application Submitted! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for applying to <strong>{job.job_title}</strong>. Our team will review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => navigate("/career")}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
                  >
                    Back to Careers
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6">
          <BreadCrumbs />
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/career#vacancies")}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Open Positions
        </button>

        {/* Job Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 mb-8 text-white shadow-xl"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{job.job_title}</h1>
          <div className="flex flex-wrap gap-4 text-white/90 text-sm">
            {job.department && (
              <span className="bg-white/20 px-3 py-1 rounded-full">{job.department}</span>
            )}
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            {job.work_mode && (
              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>{formatEnum(job.work_mode)}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FileText className="text-indigo-600" size={24} />
            Application Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <User size={16} className="text-indigo-500" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                  errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              />
              {errors.fullName && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-indigo-500" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone size={16} className="text-indigo-500" />
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="10-digit phone number"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                    errors.phone ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    {errors.phone.message}
                  </div>
                )}
              </div>
            </div>

            {/* LinkedIn & Portfolio */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Linkedin size={16} className="text-indigo-500" />
                  LinkedIn Profile
                </label>
                <input
                  {...register("linkedIn")}
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                    errors.linkedIn ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.linkedIn && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    {errors.linkedIn.message}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <LinkIcon size={16} className="text-indigo-500" />
                  Portfolio / Website
                </label>
                <input
                  {...register("portfolio")}
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                    errors.portfolio ? "border-red-300 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.portfolio && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle size={14} />
                    {errors.portfolio.message}
                  </div>
                )}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Briefcase size={16} className="text-indigo-500" />
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <select
                {...register("experience")}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white ${
                  errors.experience ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              >
                <option value="">Select experience level</option>
                <option value="fresher">Fresher (0-1 years)</option>
                <option value="junior">Junior (1-3 years)</option>
                <option value="mid">Mid-Level (3-5 years)</option>
                <option value="senior">Senior (5-8 years)</option>
                <option value="lead">Lead/Principal (8+ years)</option>
              </select>
              {errors.experience && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  {errors.experience.message}
                </div>
              )}
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Upload size={16} className="text-indigo-500" />
                Resume <span className="text-red-500">*</span>
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all hover:border-indigo-400 ${
                  resumeError ? "border-red-300 bg-red-50" : resumeFile ? "border-green-400 bg-green-50" : "border-gray-300"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {resumeFile ? (
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="font-medium">{resumeFile.name}</span>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <Upload className="mx-auto mb-2" size={24} />
                    <p className="font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                )}
              </div>
              {resumeError && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  {resumeError}
                </div>
              )}
            </div>

            {/* Cover Letter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText size={16} className="text-indigo-500" />
                Cover Letter <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("coverLetter")}
                rows={5}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none ${
                  errors.coverLetter ? "border-red-300 bg-red-50" : "border-gray-200"
                }`}
              />
              {errors.coverLetter && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  {errors.coverLetter.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-lg transition-all ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Application
                </>
              )}
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            By submitting this application, you agree to our privacy policy. Your information will only be used for recruitment purposes.
          </p>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default JobApplication;
