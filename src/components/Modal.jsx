import React from 'react'

const Modal = ({open, onClose, children}) => {
  return (
    <div className={`w-full z-50 fixed inset-0 flex flex-row justify-center md:px-20 items-center transition-colors duration-500 ${open ? "visible bg-black/20" : "invisible"}`}
    onClick={onClose}>
      <div className={`bg-[#191919] rounded-lg shadow p-6 transition-all max-w-7xl  ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
      onClick={(e) => e.stopPropagation()}>
        <button className='absolute top-4 right-4 p-1 text-white hover:scale-110 text-xl rounded-full bg-[#232323] bg-transparent hover:rotate-90 transition-all duration-150'
        onClick={onClose}>
            <svg
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.5 15.5-10-10zm0-10-10 10"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
