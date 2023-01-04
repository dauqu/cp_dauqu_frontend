import React from "react";
import Carousel from "react-elastic-carousel";
import nf from "../assets/images/nf.png";
import sl from "../assets/images/sl.png";
import gii from "../assets/images/gii.png";
import ar from "../assets/images/ar.png";
import en from "../assets/images/en.png";
import img1 from "../assets/images/slider1.jpeg";
import img2 from "../assets/images/slider2.jpeg";
import img3 from "../assets/images/slider3.jpeg";
import img4 from "../assets/images/slider4.jpeg";
import img5 from "../assets/images/slider5.jpeg";
import img6 from "../assets/images/slider6.jpeg";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
function Slider() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-4"
      >
        <SwiperSlide>
          <div>
            <img src={ss2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Carousel itemsToShow={1} showArrows={true} className="p-4">
       
     
       
        
       

        

        
        
      </Carousel> */}
    </div>
  );
}

export default Slider;
