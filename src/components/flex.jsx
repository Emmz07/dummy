import React from 'react'
import Image from 'next/image'

const Flex = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
          <Image className="object-cover object-center rounded" alt="hero" src="/img/invest2.png" width={428} height={377} />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
              <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
          <Image className="object-cover object-center rounded" alt="hero" src="/img/invest2.png" width={428} height={377} />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
              <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Flex
