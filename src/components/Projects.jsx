import React from 'react'
import pro1 from '/src/assets/project1.png';
import pro2 from '/src/assets/project2.png';
import pro3 from '/src/assets/project3.png';

const Projects = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16 text-white">
      <h2
        className="text-3xl text-[40px] sm:text-[40px] text-white bg-[#111] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative z-10 font-bold px-4 py-4 w-max mx-auto text-center border-2 rounded-md border-[#1788ae]">
        Latest Works
      </h2>

      {/* Python based text Manipulation*/}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="#"
          className="flex w-full relative justify-center sm:justify-start">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={pro1}
              alt=""/>
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Text Translate, Summarizer, Extractor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
          Text Translate, Summarizer, Extractor
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(Text Manipulation Platform)</span>
          <p className="text-justify text-sm md:text-base mt-2">
          Develop an AI tool for translation, summarization, and text extraction using Python, Hugging Face, Google Translate, and OCR.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #python
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #html
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #java script
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #Natural Language Processing (NLP)
            </li>
          </ul>
        </div>
      </div>

        <hr className="md:hidden flex w-full border-b-2 border-[#1788ae] mt-12" />

        {/* AI Based Image and Audio classNameification */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
          AI Based Image and Audio classNameification
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg"> (Android App) </span>
          <p className="text-justify text-sm md:text-base mt-2">
          The problem centers on developing a robust solution capable of identifying various objects and sounds from images and audio recordings, respectively.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #android
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #java
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #xml
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #google developer
            </li>
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
        <a
          href="#"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              className="max-w-[400px] max-h-[600px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={pro2}
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Image and Audio classNameification
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <hr className="md:hidden flex w-full border-b-2 border-[#1788ae] mt-12" />
      <div
        className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="#"
          className="flex w-full relative justify-center sm:justify-start">
          <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={pro3}
              alt=""/>
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >end to end encrypted files over a network
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
          An application to send and receive end to end encrypted files over a network.
          </h3>
          <span className="text-[#fc815c] text-base md:text-lg">(Send and Receive files over a network)</span>
          <p className="text-justify text-sm md:text-base mt-2">
          The exchange of sensitive information and files over a network is a common requirement. However, ensuring the security and privacy of these files is a significant concern. The problem we aim to address in this project is the secure transfer of files over a network while maintaining the confidentiality and integrity of the data.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #java
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #Advanced Java
            </li>
          </ul>
        </div>
      </div>
      <div
        className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
      ></div>
    </section>
    </div>
  )
}

export default Projects
