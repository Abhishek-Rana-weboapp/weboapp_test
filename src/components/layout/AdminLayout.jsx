import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-[100svh]">
      <aside className="w-full max-w-[260px] border-r bg-white p-4 space-y-4">
        <h2 className="text-xl font-semibold text-primary-800">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/admin/blogSection"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-800 hover:bg-primary-50'
              }`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/admin/jobs"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-800 hover:bg-primary-50'
              }`
            }
          >
            Jobs
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
