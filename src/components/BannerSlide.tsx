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
        autoplay={true}
        speed={500}
        pagination={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bannerSlide"
      >
        {slideData.map(slide => (
          <SwiperSlide key={slide?.id}>
            <div className="relative w-full border border-Silver_Sand shadow-shadow_1 rounded-lg lg:rounded-3xl">
              <img
                src={slide?.image}
                alt="SlideBanner"
                className="w-full object-cover h-[122px] lg:h-[480px] mx-auto rounded-lg lg:rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
