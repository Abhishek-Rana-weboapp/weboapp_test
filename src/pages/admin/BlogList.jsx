import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil } from 'lucide-react';
import Button from '../../components/buttons/Button';
import { axiosInstance } from '../../api/axios';
import { useFormContext } from '../../context/FormContext';

const BlogList = () => {
  const navigate = useNavigate();
  const { setBlogData } = useFormContext();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get('/blog/');
        setBlogs(res.data?.data || res.data || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleAdd = () => {
    setBlogData(null);
    navigate('/admin/blogSection/new');
  };

  const handleEdit = (blog) => {
    setBlogData(blog);
    navigate(`/admin/blogSection/edit/${blog.id || blog._id}`);
  };

  return (
    <div className="w-full h-full p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-primary-700">Blogs</h1>
        <Button
          onClick={handleAdd}
          className="flex items-center gap-1"
        >
          Add Blog <Plus />
        </Button>
      </div>

      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4 space-y-2">
        {blogs?.map((blog) => (
          <div
            key={blog.id || blog._id}
            className="flex items-center justify-between rounded-md border bg-white px-4 py-3 shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold text-primary-900">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.description}
                </p>
              )}
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-1"
              onClick={() => handleEdit(blog)}
            >
              <Pencil size={16} />
              Edit
            </Button>
          </div>
        ))}

        {!loading && !error && blogs?.length === 0 && (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
