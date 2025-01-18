import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import img1 from '/src/assets/Anime_Person.png';
import img2 from '/src/assets/Cartoon_Person.png';
import img3 from '/src/assets/Programmer_image.png';
import { useGSAP } from '@gsap/react';
import Modal from './Modal';

const Home = () => {
  const infoRef = useRef(null);
  const imgRef = useRef(null);
  const infoH1Ref = useRef(null);
  const infoH2Ref = useRef(null);
  const imgH1Ref = useRef(null);
  const imgH2Ref = useRef(null);
  const infoARef = useRef(null);
  const imgARef = useRef(null);
  const [openfe, setOpenFE] = useState(false);
  const [openbe, setOpenBE] = useState(false);

  const {contextSafe} = useGSAP()

  const handleClickFE = (event) => {
    console.log('clicked');
    setOpenFE(true);
    // event.preventDefault(); 
    
  };

  const handleClickBE = (event) => {
    console.log('clicked');
    setOpenBE(true);
    // event.preventDefault(); 
    
  };

  useEffect(() => {
    const getCenterInViewportUnits = (
      element1,
      element2,
      infoH1,
      infoH2,
      imgH1,
      imgH2,
      infoa,
      imga
    ) => {
      const rect1 = element1.getBoundingClientRect();
      const centerX1 = rect1.left + rect1.width / 2;

      // For Information Div
      const centerXInVw1 = (centerX1 / window.innerWidth) * 100;
      infoH1.style.left = centerXInVw1 + 'vw';
      infoH2.style.left = centerXInVw1 + 'vw';
      infoa.style.left = centerXInVw1 + 'vw';

      const rect2 = element2.getBoundingClientRect();
      const centerX2 = rect2.right + rect2.width / 2;

      // For Image Div
      const centerXInVw2 = (centerX2 / window.innerWidth) * 100;
      imgH1.style.right = centerXInVw2 - centerXInVw1 * 4 + 'vw';
      imgH2.style.right = centerXInVw2 - centerXInVw1 * 4 + 'vw';
      imga.style.right = centerXInVw2 - centerXInVw1 * 4 + 'vw';
    };

    const handleMouseOverInfo = contextSafe(() => {
      gsap.to(infoRef.current, {
        flexGrow: 2,
        duration: 1,
        zIndex: 3
      });
      gsap.to(imgRef.current, {
        duration: 1
      });
    })

    const handleMouseOutInfo = contextSafe(() => {
      gsap.to(infoRef.current, {
        flexGrow: 1,
        duration: 1,
        zIndex: 1
      });
      gsap.to(imgRef.current, {
        duration: 1,
        zIndex: 1
      });
    })

    const handleMouseOverImg = contextSafe(() => {
      gsap.to(imgRef.current, {
        flexGrow: 2,
        duration: 1,
        zIndex: 3
      });
      gsap.to(infoRef.current, {
        duration: 1
      });
    });

    const handleMouseOutImg = contextSafe(() => {
      gsap.to(imgRef.current, {
        flexGrow: 1,
        duration: 1,
        zIndex: 1
      });
      gsap.to(infoRef.current, {
        duration: 1,
        zIndex: 1
      });
    });

    // Add event listeners
    infoRef.current.addEventListener('mouseover', handleMouseOverInfo);
    infoRef.current.addEventListener('mouseout', handleMouseOutInfo);
    imgRef.current.addEventListener('mouseover', handleMouseOverImg);
    imgRef.current.addEventListener('mouseout', handleMouseOutImg);

    getCenterInViewportUnits(
      infoRef.current,
      imgRef.current,
      infoH1Ref.current,
      infoH2Ref.current,
      imgH1Ref.current,
      imgH2Ref.current,
      infoARef.current,
      imgARef.current
    );

    return () => {
      // Cleanup event listeners
      infoRef.current.removeEventListener('mouseover', handleMouseOverInfo);
      infoRef.current.removeEventListener('mouseout', handleMouseOutInfo);
      imgRef.current.removeEventListener('mouseover', handleMouseOverImg);
      imgRef.current.removeEventListener('mouseout', handleMouseOutImg);
    };
  }, []);

  return (
    <div>
      <section className='flex w-full h-[calc(100vh-64px)] bg-white relative'>
        <div
          ref={infoRef}
          className='w-[50%] overflow-hidden flex relative flex-col items-center justify-center bg-[#dcdcdc]'
          style={{
            flexDirection: 'column',
            zIndex: '3',
            flex: '1',
            transition: 'flex 1s'
          }}
        >
          <h1
            ref={infoH1Ref}
            className='text-4xl top-[20vh] font-bold md:text-[75px] absolute md:top-[40vh] tracking-wider translate-x-[-50%]'
          >
            &lt;Designer&gt;
          </h1>
          <h2
            ref={infoH2Ref}
            className='text-base top-[26vh] font-bold absolute md:top-[50vh] whitespace-nowrap md:text-3xl translate-x-[-50%] tracking-wider'
          >
            Frontend Developer
          </h2>
          <button onClick={handleClickFE}
            ref={infoARef}
            className='text-sm top-[30vh] font-bold p-2 absolute md:text-xl border-2
             border-black md:top-[60vh] whitespace-nowrap tracking-wide translate-x-[-50%] no-underline md:p-3 text-black hover:text-[#dcdcdc] hover:bg-black ease-in-out duration-200'
            href=''
          >
            About Me
          </button>
          <img src={img1} className='absolute bottom-0 z-1 w-[150px] md:w-[200px] md:left-50vw left-[50vw] translate-x-[-50%]' />
        </div>
        <div
          ref={imgRef}
          className='w-[50%] overflow-hidden flex flex-col items-center justify-center bg-[#111] relative'
          style={{
            flexDirection: 'column',
            flex: '1',
            transition: 'flex 1s'
          }}
        >
          <h1
            ref={imgH1Ref}
            className='text-4xl top-[20vh] font-bold md:text-[75px] absolute md:top-[40vh] text-[#ab7346] tracking-wider translate-x-1/2'
          >
            &lt;Coder&gt;
          </h1>
          <h2
            ref={imgH2Ref}
            className='text-base top-[26vh] text-[#ab7346] font-bold absolute md:top-[50vh] whitespace-nowrap md:text-3xl translate-x-1/2 tracking-wider'
          >
            Backend Developer
          </h2>
          <button
            onClick={handleClickBE}
            ref={imgARef}
            className='text-sm top-[30vh] text-[#ab7346] font-bold p-2 absolute md:text-xl border-2 border-[#ab7346] 
            md:top-[60vh] whitespace-nowrap tracking-wide translate-x-1/2 no-underline md:p-3 hover:text-[#000] hover:bg-[#ab7346] ease-in-out duration-200'
            href=''
          >
            About Me
          </button>
          <img src={img2} className='absolute bottom-0 z-1 w-[151px] md:w-[202px] md:right-50vw right-[50vw] translate-x-1/2' />
        </div>
      </section>

     <Modal open={openfe} onClose={() => setOpenFE(false)}>
          <div className='md:w-auto w-[90%] md:h-full h[90%] flex items-center justify-center md:my-auto my-3'>
            <div className='md:w-1/2 w-full h-[80%] md:mx-16 mx-0 flex flex-col justify-evenly'>
              <div>
                <h1 className='md:text-4xl text-2xl mb-2 md:mb-4 text-[#018573] font-bold font-serif md:font-mono '>ABOUT ME</h1>
                <p className='md:text-base w-full text-sm font-serif md:font-mono text-white'>I am a dedicated and detail-oriented Computer Engineering student with strong expertise in frontend development and data visualization. Proficient in technologies like HTML, CSS, JavaScript, React.js, Tailwind css, and Power BI, I specialize in building efficient, scalable, and user-focused interfaces.
                </p>
                <br />
                <p className='md:text-base w-full text-sm font-serif md:font-mono text-white'>
                I help businesses enhance their digital presence by developing intuitive and responsive user interfaces, optimizing website performance, and transforming complex datasets into actionable insights. With a passion for problem-solving and continuous learning, I am committed to delivering high-quality technical solutions that drive innovation and growth.
                </p>
              </div>
              
              <div className='text-white w-full mt-7 md:mt-14'>
                <h1 className='font-serif md:font-mono text-3xl mb-0 md:mb-8 text-[#018573] font-bold'>Top Skills</h1>
                <div className='flex w-full justify-start gap-3 md:gap-14 items-center my-2 md:my-14'>
                  {/*React Icon*/}
                  <div className='flex flex-col items-center relative group'>

                  <svg className='z-10 relative' width="50" height="50" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#61dafb">
                          <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z">
                          </path>
                          <circle cx="420.9" cy="296.5" r="45.7"></circle>
                        </g>
                      </svg>
                      <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#61dafb] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >React</span>

                  </div>
                  {/*HTML Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative'
                      width="50"
                      height="50"
                      fill="none"
                      stroke="#de4013"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24" >
                      <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
                      <path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
                    </svg>

                    <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#de4013] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >HTML</span>
                  </div>
                  
                  {/*Tailwind css Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative' width="50" height="50" fill="#38bdf8" viewBox="0 0 24 24">
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
                  </svg>
                  <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#38bdf8] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >Tailwind CSS</span>
                  </div>
                  {/*JavaScript Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative'
                    width="50"
                    height="50"
                    fill="none"
                    stroke="#f07f21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
                    <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" />
                  </svg>
                  <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#f07f21] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >Java Script</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='md:w-1/2 hidden md:flex'>
              <img className='w-full h-full min-w-96 rounded p-20' src={img3} alt="" srcSet="" />
            </div>
          </div>
      </Modal> 

      <Modal open={openbe} onClose={() => setOpenBE(false)}>
          <div className='md:w-auto w-[90%] md:h-full h[90%] flex items-center justify-center md:my-auto my-3'>
            <div className='md:w-1/2 w-full h-[80%] md:mx-16 mx-0 flex flex-col justify-evenly'>
              <div>
                <h1 className='md:text-4xl text-2xl mb-2 md:mb-4 text-[#018573] font-bold font-serif md:font-mono '>ABOUT ME</h1>
                <p className='md:text-base w-full text-sm font-serif md:font-mono text-white'>I am a dedicated and detail-oriented Computer Engineering student with strong expertise in backend development and systems optimization. Proficient in technologies like Python, Java, Node.js, and database management systems such as MySQL, and Firebase, I specialize in designing efficient, scalable, and secure server-side applications.
                </p>
                <br />
                <p className='md:text-base w-full text-sm font-serif md:font-mono text-white'>
                I help businesses build robust backend architectures by developing APIs, managing databases, implementing authentication and security protocols, and ensuring seamless data flow between the server and client. With a passion for solving complex problems and a focus on continuous learning, I am committed to delivering high-quality technical solutions that enhance system performance and scalability.
                </p>
              </div>
              
              <div className='text-white w-full mt-7 md:mt-14'>
                <h1 className='font-serif md:font-mono text-3xl mb-0 md:mb-8 text-[#018573] font-bold'>Top Skills</h1>
                <div className='flex w-full justify-start gap-3 md:gap-14 items-center my-2 md:my-14'>
                  {/*Python Icon*/}
                  <div className='flex flex-col items-center relative group'>

                  <svg className='z-10 relative'
                    width="60"
                    height="60"
                    fill="#336d9e"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z" />
                    <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z" />
                  </svg>
                      <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#61dafb] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >Python</span>

                  </div>
                  {/*Java Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative'
                      width="60"
                      height="60"
                      fill="#de4013"
                      viewBox="0 0 1024 1024" >
                      <path d="M394.68 756.99s-34.325 19.95 24.343 26.6c71.1 8.05 107.351 7 185.632-7.874 0 0 20.665 12.949 49.385 24.149-175.475 75.074-397.184-4.375-259.36-42.875m-21.366-98.173s-38.352 28.35 20.315 34.475c75.83 7.875 135.897 8.4 239.571-11.55 0 0 14.36 14.525 36.952 22.4-212.427 62.123-448.846 5.075-296.838-45.325m180.73-166.422c43.256 49.699-11.384 94.498-11.384 94.498s109.804-56.7 59.368-127.573c-47.11-66.15-83.185-99.049 112.255-212.273.175 0-306.819 76.65-160.24 245.348M786.26 829.439s25.393 20.825-27.846 37.1c-101.397 30.625-421.7 39.9-510.664 1.225-32.048-13.825 28.02-33.25 46.934-37.275 19.613-4.2 30.997-3.5 30.997-3.5-35.551-25.025-229.94 49.175-98.771 70.35 357.605 58.1 652.165-26.075 559.35-67.9M411.142 557.144S248.1 595.818 353.35 609.818c44.482 5.95 133.095 4.55 215.58-2.275 67.423-5.6 135.196-17.85 135.196-17.85s-23.818 10.15-40.98 21.875c-165.493 43.575-485.096 23.275-393.156-21.175 77.93-37.45 141.151-33.25 141.151-33.25M703.6 720.416c168.296-87.324 90.365-171.322 36.077-159.948-13.31 2.8-19.264 5.25-19.264 5.25s4.903-7.7 14.36-11.025c107.351-37.8 190.01 111.299-34.675 170.273 0-.175 2.627-2.45 3.502-4.55M602.028 64s93.166 93.1-88.438 236.246c-145.53 114.8-33.274 180.424 0 255.148-84.936-76.65-147.28-144.024-105.425-206.848C469.634 256.672 639.68 211.873 602.028 64m-174.25 893.188c161.466 10.325 409.443-5.775 415.222-82.075 0 0-11.208 28.875-133.445 51.975-137.824 25.9-307.87 22.925-408.567 6.3 0-.175 20.665 16.975 126.79 23.8" />
                    </svg>

                    <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#de4013] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >Java</span>
                  </div>
                  
                  {/*Node.js Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative' width="100" height="100" fill="#57a343" viewBox="0 0 32 32">
                    <path d="M5.304 16.563a.265.265 0 0 0-.132-.23L2.98 15.072a.26.26 0 0 0-.121-.035h-.023a.264.264 0 0 0-.121.035L.524 16.333a.265.265 0 0 0-.133.23l.005 3.396a.13.13 0 0 0 .066.114.13.13 0 0 0 .132 0l1.302-.746a.267.267 0 0 0 .132-.23V17.51c0-.094.05-.182.132-.229l.555-.319a.272.272 0 0 1 .265 0l.554.319a.264.264 0 0 1 .132.229v1.587c0 .095.051.181.133.23l1.302.746a.13.13 0 0 0 .132 0 .133.133 0 0 0 .066-.114l.004-3.396zm11.702-4.669c-.041-.023-.091-.022-.131.002s-.065.067-.065.114v3.363a.093.093 0 0 1-.139.08l-.549-.316a.267.267 0 0 0-.265 0l-2.192 1.265a.265.265 0 0 0-.133.229v2.531c0 .095.05.182.132.229l2.192 1.266a.267.267 0 0 0 .265 0l2.193-1.266a.265.265 0 0 0 .132-.229v-6.309a.265.265 0 0 0-.136-.231l-1.305-.728zm-.203 6.437a.063.063 0 0 1-.033.057l-.753.434a.065.065 0 0 1-.066 0l-.753-.434a.065.065 0 0 1-.033-.057v-.869c0-.024.013-.046.033-.057l.753-.435a.065.065 0 0 1 .066 0l.753.435c.02.012.033.034.033.057v.869zm8.047-.892a.265.265 0 0 0 .132-.229v-.613a.264.264 0 0 0-.132-.229l-2.178-1.265a.262.262 0 0 0-.265 0l-2.192 1.265a.264.264 0 0 0-.132.229v2.53c0 .095.051.183.134.23l2.178 1.241c.08.046.179.046.26.001l1.317-.732c.041-.023.067-.067.068-.115s-.025-.092-.066-.116l-2.206-1.266a.131.131 0 0 1-.066-.115v-.793c0-.047.025-.091.066-.115l.687-.395a.135.135 0 0 1 .132 0l.687.395a.132.132 0 0 1 .066.115v.624c0 .047.025.091.066.115s.092.023.133 0l1.312-.763zM9.291 15.09a.267.267 0 0 1 .265 0l2.192 1.265a.263.263 0 0 1 .132.229v2.532a.265.265 0 0 1-.132.229l-2.192 1.266a.267.267 0 0 1-.265 0l-2.192-1.266a.264.264 0 0 1-.132-.229v-2.532c0-.095.05-.182.132-.229l2.192-1.265zm19.815 5.557a.438.438 0 0 1-.217-.058l-.69-.408c-.103-.058-.052-.078-.019-.09.137-.048.165-.059.312-.142.015-.009.036-.005.052.004l.53.315a.066.066 0 0 0 .064 0l2.067-1.193a.065.065 0 0 0 .031-.056v-2.386a.067.067 0 0 0-.032-.057l-2.066-1.192a.066.066 0 0 0-.064 0l-2.066 1.192a.066.066 0 0 0-.033.057v2.386c0 .023.013.044.032.055l.566.327c.307.154.495-.027.495-.209v-2.355a.06.06 0 0 1 .06-.059h.262a.06.06 0 0 1 .06.059v2.355c0 .41-.223.645-.612.645-.119 0-.214 0-.476-.129l-.542-.312a.436.436 0 0 1-.217-.377v-2.386c0-.155.083-.3.217-.377l2.067-1.194a.452.452 0 0 1 .434 0l2.067 1.194a.436.436 0 0 1 .217.377v2.386a.437.437 0 0 1-.217.377l-2.067 1.193a.436.436 0 0 1-.218.058zm.639-1.643c-.905 0-1.094-.415-1.094-.764 0-.033.026-.059.06-.059h.267a.06.06 0 0 1 .059.051c.04.272.16.41.708.41.435 0 .621-.099.621-.329 0-.133-.052-.232-.729-.298-.565-.056-.915-.181-.915-.633 0-.417.352-.666.941-.666.662 0 .99.23 1.031.723.002.017-.004.033-.016.046s-.027.019-.044.019h-.268a.06.06 0 0 1-.058-.047c-.064-.286-.221-.378-.645-.378-.475 0-.531.166-.531.29 0 .151.065.194.707.279.635.084.937.203.937.649 0 .45-.375.708-1.03.708zm-7.239-1.683a.052.052 0 0 1 .051 0l.421.243a.05.05 0 0 1 .026.044v.486a.05.05 0 0 1-.026.044l-.421.243a.052.052 0 0 1-.051 0l-.42-.243a.05.05 0 0 1-.025-.044v-.486c0-.018.01-.035.025-.044l.42-.243z" />
                  </svg>
                  <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#57a343] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >Node.js</span>
                  </div>
                  {/*MySQL Icon*/}
                  <div className='flex flex-col items-center relative group'>
                  <svg className='z-10 relative'
                    width="60"
                    height="60"
                    fill="#ea8c10"
                    viewBox="0 0 24 24">
                   <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 0 0-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 0 1-.35-.4 8.76 8.76 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
                  </svg>
                  <span
                      className="z-0 flex text-black opacity-0 group-hover:opacity-100 group-hover:-top-14 ease-jump duration-200 bg-[#ea8c10] sm:absolute left-1/2 sm:-translate-x-1/2 -top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-full w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                      >MySQL</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='md:w-1/2 hidden md:flex'>
              <img className='w-full h-full min-w-96 rounded p-20' src={img3} alt="" srcSet="" />
            </div>
          </div>
      </Modal> 
    </div>
  );
};

export default Home;
