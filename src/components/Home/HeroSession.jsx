import React from 'react'

function HeroSession() {
  return (
     <section className="relative font-sans overflow-hidden min-h-screen mt-20">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-blue-600" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 flex flex-col items-center pt-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex flex-col justify-between w-14 h-14 bg-blue-700 rounded-xl p-2 shadow-md">
            <div className="flex-1 bg-white rounded-r-md mb-1"></div>
            <div className="flex-1 bg-white rounded-r-md"></div>
          </div>

          <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Hello <span className="text-orange-400">Wearbasket </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSession
