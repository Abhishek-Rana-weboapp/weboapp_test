import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../../components/buttons/TextInput';
import Button from '../../components/buttons/Button';
import { axiosInstance } from '../../api/axios';

const PLATFORMS = ['LINKEDIN', 'INDEED', 'COMPANY_WEBSITE'];
const JOB_TYPES = ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'FREELANCE', 'INTERNSHIP', 'REMOTE'];
const EXP_YEARS = ['FRESHER', '1_YEAR', '2_YEARS', '3_YEARS', '5_YEARS'];
const CURRENCIES = ['INR', 'USD'];
const WORK_MODES = ['REMOTE', 'HYBRID', 'IN_OFFICE'];

const JobForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingJob = location.state?.job || null;

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [locationField, setLocationField] = useState('');
  const [platforms, setPlatforms] = useState([]);
  const [skills, setSkills] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [department, setDepartment] = useState('');
  const [jobType, setJobType] = useState('');
  const [expYears, setExpYears] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [vacancy, setVacancy] = useState('');
  const [workMode, setWorkMode] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isActive, setIsActive] = useState(true);

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const isEditMode = !!existingJob?.id;

  useEffect(() => {
    if (existingJob) {
      setJobTitle(existingJob.job_title || '');
      setJobDescription(existingJob.job_description || '');
      setLocationField(existingJob.location || '');
      setPlatforms(existingJob.platforms || []);
      setSkills(existingJob.skills || '');
      setQualifications(existingJob.qualifications || '');
      setDepartment(existingJob.department || '');
      setJobType(existingJob.job_type || '');
      setExpYears(existingJob.exp_years || '');
      setCurrency(existingJob.currency || 'INR');
      setStartRange(existingJob.start_range || '');
      setEndRange(existingJob.end_range || '');
      setVacancy(
        typeof existingJob.vacancy === 'number'
          ? String(existingJob.vacancy)
          : existingJob.vacancy || '',
      );
      setWorkMode(existingJob.work_mode || '');
      setDeadline(
        existingJob.deadline
          ? new Date(existingJob.deadline).toISOString().slice(0, 16)
          : '',
      );
      setIsActive(
        typeof existingJob.is_active === 'boolean'
          ? existingJob.is_active
          : true,
      );
    }
  }, [existingJob]);

  const togglePlatform = (value) => {
    setPlatforms((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value],
    );
  };

  const validate = () => {
    const nextErrors = {};
    if (!jobTitle?.trim()) nextErrors.jobTitle = 'Job title is required';
    if (!locationField?.trim()) nextErrors.location = 'Location is required';
    if (!jobType) nextErrors.jobType = 'Job type is required';
    if (!expYears) nextErrors.expYears = 'Experience is required';
    if (!workMode) nextErrors.workMode = 'Work mode is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      job_title: jobTitle,
      job_description: jobDescription || null,
      location: locationField,
      platforms,
      skills: skills || null,
      qualifications: qualifications || null,
      department: department || null,
      job_type: jobType,
      exp_years: expYears,
      currency: currency || null,
      start_range: startRange || null,
      end_range: endRange || null,
      vacancy: vacancy !== '' ? Number(vacancy) : 0,
      work_mode: workMode,
      deadline: deadline ? new Date(deadline).toISOString() : null,
      is_active: isActive,
    };

    try {
      setSubmitting(true);
      if (isEditMode) {
        await axiosInstance.put(`/jobs/${existingJob.id}`, payload);
      } else {
        await axiosInstance.post('/job/', payload);
      }
      navigate('/admin/jobs');
    } catch (err) {
      console.error(err);
      alert('Failed to save job. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary-700">
          {isEditMode ? 'Edit Job' : 'Add Job'}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold">
              Job Title *
              <TextInput
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g. Senior React Developer"
              />
            </label>
            {errors.jobTitle && (
              <p className="text-xs text-red-500">{errors.jobTitle}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Location *
              <TextInput
                value={locationField}
                onChange={(e) => setLocationField(e.target.value)}
                placeholder="e.g. Remote / Bangalore"
              />
            </label>
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Job Type *
              <select
                className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Select job type</option>
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </label>
            {errors.jobType && (
              <p className="text-xs text-red-500">{errors.jobType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Experience *
              <select
                className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
                value={expYears}
                onChange={(e) => setExpYears(e.target.value)}
              >
                <option value="">Select experience</option>
                {EXP_YEARS.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </label>
            {errors.expYears && (
              <p className="text-xs text-red-500">{errors.expYears}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Work Mode *
              <select
                className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value)}
              >
                <option value="">Select work mode</option>
                {WORK_MODES.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </label>
            {errors.workMode && (
              <p className="text-xs text-red-500">{errors.workMode}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Department
              <TextInput
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g. Engineering"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Currency
              <select
                className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {CURRENCIES.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Start Range
              <TextInput
                type="number"
                value={startRange}
                onChange={(e) => setStartRange(e.target.value)}
                placeholder="e.g. 500000"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              End Range
              <TextInput
                type="number"
                value={endRange}
                onChange={(e) => setEndRange(e.target.value)}
                placeholder="e.g. 900000"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Vacancy
              <TextInput
                type="number"
                min={0}
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Deadline
              <input
                type="datetime-local"
                className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Job Description
            <textarea
              className="mt-1 h-24 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Describe the role responsibilities..."
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Skills
            <textarea
              className="mt-1 h-20 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Key skills required (comma-separated or paragraph)"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Qualifications
            <textarea
              className="mt-1 h-20 w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              placeholder="Required qualifications"
            />
          </label>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold">Platforms</p>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => {
              const active = platforms.includes(p);
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => togglePlatform(p)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    active
                      ? 'border-primary-700 bg-primary-700 text-white'
                      : 'border-neutral-300 bg-white text-neutral-700'
                  }`}
                >
                  {p.replace('_', ' ')}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="is_active"
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <label htmlFor="is_active" className="text-sm">
            Is active
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/admin/jobs')}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting
              ? isEditMode
                ? 'Saving...'
                : 'Creating...'
              : isEditMode
              ? 'Save changes'
              : 'Create job'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;

