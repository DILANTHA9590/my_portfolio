import React, { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
  const [data, setFormData] = useState({
    name: "",
    email: "",
    phone: " ",
    message: "",
  });

  function handleformData(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <div className="h-full mt-34 bg-amber-400">
        <div className="flex flex-col h-full sm:flex-row ">
          <div className="w-[50%] bg-amber-900"></div>
          <div className="w-[50%] bg-accent">
            <form action="">
              <div>
                <h1>GET IN TOUCH</h1>
                <h1>
                  I'm always open to new ideas and <br /> opportunities. Let’s
                  talk!
                </h1>

                <div>
                  <input
                    type="text"
                    value={data.name}
                    onChange={handleformData}
                  />
                  <input
                    type="email"
                    value={data.email}
                    onChange={handleformData}
                  />
                  <PhoneInput
                    country={"lk"} // default country 🇱🇰
                  />
                  <textarea
                    name=""
                    id=""
                    value={data.phone}
                    onChange={handleformData}
                  ></textarea>

                  <Link className="block">Submit now</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
