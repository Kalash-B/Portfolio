import React, { useState } from 'react';

const Navbar = () => {
  // State to handle the toggle of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id='nav-bar' className="relative top-0 left-0 z-50 md:z-1">
      <nav className="w-full h-16 bg-transparent md:bg-[#111] flex justify-between items-center px-5 md:px-40 absolute md:relative md:z-1">
        <div className="flex justify-center items-center text-[#ab7346] text-4xl md:text-black w-28">
          <a href="#">
          <svg
              className="text-black md:font-bold md:text-[#ab7346]" 
              width="40"
              height="44"
              viewBox="0 0 163 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5714 1L1 34.0862V203H33.8571C37.2857 203 37.1905 200.678 36.7143 199.517V149.017L31 154.241V115.931L49.5714 114.19L122.429 203H161L82.4286 107.224L161 9.7069H122.429L63.8571 81.1034H38.1429L31 93.2931V2.74138L29.5714 1Z"
                stroke="#1F2667"
                strokeOpacity="0.9"
                strokeWidth="10"
              />
              <path
                d="M1 203V34.0862L29.5714 1L31 2.74138V93.2931L38.1429 81.1034H63.8571L122.429 9.7069H161L82.4286 107.224L161 203H122.429L49.5714 114.19L31 115.931V154.241L36.7143 149.017V199.517C37.1905 200.678 37.2857 203 33.8571 203M1 203C10.5238 203 30.4286 203 33.8571 203M1 203H33.8571"
                stroke="url(#paint0_linear)"
                strokeWidth="10"
              />
              <defs>
            <linearGradient
              id="paint0_linear"
              x1="205.549"
              y1="20.0169"
              x2="204.338"
              y2="342.461"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1595B6"></stop>
              <stop offset="1" stopColor="#1595B6" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
            </svg>
          </a>
        </div>

        <div>
          <ul className={`text-2xl flex md:text-[#b0b2c3] md:bg-transparent md:flex md:gap-10 md:items-center md:static ${isMenuOpen ? 'absolute bg-[#fff] top-16 right-0 p-5 gap-14' : 'hidden'}`}>
            <li>
              <a href="">
                <svg className='w-7 hover:text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kalash-baldota-290b43281/" target="_blank">
                <svg
                  className="w-7 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kalash-B">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 hover:text-white" viewBox="0 0 496 512">
                    <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu links (mobile styles by default, hidden on larger screens) */}
        <div
          className={`text-2xl max-w-28 flex md:flex md:text-white md:bg-transparent md:gap-10 md:items-center md:px-5 md:static ${isMenuOpen ? 'absolute bg-[#fff] top-36 right-0 p-5' : 'bg-transparent hidden'} `}
        >
          <button onClick={handleScrollToContact} className="text-[#b0b2c3] hover:text-white font-bold">
                Contact
              </button>
        </div>

        {/* Hamburger Menu (visible on mobile, hidden on desktop) */}
        <div
          className="hamburger-menu text-[#ab7346] text-3xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
