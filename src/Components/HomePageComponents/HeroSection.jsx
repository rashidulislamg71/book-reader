import React from 'react'
import heroImage from "../../assets/heroImg.png"

function HeroSection() {
  return (
    <div className='px-4 py-0 md:py-10 md:px-16'>
      <div className="hero md:bg-gray-200 min-h-screen md:p-10 p-0 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='w-45 h-60 md:w-90 md:h-auto rounded-2xl ' src={heroImage} alt="heroImage" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection