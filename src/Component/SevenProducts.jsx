import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function SevenProducts() {
  return (
    <div className="xl:px-24 h-screen xl:flex justify-center items-center">
      <div className="xl:w-full xl:flex">
        <div className="xl:w-4/12 m-5">
          <div className="flex flex-row mb-6 xl:mt-0 mt-[400px]">
            <div
              style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
              className="m-2 shadow"
            ></div>
            <h1 className="font-medium">PRODUCTS</h1>
          </div>
          <div>
            <h1 className="text-5xl font-sans leading-tight font-semibold mb-6">
              Our HR Tools
            </h1>
          </div>
          <div>
            <p style={{ color: "grey" }}>
              Our job grading and evaluation tool, combined with the
              compensation management tool, is a highly effective SaaS-based
              solution. It greatly assists HR consultants and managers in
              carrying out their roles with efficiency and precision.
            </p>
          </div>
        </div>
        <div className="xl:w-4/12 mx-4">
          <div className="bg-[#eff1f5] rounded-2xl px-12 py-8 w-fit">
            <div>
              <h1 className="font-medium mb-6 text-2xl">
                Job Grading and Evaluation
              </h1>
            </div>
            <div>
              <p className="leading-snug leading-7 text-gray-500">
                Job evaluation assesses and ranks job roles in an organization
                based on responsibilities and skills, often for compensation and
                structuring purposes.
              </p>
            </div>
            <div className="my-4 flex justify-center items-center">
              <img
                src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp
"
                alt="job-profiler"
                srcset=""
                width={"261px"}
                height={"68px"}
              />
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="font-medium text-black hover:text-blue-600"
              >
                Free Trial
                <NorthEastIcon className="mb-6 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-4/12 xl:mx-0 mx-4 xl:my-0 my-4">
          <div className="bg-[#eff1f5] rounded-2xl px-8 py-8 w-fit">
            <div>
              <h1 className="font-medium mb-6 text-2xl">
                Compensation Management
              </h1>
            </div>
            <div>
              <p className="leading-7 text-gray-500">
                Compensation management software automates salary planning,
                budget management, and equity analysis, ensuring fair and
                competitive pay practices.
              </p>
            </div>
            <div className="my-4 flex justify-center items-center">
              <img
                src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp"
                alt="job-profiler"
                srcset=""
                width={"261px"}
                height={"68px"}
              />
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="font-medium text-black hover:text-blue-600"
              >
                Book For Demo
                <NorthEastIcon className="mb-6 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SevenProducts;
