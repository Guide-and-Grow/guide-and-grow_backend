import React from 'react'
import FirstImg from './../../assets/firstheroimg.gif'
import './Heros.css'
function FirstHero() {
  return (
    <div>
      {/* back color #efeffe */}
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded first-h-img" alt="hero" src={FirstImg}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empowering Web Development Success</h1>
      <p class="mb-8 leading-relaxed">Are you ready to embark on an exciting journey into the world of web development? Look no further! Our platform offers comprehensive training that covers everything you need to know to kickstart your career in web development.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Get Started</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default FirstHero
