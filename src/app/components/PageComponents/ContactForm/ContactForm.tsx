"use client";
import Image from "next/image";
import bupLogo from "public/img/buplogo.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";

// Form input value's types
type Inputs = {
  fullname: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}contactUs`;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const contactUsSubmitResponse = await axios.post(serverUrl, data);
      reset();
      if (contactUsSubmitResponse.status === 200) {
        toast.info("Form Submitted Successfully");
      } else {
        toast.error("Form Invalid");
      }
    } catch (error: any) {
      toast.error("Form Invalid");
    }
  };
  return (
    <section id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-1 md:px-12 lg:px-16 xl:px-32  text-black">
      <div className="flex flex-col justify-between mx-auto text-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">Contact Us</h2>
          <div className="dark:text-black">
            <p>
              Bangladesh University of Professionals <br />
              Mirpur Cantonment <br />
              Dhaka-1216, Bangladesh <br />
              <br />
              <span className="font-bold">Email:</span> info.icict4sd@bup.edu.bd
            </p>
          </div>
        </div>
        <Image src={bupLogo} alt="Bup Logo" className="p-6 h-[6rem] mx-auto w-fit md:h-[10rem] " />
      </div>
      {/* <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm">Full name</label>
          <input id="full_name" type="text" className="w-full p-3 rounded bg-gray-200" {...register("fullname", { required: "Full Name is required" })} />
          {errors.fullname && <p className="text-red-600 text-sm">{errors.fullname?.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-200"
            {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Invalid Email" } })}
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email?.message}</p>}
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea id="message" className="w-full p-3 rounded bg-gray-200" {...register("message", { required: "Message is required" })}></textarea>
          {errors.message && <p className="text-red-600 text-sm">{errors.message?.message}</p>}
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-black text-white">
          Send Message
        </button>
      </form> */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default ContactForm;
