import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function FourSection() {
  return (
    <div className="xl:h-screen flex justify-center items-center">
      <div className="xl:w-full xl:flex">
        <div className="xl:w-1/2 flex justify-center items-center">
          <img
            src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
            alt=""
            srcset=""
            className="w-[80vh] h-[65vh] rounded-[1rem]"
          />
        </div>
        <div className="xl:w-1/2 xl:ms-10 my-2">
          <div className="flex flex-row mb-6">
            <div
              style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
              className="m-2 shadow"
            ></div>
            <h1 className="font-medium">AI VISUAL INSPECTION</h1>
          </div>
          <div>
            <h1 className="font-medium leading-[4rem] text-[3rem]">
              Improving Quality with Greater Precision
            </h1>
            <ul
              className="ml-3 mr-7 text-[18px] my-5"
              style={{ listStyle: "disc" }}
            >
              <li className="mt-4">
                <span className="font-medium">Automated Defect Detection:</span>{" "}
                Automated visual inspection uses computer vision and machine
                learning to identify defects autonomously.
              </li>
              <li className="mt-4">
                <span className="font-medium">Advanced Image Processing:</span>{" "}
                It captures and enhances digital images for relevant feature
                extraction.
              </li>
              <li className="mt-4">
                <span className="font-medium">Informed Decision-Making:</span>{" "}
                The system classifies defects, aiding manufacturers in quality
                control decisions.
              </li>
              <li className="mt-4">
                <span className="font-medium">
                  Real-Time Quality Assurance:
                </span>{" "}
                Integration with manufacturing enables real-time quality control
                and reduces substandard product risks.
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
      </div>
    </div>
  );
}

export default FourSection;
