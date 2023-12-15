import React from "react";
import "../Component/FirstSection.css";

function Demiy() {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 mt-20">
        <div className="w-1/2 mt-20">
          <div
            className="border-2 sliderShape border-blue-600 rounded-full overflow-hidden"
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
            className="border-2 absolute top-[8850px] left-[950px] border-white-600 rounded-full overflow-hidden"
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
            className="w-full h-auto absolute top-[8900px] left-[870px]"
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
}

export default Demiy;
