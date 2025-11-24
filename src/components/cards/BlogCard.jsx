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
      className="mb-10 flex w-full shrink-0 select-none flex-col gap-2 overflow-hidden rounded-lg hover:shadow-xl p-2 transition-all duration-200 ease-out hover:scale-[1.009] hover:cursor-pointer"
    >
      <div className="h-56 w-full p-2 rounded-lg">
        <img
          src={blog.cover_image}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-2">
        <div className="text-start">
          <h2 className="mb-1 text-lg font-bold md:text-xl line-clamp-2 ">
            {blog.title}
          </h2>
          <p className="text-start text-sm text-neutral-500 sm:text-base truncate">
            {blog.summary}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="mr-2 rounded-full border border-neutral-300 p-1 px-2 text-[0.63rem]">
            {"Technology"}
          </span>
          <span className="text-[0.63rem]">
            By WAD
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
