import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type InstagramSlideProps = {
  data: any;
};

export const InstagramSlide = ({ data }: InstagramSlideProps) => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={true}
        speed={500}
        pagination={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          320: {
            spaceBetween: 12
          },
          1024: {
            spaceBetween: 30
          }
        }}
        slidesPerView={'auto'}
        modules={[Autoplay, Navigation]}
        className="mySwiper -mx-[50px]"
      >
        {data.map((item: any) => (
          <SwiperSlide
            key={item?.id}
            className="rounded-2xl bg-white p-2 !w-fit"
          >
            <img src={item.image} alt="instagram item" className="w-[156px] lg:!w-[269px] h-[156px] lg:!h-[269px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
