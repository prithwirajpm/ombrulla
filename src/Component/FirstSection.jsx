import React from "react";
import "../Component/FirstSection.css";

const FirstSection = () => {
  return (
    <div className="flex flex-col xl:px-24 md:flex-row max-h-screen mt-6">
      <div className="xl:w-1/2 p-4">
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
          <p className="font-medium text-gray-600">
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
      <div className="flex justify-center align-center">
        <div className="xl:w-1/2">
          <div
            className="border-2 xl:absolute xl:top-[50px] xl:left-[800px] sliderShape border-blue-600 rounded-full overflow-hidden hidden md:block"
            style={{
              width: "400px", // Adjust the width and height as needed
              height: "400px",
              borderRadius: "62% 47% 82% 35%/45% 45% 80% 66%",
              willChange: "border-radius,transform,opacity",
              animation: "sliderShape 5s linear infinite",
              WebkitAnimation: "sliderShape 5s linear infinite",
            }}
          ></div>
          <div
            className="border-2 xl:absolute xl:top-[50px] xl:left-[1020px] border-white-600 rounded-full overflow-hidden hidden md:block"
            style={{
              width: "390px", // Adjust the width and height as needed
              height: "390px",
              borderRadius: "62% 47% 82% 35%/45% 45% 80% 66%",
              willChange: "border-radius,transform,opacity",
              animation: "sliderShape 5s linear infinite",
              WebkitAnimation: "sliderShape 5s linear infinite",
            }}
          ></div>
          <img
            src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
            alt="Your Image"
            className="w-full h-auto xl:absolute xl:top-[100px] xl:left-[870px]"
            style={{
              mask: 'url("https://www.ombrulla.com/images/home/mask-banner.png") center / contain no-repeat',
              width: "450px",
              height: "450px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
