import { easeIn, easeInOut, motion } from "framer-motion";
import { fadeUp } from "../../utils/axios/animations/animations";
import { useFormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, delay }) => {
  const {setBlogData} = useFormContext()
  const navigate = useNavigate()

  const handleClick = ()=>{
    setBlogData(blog)
    navigate(`/blog/${blog.id}`)
  }
  return (
    <div
      onClick={handleClick}
      className="mb-10 flex w-full shrink-0 select-none flex-col gap-10 overflow-hidden rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:cursor-pointer"
    >
      <div className="h-60 w-full rounded-lg">
        <img
          src={blog.cover_image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <div className="text-start">
          <h2 className="mb-3 text-lg font-bold md:text-xl">
            {blog.title}
          </h2>
          <p className="text-start text-sm text-neutral-500 sm:text-base truncate">
            {blog.summary}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <span className="mr-2 rounded-full border border-neutral-300 p-1 px-2 text-[0.63rem]">
            {"Technology"}
          </span>
          <span className="text-[0.63rem]">
            <small>By</small> {"WAD"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
