/* eslint-disable import/no-anonymous-default-export */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      autoplay
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img alt="" src="https://imgur.com/uXzVPSB.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="https://imgur.com/KXWVWN6.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="https://imgur.com/vLlbNC6.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="https://imgur.com/EaC4AZb.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="https://imgur.com/zvBAcUw.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="https://imgur.com/FxDkS87.png" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
