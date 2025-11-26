import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import BlogCard from "../../../components/cards/BlogCard";
import { Pin } from "../../../components/buttons/Pin";
import { dummyBlogs } from "../../../static/blogsData";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button";

const Insights = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Wrapper className={"space-y-10"}>
        <h2 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-center mx-auto mb-10 max-w-lg">Insights From Our Team</h2>
        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {dummyBlogs.slice(0, 3).map((blog, index) => {
            return <BlogCard delay={index * 0.01} blog={blog} key={blog.id} />;
          })}
        </div>
        <div className="flex justify-center">
          {/* <Button onClick={() => {
            navigate("/blog");
          }} 
          className={"px-6 py-2"}>
            Show More
          </Button> */}
          <Pin
          variant="primary"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Show More
          </Pin>
        </div>
      </Wrapper>
    </section>
  );
};

export default Insights;
