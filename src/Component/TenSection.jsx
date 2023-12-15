import React from "react";

function TenSection() {
  return (
    <div className="w-100 xl:px-24 xl:mt-40 mb-40 hidden md:block">
      <div className="px-24">
        <div className="flex justify-center items-center mb-[1.125rem]">
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
          <h1 className="font-medium">BRANDS WE WORK WITH</h1>
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
        </div>
        <div>
          <h1 className="font-medium text-center text-5xl mb-10">
            Trusted by Thousands of Businesses
          </h1>
        </div>
        <div className="xl:px-24 w-full">
          <div className="flex justify-between w-full">
            <div>
              <img
                src="	https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp"
                alt="unv"
                srcset=""
                style={{ width: "128px", height: "128px" }}
              />
            </div>
            <div>
              <img
                src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp"
                alt="alhuva"
                srcset=""
                style={{ width: "128px", height: "128px" }}
              />
            </div>
            <div>
              <img
                src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp"
                alt="nvidia"
                srcset=""
                style={{ width: "128px", height: "128px" }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-20">
            <img
              src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp"
              alt="amazon"
              srcset=""
              style={{ width: "128px", height: "128px" }}
            />
            <img
              src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp"
              alt="hikvision"
              srcset=""
              style={{ width: "128px", height: "128px" }}
            />
            <img
              src=" https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp"
              alt="Astro"
              srcset=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenSection;
