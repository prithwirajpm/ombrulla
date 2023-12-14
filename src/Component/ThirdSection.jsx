import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function ThirdSection() {
  return (
    <div className="h-screen xl:flex justify-center items-center">
      <div className="w-full xl:flex">
        <div className="xl:w-1/2 xl:mx-2 my-2">
          <div className="flex flex-row mb-6">
            <div
              style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
              className="m-2 shadow"
            ></div>
            <h1 className="font-medium">AI INFRASTRUCTURE INSPECTION</h1>
          </div>
          <div>
            <h1 className="font-medium leading-[4rem] text-[3rem]">
              Enhances Efficiency, Safety, and Cost-Effectiveness
            </h1>
            <ul
              className="ml-3 mr-7 text-[18px] my-5"
              style={{ listStyle: "disc" }}
            >
              <li className="mt-4">
                <span className="font-medium">Cutting-Edge Solution:</span>{" "}
                Ombrulla leverages AI, drones, and IoT technologies to transform
                infrastructure inspection.
              </li>
              <li className="mt-4">
                <span className="font-medium">Real-Time Insights:</span>{" "}
                Real-time insights enhance inspection efficiency, safety, and
                reduce conventional challenges.
              </li>
              <li className="mt-4">
                <span className="font-medium">
                  Longevity and Cost-Effectiveness:
                </span>{" "}
                Ombrulla ensures the longevity and safety of critical
                infrastructure while offering a cost-effective solution.
              </li>
              <li className="mt-4">
                <span className="font-medium">Responsive Maintenance:</span>{" "}
                Enhances infrastructure management, increasing reliability and
                responsiveness, and reducing risks.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="border bg-blue-600 mt-4 px-8 py-4 rounded-full text-white hover:bg-white hover:text-black">
              Schedule Call
            </button>
            <a
              href="#"
              className="ms-5 font-medium text-black hover:text-blue-600"
            >
              Read More
              <NorthEastIcon className="mb-6 text-blue-600" />
            </a>
          </div>
        </div>
        <div className="xl:w-1/2 flex justify-center items-center">
          <img
            src="	https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp"
            alt=""
            srcset=""
            className="w-[80vh] h-[65vh] rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
