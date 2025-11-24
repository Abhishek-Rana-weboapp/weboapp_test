import Button from "../buttons/Button";
import Wrapper from "../Wrapper";
import { useForm } from "react-hook-form";
import FadeUpHeading from "../animateComponents/FadeUpHeading";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { countries } from "../../static/data";
import FadeUpParagraph from "../animateComponents/FadeUpParagraph";
import { FadeUp } from "../animateComponents/FadeUp";
import { useFormContext } from "../../context/FormContext";

const zodSchema = z.object({
  firstname: z.string().min(3, { message: "Required" }),
  lastname: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Invalid phone number" }),
  country: z.string(),
  company: z.string(),
});

const RequestServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "Afghanistan",
      company: "",
    },
  });

  const {setIsFormOpen} = useFormContext();


  const onSubmit = (data) => {
    console.log(data);
    setIsFormOpen(false);
  };

  return (
    <Wrapper className={"space-y-20 rounded-2xl bg-white p-10 py-20"}>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="hidden basis-1/2 content-center md:block">
          <FadeUpParagraph className="max-w-[500px] text-start text-black/70 md:text-2xl">
            Find out more about how we can help your organization navigate its
            next. Let us know your areas of interest so that we can serve you
            better.
          </FadeUpParagraph>
        </div>
        <div className="basis-1/2 space-y-10">
          <FadeUpHeading className={"text-center"}>
            Request For Services
          </FadeUpHeading>
          <FadeUp>
            <form
              className="flex flex-wrap gap-3 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">
                    First Name<span className="text-red-400">*</span>
                  </span>
                  <input
                    className="w-full rounded-xl border p-2"
                    placeholder="Jane"
                    {...register("firstname")}
                    type="text"
                  />
                </label>
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">Last Name </span>
                  <input
                    className="w-full rounded-xl border p-2"
                    placeholder="Smith"
                    {...register("lastname")}
                    type="text"
                  />
                </label>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">
                    Email<span className="text-red-400">*</span>
                  </span>
                  <input
                    className="w-full rounded-xl border p-2"
                    placeholder="abc@gmail.com"
                    {...register("email")}
                    type="email"
                  />
                </label>
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">
                    Country<span className="text-red-400">*</span>
                  </span>
                  <select
                    className="w-full flex-1 rounded-xl border p-2 "
                    {...register("country")}
                  >
                    {countries.map((country, index) => {
                      return (
                        <option value={country} key={index}>
                          {country}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">
                    Phone Number <span className="text-red-400">*</span>
                  </span>
                  <input
                    className="w-full rounded-xl border p-2"
                    placeholder="+1 748648302"
                    {...register("phone")}
                    type="number"
                  />
                </label>
                <label className="flex flex-1 flex-col items-start md:gap-1">
                  <span className="text-black/70  ">Company Name</span>
                  <input
                    className="w-full rounded-xl border p-2"
                    placeholder="Tech Startup"
                    {...register("company")}
                    type="text"
                  />
                </label>
              </div>
              <Button className={"mx-auto rounded-xl"} type="submit">
                Submit
              </Button>
            </form>
          </FadeUp>
        </div>
      </div>
    </Wrapper>
  );
};

export default RequestServiceForm;

//<motion.div
//   variants={fadeUp}
//   initial="initial"
//   whileInView={"animate"}
//   viewport={{ margin: "0px 0px -200px 0px", once: true }}
//   className="mx-auto max-w-[1500px] space-y-5 pb-10"
// >
//   <h1 className="pl-6 text-start text-3xl font-bold md:text-5xl">
//     Request for Services
//   </h1>

//   <form
//     className="flex flex-col-reverse gap-10 p-4 md:flex-row md:gap-20"
//     onSubmit={handleSubmit}
//   >
//     <div className="flex-1">
//       <div className="max-w-[700px] space-y-20 text-start">
//         <p className="text-xl md:text-3xl">
//           Find out more about how we can help your organization navigate its
//           next. Let us know your areas of interest so that we can serve you
//           better.
//         </p>
//       </div>
//     </div>
//     <div className="flex flex-1 flex-wrap justify-between gap-3">
//       <input
//         onChange={handleChange}
//         name="firstname"
//         value={formData.firstname}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="First Name"
//         type="text"
//       />
//       <input
//         onChange={handleChange}
//         name="lastname"
//         value={formData.lastname}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="Last Name"
//         type="text"
//       />
//       <input
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="Email"
//         type="text"
//       />
//       <input
//         onChange={handleChange}
//         name="job_title"
//         value={formData.job_title}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="Job Title"
//         type="text"
//       />
//       <input
//         onChange={handleChange}
//         name="company"
//         value={formData.company}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="Company"
//         type="text"
//       />
//       <input
//         onChange={handleChange}
//         name="phone"
//         value={formData.phone}
//         className="mx-2 h-20 w-1/3 border border-x-0 border-b-4 border-t-0 p-2 outline-none placeholder:text-2xl"
//         placeholder="Phone no"
//         type="text"
//       />
//       <textarea
//         onChange={handleChange}
//         name="message"
//         value={formData.message}
//         className="h-28 w-full border border-x-0 border-b-4 border-t-0 px-2 py-2 outline-none placeholder:text-2xl"
//         placeholder="Message"
//         type="text"
//       />
//       <Button
//         size={isDesktop ? "large" : "medium"}
//         variant="gray"
//         className={"px-20"}
//       >
//         Submit
//       </Button>
//     </div>
//   </form>
// </motion.div>
