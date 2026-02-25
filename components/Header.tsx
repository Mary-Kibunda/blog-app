"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";

const Header = () => {
  const [email, setEmail] = useState("");

  const onsubmitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success("Subscribed Successfully");
      setEmail("");
    } else {
      toast.error("Something went wrong");
    }
    console.log(response.data.success);
  };

  return (
    <div className=" py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Target className="h-20 w-20 text-[#0be08e] sm:w-auto sm:h-auto " />
          <h3 className="p-4 font-bold text-xl md:text-3xl">Blogie</h3>
        </div>
        <div className="flex flex-row space-x-4 ">
          <Link
            href="/admin/blogList"
            className="shadow-[-7px_7px_0px_0px_#000000] border border-solid border-black p-4 text-[#0be08e] hover:text-[#0e4b34] hover:bg-[#909893] hover:rounded-xl flex flex-row items-center space-x-3 text-lg md:text-lg"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="text-center my-8 ">
        <h1 className="text-4xl md:text-3xl font-medium sm:5xl">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-185 m-auto text-xs sm-text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form
          onSubmit={onsubmitHandler}
          className="flex justify-between shadow-[-7px_7px_0px_0px_#000000] max-w-125 scale-75 sm-scale-100 mx-auto mt-10 border border-black hover:rounded-xl  p-4"
        >
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="example@gmail.com"
            className="pl-4 outline-none w-full"
          />
          <button
            type="submit"
            className="rounded-xl p-4 w-full md:w-auto text-black active:bg-[#0e4b34] active:text-[#909893] "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
