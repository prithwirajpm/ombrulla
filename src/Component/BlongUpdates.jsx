import React from "react";

function BlongUpdates() {
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
          <div className="xl:w-3/12 my-6 mx-6">
            <div>
              <img
                src="https://www.ombrulla.com/_astro/blog-1.311eedd5_wt4eW.webp"
                alt="blog"
                srcset=""
                style={{ width: "350px", height: "196px" }}
                className="rounded-lg "
              />
            </div>
            <div className="mt-3">
              <div>
                <h4 className="font-medium text-[20px]">
                  Privacy and security concerns with Artificial Intelligence
                </h4>
              </div>
              <div className="mt-3">
                <p style={{ color: "grey" }}>
                  Privacy and security are significant concerns when it comes to
                  AI. AI systems often require access to large amounts of
                  personal data, which can be ...
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
          <div className="xl:w-3/12 my-6 mx-6">
            <div>
              <img
                src="https://www.ombrulla.com/_astro/blog-2.c3cc33af_ZkLCIU.webp"
                alt="blog"
                srcset=""
                style={{ width: "350px", height: "196px" }}
                className="rounded-lg "
              />
            </div>
            <div className="mt-3">
              <div>
                <h4 className="font-medium text-[20px]">
                  The impact of AI on jobs and the workforce
                </h4>
              </div>
              <div className="mt-3">
                <p style={{ color: "grey" }}>
                  The impact of AI on jobs and the workforce is a topic of much
                  debate and speculation. While some argue that AI will create
                  new job opportunities...
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
                <p>Mar 10, 2020 · 4 min read</p>
              </div>
            </div>
          </div>
          <div className="xl:w-3/12 my-6 mx-6">
            <div className="w-fit">
              <img
                src="https://www.ombrulla.com/_astro/blog-3.fee62469_Z3YRpV.webp"
                alt="blog"
                srcset=""
                style={{ width: "350px", height: "196px" }}
                className="rounded-lg "
              />
            </div>
            <div className="mt-3">
              <div>
                <h4 className="font-medium text-[20px]">
                  Bias and fairness in Artificial Intelligence
                </h4>
              </div>
              <div className="mt-3">
                <p style={{ color: "grey" }}>
                  Bias and fairness are important considerations in AI, as they
                  can significantly impact the accuracy and effectiveness of AI
                  systems, as well as the social and ethical of their use...
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
                <p>Feb 12, 2020 · 11 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlongUpdates;
