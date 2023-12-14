import React from "react";

const FirstSection = () => {
  return (
    <div className="flex flex-col md:flex-row max-h-screen mt-6">
      <div className="w-full md:w-1/2 p-4">
        <div
          style={{
            fontSize: "60px",
          }}
          className="xl:mt-24 leading-[4rem]"
        >
          <h1 style={{ fontWeight: "bold" }}>Manual </h1>
          <h1 style={{ fontWeight: "bold" }}>Inspection is</h1>
          <h1 className="text-blue-600">Slow & Error-</h1>
          <h1 className="text-blue-600">Prone</h1>
        </div>
        <div className="mt-6">
          <p style={{ color: "grey", fontWeight: "bold" }}>
            AI-driven computer vision transforms manufacturing quality
            inspection, boosting precision and cost-efficiency while upholding
            product excellence.
          </p>
        </div>
        <div className="mt-6">
          <button className="border bg-blue-600 mt-4 px-8 py-4 rounded-full text-white hover:bg-white hover:text-black">
            Schedule Call
          </button>
          <button className="border bg-blue-600 m-4  py-4 px-6 rounded-full text-white hover:bg-white hover:text-black">
            <i className="fa-solid fa-play"></i>
          </button>
          <a href="" className="ms-4">
            Watch Video
          </a>
        </div>
      </div>
      <div className="custom-shape w-full md:w-1/2 flex justify-center align-center">
        <img
          src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
          alt="Your Image"
          className="w-full h-auto"
          style={{
            mask: 'url("https://www.ombrulla.com/images/home/mask-banner.png") center / contain no-repeat',
            width: "500px",
            height: "506px",
          }}
        />
      </div>
    </div>
  );
};

export default FirstSection;
