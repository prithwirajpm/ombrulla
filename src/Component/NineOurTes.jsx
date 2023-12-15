import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Component/FirstSection.css";

function NineOurTes() {
  const testimonials = [
    {
      quote:
        "Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.",
      author: "Quresh Goga",
      company: "Shipcom Wireless",
      image: "https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp",
    },
    {
      quote:
        "Ombrulla and Green Palm collaborate on an AI ship inspection project, employing image and video analysis to detect damages and anomalies. We are highly satisfied with the project's outcomes and the benefits it brings.",
      author: "Manoj Menon",
      company: "Green Palm",
      image:
        "https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp",
    },
    {
      quote:
        "Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.",
      author: "Joseph",
      company: "Planet Fitness",
      image:
        "https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp",
    },
    {
      quote:
        "Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.",
      author: "Tony Michael",
      company: "CEO, The Cotillion Hotels, New York, USA",
      image: "https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp",
    },
    {
      quote:
        "We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.",
      author: "David Thomas",
      company: "Managing Director Best Western, Kansas, USA",
      image:
        "https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp",
    },
    {
      quote:
        "Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.",
      author: "James Joseph",
      company: "Managing Director, Terranz Dubai, UAE",
      image:
        "https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp",
    },
    {
      quote:
        "We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.",
      author: "Vinod MN",
      company: "Managing Director, AZEL IT Solutions",
      image: "https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change the delay as needed (in milliseconds)
    responsive: [
      {
        breakpoint: 900, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="bg-blue-950 xl:px-24 xl:py-20 py-24">
        <div className="flex text-white flex-row mb-6">
          <div
            style={{ width: "8px", height: "8px", backgroundColor: "blue" }}
            className="m-2 shadow"
          ></div>
          <h1 className="font-medium">OUR TESTIMONIALS</h1>
        </div>
        <div>
          <h1 className="font-medium pb-6 text-white text-[35px]">
            What Customers Say About Us
          </h1>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full px-2">
                {" "}
                {/* Added px-2 for margin */}
                <div className="bg-white rounded-t-lg">
                  <div className="px-10 py-10">
                    <div className="text-[30px]">
                      <i className="fa-solid fa-quote-left text-blue-600"></i>
                    </div>
                    <p className="pb-16 text-gray-500">{testimonial.quote}</p>
                  </div>
                  <div className="bg-slate-300 h-fit flex py-5">
                    <img
                      src={testimonial.image}
                      alt=""
                      srcSet=""
                      style={{ width: "80px", height: "80px" }}
                      className="rounded-full m-4"
                    />
                    <div className="ms-2 mt-6">
                      <h1 className="font-medium">{testimonial.author}</h1>
                      <p className="text-blue-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NineOurTes;
