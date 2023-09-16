"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

type Inputs = {
  email: string;
  password: string;
};

const Admin = () => {
  const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}auth/login`;
  const [toastMessage, setToastMessage] = useState<String>("");
  const { loading, error, dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(serverUrl, { email: data.email, password: data.password }, { withCredentials: true });
      if (res.data.userDetails.role) {
        toast.success("Logged In Successfully." + " Redirecting to HOMEPAGE");
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.userDetails });
        router.push("/");
      } else {
        toast.error("You are not authenticated");
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not authenticated!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

  return (
    <section id="admin_login ">
      <div className="w-full max-w-xs mx-auto my-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email?.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password?.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a> */}
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default Admin;
