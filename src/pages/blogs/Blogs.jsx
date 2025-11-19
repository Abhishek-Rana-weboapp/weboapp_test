import React, { useEffect, useRef, useState } from "react";
import Accordian from "../../components/accordian/Accordian";
import { blogsData, checkboxes, sortButtons } from "../../static/testData";
import BlogCard from "../../components/cards/BlogCard";
import useDebounce from "../../hooks/useDebounce";
import { motion } from "framer-motion";
import SlideButton from "../../components/buttons/SlideButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/Url";
import { FadeUp } from "../../components/animateComponents/FadeUp";
import { animVariants, fadeUp } from "../../utils/axios/animations/animations";
import useLogoColor from "../../hooks/useLogoColor";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/buttons/Button";
import FadeUpHeading from "../../components/animateComponents/FadeUpHeading";
import { dummyBlogs } from "../../static/blogsData";


const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [featuredBlog, setGFeaturedBlog] = useState({
    tag: "Tech",
    title: "How to build a Startup from scratch",
    src: "/constructionIllustration.jpg",
  });
  const navigate = useNavigate();
  const ImageRef = useRef(null);

  useLogoColor(ImageRef, "#fff");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const debouncedValue = useDebounce(searchQuery, 500);

  const searchFunction = (query) => {
    if (!query) {
      setSearchedBlogs(dummyBlogs);
      return;
    }
    const result = blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchedBlogs(result);
  };


  useEffect(() => {
    searchFunction(debouncedValue);
  }, [debouncedValue]);

  const handleCreate = () => {
    navigate("/createblog");
  };

  return (
    <div className="space-y-16">
      <div
        ref={ImageRef}
        className="relative h-[40vh] text-xl font-semibold text-white sm:text-3xl md:text-5xl"
        style={{
          backgroundImage: "url(/BlogCover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-full content-center bg-[rgba(0,0,0,0.4)]">
          Blog
          <p className="mt-4 p-2 text-sm sm:text-base">
            Navigate Through Our Cutting-edge Insights in Industry Leading
            Innovation
          </p>
        </div>
      </div>

      <Wrapper>
        <div className="space-y-3">
          <motion.h3
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="text-start text-lg font-semibold md:text-xl"
          >
            Featured Article
          </motion.h3>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="flex flex-col overflow-hidden rounded-3xl text-start shadow-md md:flex-row"
          >
            <div className="basis-2/3 content-center space-y-6 p-4">
              <span className="rounded-full bg-[#CFFAFF] px-4 py-2 text-xs font-semibold md:text-sm">
                {featuredBlog.tag}
              </span>
              <h2 className="text-2xl font-semibold md:text-6xl">
                {featuredBlog.title}
              </h2>
              <span className="text-xs text-black/60 md:text-sm">
                May 1, 2024
              </span>
            </div>
            <div className="h-80 basis-1/3">
              <img
                src={featuredBlog.src}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <motion.h3
              variants={fadeUp}
              initial="initial"
              whileInView={"animate"}
              viewport={{ margin: "0px 0px -200px 0px ", once: true }}
            >
              Latest Articles
            </motion.h3>
            <Button>Filters</Button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
            {blogs.map((blog, index) => {
              return (
                <BlogCard delay={index * 0.01} blog={blog} key={blog.id} />
              );
            })}
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="mb-20 flex flex-col gap-6">
          <FadeUpHeading
            className={"mx-auto max-w-[1000px] text-3xl text-black md:text-7xl"}
          >
            A monthly post delivered straight to your inbox
          </FadeUpHeading>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px ", once: true }}
            className="mx-auto flex max-w-5xl gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button className={"rounded-lg bg-black"}>Subscribe</Button>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px ", once: true }}
            className="text-xs text-black/70"
          >
            Zero spam, just the good stuff
          </motion.span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Blogs;
