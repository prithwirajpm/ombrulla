import { padding } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#04102a] text-[#8A99B4]">
      <div className="h-fit xl:px-24 xl:mt-0 mt-[850px]">
        <div className="xl:w-full xl:flex md:flex flex-row py-40">
          <div
            className="xl:w-3/12 ms-14"
            style={{ color: "rgb(138 153 180)" }}
          >
            <div>
              <h1 className="font-medium text-white text-2xl mb-6">About Us</h1>
              <p className="font-normal leading-7 mb-6">
                Ombrulla is an AI-driven company specializing in extracting
                insights from diverse data sources, including photos, videos,
                and data lakes. Our tailored solutions help businesses make
                data-driven decisions and improve their bottom line through
                automation and AI-powered analysis.
              </p>
              <div className="text-[20px] mb-6">
                <i class="fa-brands fa-facebook mr-6 text-white"></i>
                <i class="fa-brands fa-instagram mr-6 text-white"></i>
                <i class="fa-brands fa-twitter mr-6 text-white"></i>
                <i class="fa-brands fa-linkedin-in mr-6 text-white"></i>
                <i class="fa-brands fa-youtube mr-6 text-white"></i>
              </div>
            </div>
          </div>
          <div
            className="xl:w-3/12 ms-14 mb-6"
            style={{ color: "rgb(138 153 180)" }}
          >
            <div>
              <h1 className="font-medium text-white text-2xl mb-6">
                Our Services
              </h1>
            </div>
            <div className="flex flex-col leading-[50px]">
              <a href="http://">AI Infrastructure Inspection</a>
              <a href="http://">AI Visual Inspection</a>
              <a href="http://">AI Data Analytics</a>
              <a href="http://">AI People Tracking</a>
            </div>
          </div>
          <div
            className="xl:w-3/12 ms-14 mb-6"
            style={{ color: "rgb(138 153 180)" }}
          >
            <div>
              <h1 className="font-medium text-white text-2xl mb-6">
                Our Solutions
              </h1>
            </div>
            <div className="flex flex-col leading-[50px]">
              <a href="http://">Asset Performance Management</a>
              <a href="http://">Job Grading & Evaluation</a>
              <a href="http://">Compensation Management</a>
            </div>
          </div>
          <div
            className="xl:w-3/12 ms-14 mr-14"
            style={{ color: "rgb(138 153 180)" }}
          >
            <div>
              <h1 className="font-medium text-white text-2xl mb-6">Reach Us</h1>
            </div>
            <div className="flex flex-col">
              <p className="leading-[27px] mb-5">
                United Kingdom, 53 Denton close Redhill, Surrey, RH1 5LB +44 787
                999 3892
              </p>
              <p className="leading-[27px] mb-5">
                Germany, Schützenstraße 51A Lübeck, 23558 +49 179 512 5812
              </p>
              <p className="leading-[27px] mb-5">
                India, No. 154/20, Royal Space Third Floor TI, HSR Layout,
                Bangalore, Karnataka 560102 +91 85900 56435
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: "9px" }}>
        © 2020 Ombrulla, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
