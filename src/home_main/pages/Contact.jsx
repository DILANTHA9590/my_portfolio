import React, { useContext, useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { DarkContext } from "../../utillls/context";

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

  console.log(data.setErr);
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
    } else {
    }
    localStorage.clear();
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
        <div className="flex flex-col items-center justify-center h-full p-4 sm:flex-row">
          <div className="w-[50%]"></div>
          <div
            className={`w-[50%] h-full  ${
              dark != "false" ? "bg-secondary  " : "bg-secondary_white  "
            } `}
          >
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 border border-accent"
            >
              <div className="flex flex-col h-full justify-evenly">
                <h1 className="py-6 font-bold text-main_title">GET IN TOUCH</h1>
                <h1 className="py-4 font-bold text-secondary_title">
                  I'm always open to new ideas and <br /> opportunities. Let’s
                  talk!
                </h1>

                <div className="flex flex-col gap-y-15 placeholder:text-amber-400">
                  <input
                    type="text"
                    value={data.name}
                    onChange={handleformData}
                    className={`h-12 border border-accent   placeholder:text-gray-400    rounded-md `}
                    placeholder="Enter your full name"
                    name="name"
                    required
                    autoFocus
                  />
                  <input
                    type="email"
                    value={data.email}
                    onChange={handleformData}
                    className="h-12 border rounded-md border-accent placeholder:text-gray-400 "
                    name="email"
                    required
                    placeholder="Enter your email address "
                  />

                  <input
                    type="number"
                    value={data.phone}
                    onChange={handleformData}
                    ref={inputRef}
                    className={`h-12 border rounded-md border-accent${
                      err
                        ? " placeholder:text-red-500  "
                        : " placeholder:text-gray-400"
                    }`}
                    name="phone"
                    required
                    placeholder={`${
                      err ? "Invalid Mobile Number" : "Enter Your Mobile Number"
                    } `}
                    max="10"
                  />

                  <textarea
                    name="message"
                    id=""
                    value={data.message}
                    onChange={handleformData}
                    className="border rounded-md h-15 border-accent placeholder:text-gray-400"
                    required
                    placeholder="Type your message here..."
                  ></textarea>

                  <button
                    type="submit"
                    className="flex p-5 font-semibold text-white transition-colors duration-300 rounded-lg w-fit bg-accent hover:bg-accent/80"
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
