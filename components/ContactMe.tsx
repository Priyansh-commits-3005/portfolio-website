"use client";

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pp9210@gmail?subject=${formData.subject}
    &body=Hi,my name is ${formData.name}.${formData.message}(${formData.email})`;
  };
  return (
    <div
      className="h-screen flex relative flex-col
    text-center md:text-left md:flex-row max-w-6xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-20 uppercase  
      tracking-[10px] text-gray-500 text-xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-6">
        <h4 className="text-3xl font-semibold text-center pt-10">
          i have got just what we need.{" "}
          <span className="text-red-500/50 "> lets talk</span>
        </h4>
        <div className="space-y-10">
          {/* phone number */}
          <div className="flex justify-center items-center space-x-4">
            <PhoneIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-xl">123456789</p>
          </div>
          {/* email */}
          <div className="flex justify-center items-center space-x-4">
            <EnvelopeIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-xl">pp@gmail.com</p>
          </div>

          {/* address */}
          <div className="flex justify-center items-center space-x-4">
            <MapPinIcon className="text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-xl">123 34th street and 15th lane</p>
          </div>
        </div>

        {/* react hooks */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto scale-95"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-red-500 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
