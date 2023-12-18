import axios from "axios";
import React, { useEffect, useState } from "react";

function BlongUpdates() {
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-screen xl:px-24 xl:mt-0 xl:mb-10 mt-[20px]">
      <div className="flex justify-center items-center mb-[1.125rem]">
        <div
          style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
          className="m-2 shadow"
        ></div>
        <h1 className="font-medium">BLOG UPDATES</h1>
        <div
          style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
          className="m-2 shadow"
        ></div>
      </div>
      <div>
        <h1 className="text-center font-medium text-[44px] mb-8">To Read</h1>
        <hr />
      </div>
      <div className="mt-8">
        <div className="xl:flex justify-around">
          {allData?.length > 0 ? (
            allData
              .filter((product, index) => index < 3)
              .map((product, index) => (
                <div className="xl:w-3/12 my-6 mx-6" key={index}>
                  <div>
                    <img
                      src={product.image}
                      alt="blog"
                      srcset=""
                      style={{ width: "350px", height: "196px" }}
                      className="rounded-lg "
                    />
                  </div>
                  <div className="mt-3">
                    <div>
                      <h4 className="font-medium text-[20px]">
                        {product.title}
                      </h4>
                    </div>
                    <div className="mt-3">
                      <p style={{ color: "grey" }}>
                        {product.description.slice(0, 125)}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img
                      src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                      alt="zara"
                      srcset=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-3">
                      <h1 className="font-medium">Zara Elizabeth</h1>
                      <p>Mar 16, 2020 · 6 min read</p>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div>Nothing</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlongUpdates;
