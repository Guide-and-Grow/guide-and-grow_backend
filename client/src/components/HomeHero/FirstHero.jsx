import React from "react";
import FirstImg from "./../../assets/firstheroimg.gif";
import "./Heros.css";
function FirstHero() {
  return (
    <div>
      {/* back color #efeffe */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded first-h-img"
            alt="hero"
            src={FirstImg}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering Web Development Success
            </h1>
            <p className="mb-8 leading-relaxed">
              Are you ready to embark on an exciting journey into the world of
              web development? Look no further! Our platform offers
              comprehensive training that covers everything you need to know to
              kickstart your career in web development.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstHero;
