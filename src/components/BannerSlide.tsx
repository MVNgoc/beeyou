import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideBanner from '../../src/assets/image/SlideBanner.png';

const slideData = [
  {
    id: 1,
    image: SlideBanner
  },
  {
    id: 2,
    image: SlideBanner
  },
  {
    id: 3,
    image: SlideBanner
  },
  {
    id: 4,
    image: SlideBanner
  },
  {
    id: 5,
    image: SlideBanner
  }
];

export const BannerSlide = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={false}
        speed={500}
        pagination={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map(slide => (
          <SwiperSlide key={slide?.id}>
            <div className="relative w-full">
              <img
                src={slide?.image}
                alt="SlideBanner"
                className="w-full object-cover h-[480px] mx-auto rounded-[24px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
