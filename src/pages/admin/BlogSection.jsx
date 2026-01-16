import { Outlet } from 'react-router-dom';

const BlogSection = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default BlogSection;
