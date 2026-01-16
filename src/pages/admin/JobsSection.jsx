import { Outlet } from 'react-router-dom';

const JobsSection = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default JobsSection;

