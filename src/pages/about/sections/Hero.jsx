import { Pin } from "../../../components/buttons/Pin";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mx-auto">
      {/* <div className="h-[100px] content-center bg-gradient-to-t from-[#AFC2F0] to-white">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div> */}

      {/* Hero */}
      <div className="mx-auto mt-[100px] flex max-w-[1500px] flex-col-reverse gap-4 px-4 py-5 md:flex-row md:gap-10">
        <div className="content-center text-start md:w-1/2 md:p-2">
          <div className="mx-auto max-w-[600px] space-y-6">
            <motion.div
            >
              <h1 className="text-2xl font-semibold md:text-5xl">
                Delivering Excellence in Digital Innovation Since 2021
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2"
            >
              <h2 className="text-lg md:text-2xl">Our Story</h2>
              <p className="text-black/70">
                Founded in March 2021 by visionary leaders Weboapp Discovery Pvt. Ltd. is a leading IT
                solutions company based in Zirakpur, Punjab. We specialize in
                web development, Zoho development, mobile apps, eCommerce
                solutions, and IoT services, offering tailored, innovative
                digital solutions to businesses worldwide. With a commitment to
                excellence, we’ve built a reputation for delivering 100%
                successful projects, earning top ratings on platforms like
                Upwork and the trust of our clients.
              </p>
              <br/>
              {/* <h2 className="md:text-2xl text-lg">About Us</h2> */}
              <p className=" text-black/70">
                At Weboapp Discovery, we follow a structured 6-D process—<b>Plan &
                Analyze, Define, Develop, Test & Review, Deploy, and
                Maintain</b>—ensuring every project meets the highest standards of
                quality. Registered as a private limited company in 2022, we
                continue to innovate and expand, driven by our mission to
                provide scalable, reliable solutions that empower businesses to
                unlock their full potential. Join us in redefining the digital
                landscape and driving growth through technology.
              </p>
            </motion.div>

          </div>
        </div>
        <motion.div
          className="md:w-1/2"
        >
          <img
            className="mx-auto w-full max-w-[350px] rounded-3xl object-cover md:ml-auto md:max-w-[600px]"
            src="/about/1.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
