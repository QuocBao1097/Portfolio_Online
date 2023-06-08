import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

import Project1 from "../../img/1.png"
import Project2 from "../../img/2.png"
import Project3 from "../../img/3.png"
import Project4 from "../../img/4.png"
import Project5 from "../../img/5.png"

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Projects</span>
      <span>Website & App Mobile</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Project1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
