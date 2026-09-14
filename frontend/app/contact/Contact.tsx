"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!phone.trim()) {
      setPhoneError("Please enter your phone number");
      hasError = true;
    } else if (phone.trim().length !== 10) {
      setPhoneError("Phone number is not complete, it should be 10 digits");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!subject.trim()) {
      setSubjectError("Please enter a subject");
      hasError = true;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("Please enter your message");
      hasError = true;
    } else {
      setMessageError("");
    }

    if (hasError) {
      setSubmitted(false);
      return;
    }

    // form is valid, put your actual submit logic here

    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0f] text-white relative overflow-hidden">

        
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[180px] rounded-full top-[-200px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full bottom-[-180px] right-[-120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-28">

         
          <div className="text-center mb-20 animate-fadeIn">

            <p className="uppercase tracking-[8px] text-gray-400 text-sm">
              We are here for you
            </p>

            <h1 className="text-5xl md:text-6xl font-serif mt-4">
              CONTACT <span className="text-yellow-400">US</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Let’s talk about your fragrance journey. We are always ready to help you find your signature scent.
            </p>

          </div>

         
          <div className="grid md:grid-cols-2 gap-12">

            
            <div className="relative group">

              <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-2xl group-hover:blur-3xl transition"></div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 hover:scale-[1.02] transition duration-300">

                <h2 className="text-3xl font-serif text-yellow-400 mb-10">
                  Get In Touch
                </h2>

                <div className="space-y-8">

                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-400 mt-1">Kathmandu, Nepal</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400 mt-1">+977 9863221160</p>
                  </div>             

                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400 mt-1">info@psperfumes.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Opening Hours</h3>
                    <p className="text-gray-400 mt-1">
                      Sunday - Friday <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>

                </div>
              </div>
            </div>

            
            <div className="relative group">

              <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-2xl group-hover:blur-3xl transition"></div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 hover:scale-[1.02] transition duration-300">

                <h2 className="text-3xl font-serif text-yellow-400 mb-10">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (e.target.value.trim()) setNameError("");
                      }}
                      className="w-full p-4 rounded-lg bg-[#0f172a] border border-white/10 text-white outline-none focus:border-yellow-400 transition"
                    />
                    {nameError && (
                      <p className="text-red-400 text-sm mt-2">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value;

                        if (/^\d*$/.test(value)) {
                          setPhone(value);
                          setPhoneError("");
                        } else {
                          setPhoneError("Please enter numbers only");
                        }
                      }}
                      className="w-full p-4 rounded-lg bg-[#0f172a] border border-gray-700 outline-none focus:border-yellow-500"
                    />
                    {phoneError && (
                      <p className="text-red-400 text-sm mt-2">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value.trim()) setEmailError("");
                      }}
                      className="w-full p-4 rounded-lg bg-[#0f172a] border border-white/10 text-white outline-none focus:border-yellow-400 transition"
                    />
                    {emailError && (
                      <p className="text-red-400 text-sm mt-2">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (e.target.value.trim()) setSubjectError("");
                      }}
                      className="w-full p-4 rounded-lg bg-[#0f172a] border border-white/10 text-white outline-none focus:border-yellow-400 transition"
                    />
                    {subjectError && (
                      <p className="text-red-400 text-sm mt-2">{subjectError}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows={6}
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (e.target.value.trim()) setMessageError("");
                      }}
                      className="w-full p-4 rounded-lg bg-[#0f172a] border border-white/10 text-white outline-none focus:border-yellow-400 resize-none transition"
                    />
                    {messageError && (
                      <p className="text-red-400 text-sm mt-2">{messageError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold hover:bg-yellow-400 hover:scale-[1.03] transition shadow-lg shadow-yellow-500/20"
                  >
                    Submit 
                  </button>

                  {submitted && (
                    <p className="text-green-400 text-sm text-center">
                      Your message has been submitted successfully!
                    </p>
                  )}

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}