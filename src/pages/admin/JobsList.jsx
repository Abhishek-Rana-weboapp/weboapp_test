import useFetchJobs from '../../hooks/useFetchJobs';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';

const JobsList = () => {
  const { jobs, loading, error } = useFetchJobs();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-700">Jobs</h1>
        <Button
          className="flex items-center gap-1"
          onClick={() => navigate('/admin/jobs/new')}
        >
          Add Job
        </Button>
      </div>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">Failed to load jobs.</p>}

      <div className="space-y-2">
        {jobs?.map((job) => (
          <div
            key={job.id || job.job_id}
            className="flex items-center justify-between rounded-md border bg-white px-4 py-3 shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold text-primary-900">
                {job.job_title}
              </h2>
              <p className="text-sm text-gray-600">
                {job.location} • {job.job_type}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() =>
                navigate(`/admin/jobs/edit/${job.id || job.job_id}`, {
                  state: { job },
                })
              }
            >
              Edit
            </Button>
          </div>
        ))}
        {!loading && jobs?.length === 0 && (
          <p className="text-gray-500">No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default JobsList;

