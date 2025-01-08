import React, { Fragment } from 'react'

const Tape = () => {
    const words = ["Performant", "Accessible", "Secure", "Interactive", "Scalable", "User-Friendly", "Responsive", "Maintainable", "Search Optimized", "Usable", "Reliable"];
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
                {[...new Array(2)].fill(0).map((_, idx)=>
                    <Fragment key={idx}>
                        {words.map(word =>(
                            <div key={word} className='inline-flex gap-4'>
                                <span className='text-gray-900 font-extrabold uppercase text-sm'>{word}</span>
                                    <svg className='size-4 text-gray-900 -rotate-12'
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 1 9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
                                    </svg>
                            </div>
                        ))}
                    </Fragment>
                )}
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tape
