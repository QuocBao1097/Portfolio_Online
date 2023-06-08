import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import Trung74 from "../../img/trung.jpg"
import Trung34 from "../../img/thanhtrung.jpg"
import Linh from "../../img/linh.jpg"
const Testimonial = () => {
  const clients = [
    {
      img: Linh,
      review:
      "You are a very dedicated person and always willing to help. I can always rely on you in difficult times and know that you will always be on my side. Your dedication and loyalty is greatly appreciated.",
    },
    {
      img: Trung34,
      review:
      "You are very creative and full of ideas. Always have original ideas and react quickly in every situation. I see that you are constantly improving and bringing new ideas, that's true.  Great.",
    },
    {
      img: Trung74,
      review:
      "You are very creative and full of ideas. Always have original ideas and react quickly in every situation. I see that you are constantly improving and bringing new ideas, that's true.  Great.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My friends </span>
        <span>rate me very well </span>
        <span>...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
