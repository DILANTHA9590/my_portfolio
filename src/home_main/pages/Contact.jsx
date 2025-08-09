import React, { useContext, useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { DarkContext } from "../../utillls/context";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { sendEmail } from "../../utillls/sendMail";

export default function Contact() {
  const { dark, setDark } = useContext(DarkContext);
  const [err, setErr] = useState(false);
  const [data, setFormData] = useState({
    name: "",
    email: "",
    phone: " ",
    message: "",
  });

  const inputRef = useRef();

  function handleformData(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.phone.toString().length < 10) {
      inputRef.current.focus();
      setErr(true);
      setFormData((prev) => ({
        ...prev,

        phone: "null",
      }));
      return;
    }

    sendEmail(data);
  }
  return (
    <>
      <div
        className={`   mt-[15vh]   ${
          dark != "false"
            ? "bg-primary  text-secondary_white"
            : "bg-primary_white  text-primary"
        } `}
      >
        <div className="flex flex-col h-full p-4 sm:flex-row gap-x-4 gap-y-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 3,
            }}
            transition={{
              duration: 2,
            }}
            className={`sm:w-[50%] border-accent border h-fit text-description  flex flex-col gap-y-7 p-4
  ${dark != "false" ? "bg-secondary  " : "bg-secondary_white  "} 
            `}
          >
            <div className="flex items-center gap-x-3 ">
              <img src="/contact_image/gmail.png" alt="" className="h-12" />
              <h1 className="">dilanthanayanajith@gmail.com</h1>
            </div>
            <div className="flex items-center gap-x-3">
              <img src="/contact_image/phone.png" alt="" className="h-12" />
              <h1>0714931304</h1>
            </div>
            <div className="flex items-center gap-x-3">
              <Link
                to="https://www.linkedin.com/in/dilantha-nayanajith-9a1545297/"
                target="_blank"
                className="flex items-center gap-x-3"
              >
                <img src="/contact_image/linkind.png" alt="" className="h-12" />
                <h1>Linkind Account</h1>
              </Link>
            </div>

            <div className="flex items-center gap-x-3">
              <Link
                to="https://github.com/DILANTHA9590"
                target="_blank"
                className="flex items-center gap-x-3"
              >
                <img src="/contact_image/github.png" alt="" className="h-12" />
                <h1>Github Account</h1>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 3,
            }}
            transition={{
              duration: 2,
            }}
            className={`sm:w-[50%] h-full  ${
              dark != "false" ? "bg-secondary  " : "bg-secondary_white  "
            } `}
          >
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 overflow-hidden border border-accent"
            >
              <div className="flex flex-col h-full justify-evenly">
                <motion.h1
                  className="py-6 font-bold text-indigo-400 text-main_title"
                  initial={{}}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                  }}
                >
                  GET IN TOUCH
                </motion.h1>
                <h1 className="py-4 font-bold text-secondary_title">
                  I'm always open to new ideas and <br /> opportunities. Let’s
                  talk!
                </h1>

                <div className="flex flex-col gap-y-15 placeholder:text-amber-400">
                  <motion.input
                    initial={{ width: 12 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                    }}
                    type="text"
                    value={data.name}
                    onChange={handleformData}
                    className={`h-12 border border-accent   placeholder:text-gray-400    rounded-md `}
                    placeholder="Enter your full name"
                    name="name"
                    required
                    autoFocus
                  />
                  <motion.input
                    initial={{ width: 12 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                    }}
                    type="email"
                    value={data.email}
                    onChange={handleformData}
                    className="h-12 border rounded-md border-accent placeholder:text-gray-400 "
                    name="email"
                    required
                    placeholder="Enter your email address "
                  />

                  <motion.input
                    initial={{ width: 12 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                    }}
                    type="number"
                    value={data.phone}
                    onChange={handleformData}
                    ref={inputRef}
                    className={`h-12 border rounded-md border-accent${
                      err
                        ? " placeholder:text-red-500  border-red-500 "
                        : " placeholder:text-gray-400 "
                    }`}
                    name="phone"
                    required
                    placeholder={`${
                      err ? "Invalid Mobile Number" : "Enter Your Mobile Number"
                    } `}
                  />

                  <motion.textarea
                    initial={{ width: 12 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                    }}
                    name="message"
                    id=""
                    value={data.message}
                    onChange={handleformData}
                    className="border rounded-md h-15 border-accent placeholder:text-gray-400"
                    required
                    placeholder="Type your message here..."
                  ></motion.textarea>

                  <button
                    type="submit"
                    className="flex p-5 font-semibold text-white transition-colors duration-300 rounded-lg w-fit bg-accent hover:bg-accent/80"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
