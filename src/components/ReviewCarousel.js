// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../reviewCarousel.css";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./FAQ";
import Wave from "./Wave";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

// Sample reviews data (Grouped into slides)
const reviews = [
  [
    {
      id: 1,
      name: "John Doe",
      text: "This is a wider card with supporting text below.",
      time: "Last updated 3 mins ago",
      imgSrc: "/img/Ellipse 9.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "This card has supporting text below.",
      time: "Last updated 3 mins ago",
      imgSrc: "/img/Ellipse 10.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "This card has even longer content.",
      time: "Last updated 3 mins ago",
      imgSrc: "/img/Ellipse 100.png",
    },
  ],
  [
    {
      id: 4,
      name: "Michael Brown",
      text: "Different card content for the second slide.",
      time: "Last updated 5 mins ago",
      imgSrc: "/img/Ellipse 9.png",
    },
    {
      id: 5,
      name: "Emily White",
      text: "Another set of cards in the carousel.",
      time: "Last updated 5 mins ago",
      imgSrc: "/img/Ellipse 10.png",
    },
    {
      id: 6,
      name: "David Wilson",
      text: "More cards appearing in the second slide.",
      time: "Last updated 5 mins ago",
      imgSrc: "/img/Ellipse 100.png",
    },
  ],
];

const ReviewCarousel = () => {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If mobile, flatten reviews so each card gets its own slide
  const displayedReviews = isMobile ? reviews.flat() : reviews;

  return (
    <>
      <div className="reviewmain py-5">
        <div className="container text-center ">
          <div className="mb-4">
            <img src="/img/Group 168.png" alt="" className="Rectangle mx-2" />
            <img src="/img/Group 169.png" alt="" className="Rectangle mx-2" />
          </div>
          {/* <div className="d-flex  gap-5 justify-content-center">
          <div className="offer-banner">
  <div className="offer-overlay">
    <h2>Bundle & Save</h2>
    <p>10% OFF</p>
    <a href="#">Shop Now</a>
  </div>
  <img src="/img/Rectangle 293.png" alt="Bundle & Save" className=" Rectangle offer-img" />
</div>
<div className="offer-banner d-flex">
  <div className="offer-overlay">
    <h2>Bundle & Save</h2>
    <p>Up To 50% OFF</p>
    <a href="#">Shop Now</a>
  </div>
  <img src="/img/Rectangle 294.png" alt="Bundle & Save" className=" Rectangle offer-img" /></div>
</div> */}

          <h2 className="review text-dark">Review</h2>

          {/* Bootstrap Carousel */}
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {displayedReviews.map((group, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="card-group">
                    {/* If mobile, show one card per slide */}
                    {(isMobile ? [group] : group).map((review) => (
                      <div className="cardd mt-5" key={review.id}>
                        <img
                          src={review.imgSrc}
                          className="card-img-topp"
                          alt={review.name}
                        />
                        <div className="card-bodyy">
                          <h5 className="card-title">{review.name}</h5>
                          <p className="card-text mt-2">{review.text}</p>
                          <p className="card-text">
                            <small className="text-muted">{review.time}</small>
                          </p>
                          <div className="d-flex justify-content-center">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className=" d-flex text-warning"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {location.pathname === "/review" && (
        <>
          <FAQ />
          <Wave />
          <Footer />
        </>
      )}
    </>
  );
};

export default ReviewCarousel;

// Sample review data
// const reviews = [
//   [
//     {
//       id: 1,
//       name: "John Doe",
//       text: "This is a wider card with supporting text below.",
//       time: "Last updated 3 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       text: "This card has supporting text below.",
//       time: "Last updated 3 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       text: "This card has even longer content.",
//       time: "Last updated 3 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//   ],
//   [
//     {
//       id: 4,
//       name: "Michael Brown",
//       text: "Different card content for the second slide.",
//       time: "Last updated 5 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//     {
//       id: 5,
//       name: "Emily White",
//       text: "Another set of cards in the carousel.",
//       time: "Last updated 5 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//     {
//       id: 6,
//       name: "David Wilson",
//       text: "More cards appearing in the second slide.",
//       time: "Last updated 5 mins ago",
//       imgSrc: "/img/Ellipse 10.png",
//     },
//   ],
// ];

// const ReviewCarousel = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // ✅ Detect screen size changes
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ If mobile, flatten reviews so each card gets its own slide
//   const displayedReviews = isMobile ? reviews.flat() : reviews;
//   return (
//     <div className="reviewmain py-5">
//       <div className="container text-center">
//         {/* Review Section Header */}
//         <div className="mb-4">
//           <img src="/img/Group 168.png" alt="" className="Rectangle mx-2" />
//           <img src="/img/Group 169.png" alt="" className="Rectangle mx-2" />
//         </div>
//         <h2 className="review text-danger">Review</h2>

//         {/* Bootstrap Carousel */}
//         <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             {reviews.map((group, index) => (
//               <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
//                 <div className="card-group">
//                   {group.map((review) => (
//                     <div className="card" key={review.id}>
//                       <img src={review.imgSrc} className="card-img-topp" alt={review.name} />
//                       <div className="card-body">
//                         <h5 className="card-title">{review.name}</h5>
//                         <p className="card-text">{review.text}</p>
//                         <p className="card-text">
//                           <small className="text-muted">{review.time}</small>
//                         </p>
//                         <div className="d-flex">
//                           {[...Array(5)].map((_, i) => (
//                             <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Controls */}
//           <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCarousel;
