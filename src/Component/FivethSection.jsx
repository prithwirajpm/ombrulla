import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function FivethSection() {
  return (
    <div className="h-screen xl:px-24 xl:mt-0 mt-[20px] xl:flex justify-center items-center">
      <div className="w-full xl:flex">
        <div className="xl:w-1/2 xl:mx-2 mx-4 my-2">
          <div className="flex flex-row mb-6">
            <div
              style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
              className="m-2 shadow"
            ></div>
            <h1 className="font-medium">AI DATA ANALYTICS</h1>
          </div>
          <div>
            <h1 className="font-medium leading-[4rem] text-[3rem]">
              Empowers Businesses to Make Insightful Decisions
            </h1>
            <ul
              className="ml-3 mr-7 text-[18px] my-5"
              style={{ listStyle: "disc" }}
            >
              <li className="mt-4">
                <span className="font-medium">Actionable Insights:</span> AI
                data analysis enhances decisions, personalizes customer
                experiences and improve operations.
              </li>
              <li className="mt-4">
                <span className="font-medium">Increased Customer Loyalty:</span>{" "}
                AI predictive analytics for personalized recommendations &
                increased customer loyalty.
              </li>
              <li className="mt-4">
                <span className="font-medium">Quality Assurance:</span> AI
                analytics identifies and mitigates potential issues, ensuring
                the quality and reliability of products and services.
              </li>
              <li className="mt-4">
                <span className="font-medium">
                  Efficiency and Responsiveness:
                </span>{" "}
                Customers benefit from increased efficiency, improved product
                quality, and more responsive interactions with businesses.
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
        <div className="w-full xl:w-1/2 flex justify-center items-center hidden md:flex">
          {/* Hidden on screens smaller than md (medium) */}
          <img
            src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp"
            alt=""
            srcSet=""
            className="w-[80vh] h-[65vh] rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default FivethSection;
