import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import useFetchJobs from "../../../hooks/useFetchJobs";
import Button from "../../../components/buttons/Button";
import { Pin } from "../../../components/buttons/Pin";
import { ArrowRight, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import PageLoader from "../../../components/pageLoader/PageLoader";

const OpenVacancies = () => {
  const { jobs, loading, error } = useFetchJobs();
  const navigate = useNavigate();

  // Format enum values for display
  const formatEnum = (value) => {
    if (!value) return "";
    return value.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // Format salary range
  const formatSalary = (job) => {
    if (job.start_range && job.end_range) {
      const currency = job.currency || "INR";
      const symbol = currency === "USD" ? "$" : "₹";
      return `${symbol}${Number(job.start_range).toLocaleString()} - ${symbol}${Number(job.end_range).toLocaleString()}`;
    }
    return "Salary negotiable";
  };

  // Filter only active jobs
  const activeJobs = jobs?.filter((job) => job.is_active !== false) || [];

  return (
    <Wrapper className={"pb-20"}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-primary-800">Open Vacancies</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover exciting opportunities to grow your career with us. 
            We're always looking for talented individuals to join our team.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <PageLoader />
          </div>
        )}

        {error && (
          <div className="col-span-full text-center py-12">
            <p className="text-red-500 text-lg">
              Failed to load job openings. Please try again later.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-6">
            {activeJobs?.map((job, index) => {
              return (
                <div
                  key={job.id || index}
                  className="flex flex-col items-start justify-between space-y-6 rounded-3xl border border-gray-200 bg-white p-6 text-start shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="space-y-4 w-full">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl text-primary-900 mb-2">
                        {job.job_title}
                      </h2>
                      {job.department && (
                        <span className="inline-block text-xs font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary-700" />
                        <span>{job.location}</span>
                      </div>
                      {job.work_mode && (
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary-700" />
                          <span>{formatEnum(job.work_mode)}</span>
                        </div>
                      )}
                      {job.job_type && (
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary-700" />
                          <span>{formatEnum(job.job_type)}</span>
                        </div>
                      )}
                    </div>

                    {job.job_description && (
                      <p className="text-gray-600 md:text-base leading-relaxed line-clamp-3">
                        {job.job_description.length > 150
                          ? `${job.job_description.substring(0, 150)}...`
                          : job.job_description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3 pt-2">
                      {job.exp_years && (
                        <span className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                          {formatEnum(job.exp_years)} Experience
                        </span>
                      )}
                      {(job.start_range || job.end_range) && (
                        <span className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                          <DollarSign size={12} />
                          {formatSalary(job)}
                        </span>
                      )}
                      {job.vacancy && job.vacancy > 0 && (
                        <span className="text-xs font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                          {job.vacancy} Position{job.vacancy > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    onClick={() => navigate(`/career/apply/${job.id || job._id}`)}
                  >
                    Apply Now <span className="text-white/50">|</span>{" "}
                    <ArrowRight size={15} />
                  </Button>
                </div>
              );
            })}
            {activeJobs?.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">
                  No open positions at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default OpenVacancies;
