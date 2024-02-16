import React from "react";
import document from "./../../assets/documentation.svg";
import doubts from "./../../assets/doubt_solving.svg";
import interview from "./../../assets/interviewprepartion.svg";
import onlinetest from "./../../assets/Online_test.svg";
import youtubeVideo from "./../../assets/Video_tutorial_amico.svg";
import "./Service.css";
function Services() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light">
                <img
                  alt="gallery"
                  className="absolute inset-0  h-full p-5 object-cover object-center img-margin"
                  src={youtubeVideo}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Curated YouTube Content
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {" "}
                    Youtube Content
                  </h1>
                  <p className="leading-relaxed">
                    We understand the importance of visual learning, which is
                    why we scour the depths of YouTube to bring you the most
                     and up-to-date content on web development.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light">
                <img
                  alt="gallery"
                  className="absolute inset-0  p-5 h-full object-cover object-center img-margin"
                  src={document}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Comprehensive Documentation
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Documentation
                  </h1>
                  <p className="leading-relaxed">
                    We believe in the power of thorough documentation. Our
                    platform provides detailed guides, tutorials, and reference
                    materials to supplement your learning journey.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light">
                <img
                  alt="gallery"
                  className="absolute inset-0  h-full p-5 object-cover object-center img-margin"
                  src={onlinetest}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Interactive Quizzes
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Interactive Quizzes
                  </h1>
                  <p className="leading-relaxed">
                    Put your knowledge to the test with our interactive quizzes!
                    Reinforce what you've learned and track your progress as you
                    move through the training modules.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light ">
                <img
                  alt="gallery"
                  className="absolute inset-0  h-full p-5 object-cover object-center img-margin"
                  src={doubts}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Expert Doubt Solving
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Doubt Solving
                  </h1>
                  <p className="leading-relaxed">
                    Stuck on a tricky problem? Don't worry, our team of
                    experienced developers is here to help! Post your doubts in
                      get good assistance from
                    industry professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light text-center">
                <img
                  alt="gallery"
                  className="absolute inset-0  h-full  p-4 object-cover object-center img-margin"
                  src={interview}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Online Interview Preparation
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Interview Preparation
                  </h1>
                  <p className="leading-relaxed">
                    Ready to take the next step in your career? Our platform
                    offers online interview slot booking, where you can schedule
                    mock interviews with seasoned professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative bg-pur-light text-center">
                <img
                  alt="gallery"
                  className="absolute inset-0  h-full  p-4 object-cover object-center img-margin"
                  src={youtubeVideo}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Online Interview Preparation
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Interview Preparation
                  </h1>
                  <p className="leading-relaxed">
                    Ready to take the next step in your career? Our platform
                    offers online interview slot booking, where you can schedule
                    mock interviews with seasoned professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
