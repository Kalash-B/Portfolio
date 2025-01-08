import React, { useState } from 'react';
import img from "/src/assets/contact-me.svg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !msg) {
      alert("Please fill all the fields");
      return;
    }

    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "f4be2c7a-9043-475b-8187-0e85daa14c7c");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        setResult("Failed to Submit: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div id='contact-form' className="text-white w-full h-full mt-6 mb-10 flex items-center justify-evenly">
      <form onSubmit={onSubmit} className="flex w-full md:w-1/2 p-3 justify-center flex-col items-center gap-5">
        <div className='flex w-auto flex-col items-start'>
        <div>
          <h2 className="font-semibold text-5xl mb-1">Get in touch</h2>
          <hr className="border-none w-32 h-1 rounded-xl mb-5 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]" />
        </div>
        <div className="flex min-w-80 w-1/2 flex-col gap-4 items-start">
          <input
            type="text"
            className="w-full h-12 border-none outline-none text-black pl-6 font-medium rounded-[50px] focus:border-2 focus:border-[#ab7346]"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full h-12 border-none outline-none text-black pl-6 font-medium rounded-[50px] focus:border-2 focus:border-[#ab7346]"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            value={msg}
            className="w-full h-36 pt-4 rounded-3xl border-none outline-none text-black pl-6 font-medium focus:border-2 focus:border-[#ab7346]"
            placeholder="Enter Your Message"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
            <span className='w-full text-center text-xl'>{result}</span>
          <button
            type="submit"
            className="flex max-w-full items-center justify-center py-6 px-4 text-lg gap-2 w-40 h-12 bg-[#ab7346] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded-3xl"
          >
            Submit
            <svg
              className="size-8"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
          
        </div>
        </div>
      </form>
      
      <div className='w-1/2 h-full md:flex hidden'>
          <img className='w-full h-full' src={img} alt="" />
        </div>
    </div>
  );
};

export default ContactForm;
