import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../../utillls/context";
import { motion } from "framer-motion";
import { sendEmail } from "../../utillls/sendMail";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const { dark } = useContext(DarkContext);
  const [err, setErr] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputRef = useRef();

  function handleformData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone" && err) setErr(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (data.phone.toString().length < 10) {
      inputRef.current.focus();
      setErr(true);
      return;
    }

    sendEmail(data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "dilanthanayanajith@gmail.com",
      href: "mailto:dilanthanayanajith@gmail.com",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "0714931304",
      href: "tel:0714931304",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/dilantha-nayanajith-9a1545297/",
      gradient: "from-blue-500 to-cyan-500",
      external: true,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/DILANTHA9590",
      gradient: "from-purple-500 to-pink-500",
      external: true,
    },
  ];

  return (
    <>
      <div
        className={`mt-[15vh] font-inter ${
          dark != "false" ? "bg-primary text-textwhite" : "bg-primary_white text-textblack"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block mb-6">
              <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
                GET IN TOUCH
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.p
              className="text-lg sm:text-xl mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind or just want to chat? I'm always open to new ideas and opportunities. Let's connect! 🚀
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>
              
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className={`block p-5 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                      dark != "false"
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-white/50 border-gray-200 hover:border-gray-300"
                    } hover:shadow-xl group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-r ${contact.gradient}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-2xl text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold opacity-70">{contact.label}</h3>
                        <p className="text-base sm:text-lg font-semibold">{contact.value}</p>
                      </div>
                      {contact.external && (
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <FaPaperPlane className="text-accent" />
                        </motion.div>
                      )}
                    </div>
                  </motion.a>
                );
              })}

              {/* Location */}
              <motion.div
                className={`p-5 rounded-xl backdrop-blur-sm border ${
                  dark != "false"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/50 border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold opacity-70">Location</h3>
                    <p className="text-base sm:text-lg font-semibold">Sri Lanka 🇱🇰</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
                  dark != "false"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/50 border-gray-200"
                } shadow-xl`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={handleformData}
                      className={`w-full h-12 px-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                        dark != "false"
                          ? "bg-gray-900/50 border-gray-600 focus:border-accent"
                          : "bg-white border-gray-300 focus:border-accent"
                      }`}
                      placeholder="Enter your full name"
                      name="name"
                      required
                      autoFocus
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={handleformData}
                      className={`w-full h-12 px-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                        dark != "false"
                          ? "bg-gray-900/50 border-gray-600 focus:border-accent"
                          : "bg-white border-gray-300 focus:border-accent"
                      }`}
                      name="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  {/* Phone Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={handleformData}
                      ref={inputRef}
                      className={`w-full h-12 px-4 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        err
                          ? "border-red-500 focus:ring-red-500"
                          : dark != "false"
                          ? "bg-gray-900/50 border-gray-600 focus:border-accent focus:ring-accent"
                          : "bg-white border-gray-300 focus:border-accent focus:ring-accent"
                      }`}
                      name="phone"
                      required
                      placeholder={err ? "Invalid phone number" : "0712345678"}
                    />
                    {err && <p className="text-red-500 text-sm mt-1">Please enter a valid phone number (min 10 digits)</p>}
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={data.message}
                      onChange={handleformData}
                      rows={5}
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                        dark != "false"
                          ? "bg-gray-900/50 border-gray-600 focus:border-accent"
                          : "bg-white border-gray-300 focus:border-accent"
                      }`}
                      required
                      placeholder="Tell me about your project or just say hi..."
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 font-semibold text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      submitted
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-to-r from-accent via-purple-500 to-pink-500 hover:shadow-lg"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {submitted ? (
                      <>
                        ✓ Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
