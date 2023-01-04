import React from "react";
import Carousel from "react-elastic-carousel";
import node from "../assets/images/node.svg";
import mongo from "../assets/images/mongo.svg";
import flutter from "../assets/images/flutter.svg";
import vue from "../assets/images/vue.svg";
import dart from "../assets/images/dart.svg";
import laravel from "../assets/images/laravel.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import react from "../assets/images/react.svg";
import django from "../assets/images/django.svg";
import python from "../assets/images/python5.svg";
import angular from "../assets/images/angular.svg";
import spring from "../assets/images/spring3.svg";
import docker from "../assets/images/docker.svg";
import c from "../assets/images/c.svg";
import js from "../assets/images/js.svg";
import css from "../assets/images/css.svg";
import kotlin from "../assets/images/kotlin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
function Icons_slider() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="p-4 md:mb-24 mb-4 w-[90%] m-auto">
      <div className="text-[#333333] md:text-[40px] flex text-center justify-center font-bold md:mb-24 mb-12 ">
        Dauqu Supported Technologies
      </div>
      <Swiper
        slidesPerView={7}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="p-2 cursor-pointer"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 70,
          },
        }}
      >
        <SwiperSlide className="flex  ">
          <img src={node} alt="node" className="w-20 h-20" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={mongo} alt="mongo" className="w-20 h-20" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={flutter} alt="flutter" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={docker} alt="vue" className="w-16 h-16" />
        </SwiperSlide>

        <SwiperSlide className="flex ">
          <img src={c} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={css} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={js} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={kotlin} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={vue} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={dart} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={laravel} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={react} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={tailwindcss} alt="vue" className="w-16 h-16" />
        </SwiperSlide>

        <SwiperSlide className="flex ">
          <img src={django} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={python} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={angular} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <img src={spring} alt="vue" className="w-16 h-16" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Icons_slider;
